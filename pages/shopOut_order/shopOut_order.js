// pages/strOut_order/strOut_order.js
var app=getApp();
var common=require("../../utils/common");
let formatTime=require("../../utils/util");
let request=require("../../utils/totalRequest");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        disable:true,//结束时间禁用
        select:{
            start: "开始时间",//开始时间
            Start: "",//开始时间撮
            end: "截止时间",//结束时间
            End: "",//结束时间撮
            area: ["区域", "区域2"],//发货区域
            areaId:"",//具体区域
            areaIndex: 0,//发货区域下标
            shop:["成华","金牛"],
            shopId:[],
            shopIndex:0,
            style: ["待收货", "已出库", "发货修改"],//发货状态
            styleId:[0,1,2],//具体状态
            styleIndex: 0,
            return:['退货出库',"调货出库"],
            returnId:[2,3],
            returnIndex:0,
            express: ["圆通", "申通", "汇通"],//快递
            expressId:"",//具体快递
            expressIndex: 0,
            expressNum: ""//快递单号
        },
        Data:"",
        shopId:''
    },
    DateChange: function (e) {
        var Type = e.target.dataset.type;
        if (Type == 1) {
            var start = e.detail.value;
            var time = start.replace(/-/g, '/');
            var timer = new Date(time).getTime();
            let select=this.data.select;
            select.start=start;
            select.Start=timer;
            this.setData({
                disable:false,
                select:select
            })
            request.shopOutOrder(this,"shopout/orderlist")
        } else {
            var end = e.detail.value;
            var time = end.replace(/-/g, '/');
            var timer = new Date(time).getTime();
            let select=this.data.select;
            select.end=end;
            select.End=timer;
            this.setData({
                select:select
            })
            request.shopOutOrder(this,"shopout/orderlist")
        }
    },
    optionChange: function (e) {
        var Type = e.currentTarget.dataset.type;
        console.log(e);
        if (Type == 1) {
            var i = e.detail.value;
            var select=this.data.select;
            select.areaIndex=i
            this.setData({
                select: select,
            });
            request.shopOutOrder(this,"shopout/orderlist")
            console.log(e);
        } else if (Type == 2) {
            var i = e.detail.value;
            var select=this.data.select;
            select.shopIndex=i;
            this.setData({
                select: select,
            })
            request.shopOutOrder(this,"shopout/orderlist")
        } else if(Type==3) {
            var i = e.detail.value;
            var select=this.data.select;
            select.styleIndex=i;
            this.setData({
                select: select,
            })
            request.shopOutOrder(this,"shopout/orderlist")
        }else if(Type==4){
            var i=e.detail.value;
            var select=this.data.select;
            select.expressIndex=i
            this.setData({
                select: select,
            });
            request.shopOutOrder(this,"shopout/orderlist")
        }else if(Type==5){
            var i=e.detail.value;
            var select=this.data.select;
            select.returnIndex=i
            this.setData({
                select: select,
            })
            request.shopOutOrder(this,"shopout/orderlist")
        }
    },
    output: function (e) {
        var Num = e.detail.value;
        this.setData({
            expressNum: Num
        })
        request.shopOutOrder(this,"shopout/orderlist")
    },
    bindpick:function () {
        common.bindpick(this);
    },
    //订单详情跳转
    bindNav:function (e) {
        console.log(e);
        var name=e.currentTarget.dataset.name;
        var type=e.currentTarget.dataset.type;
        if(name=="待收货"||name=='已出库'){
            wx.navigateTo({
                url: '../shopOut_detail/shopOut_detail?orderId='+type
            })
        }if(name=="发货修改"){
            wx.navigateTo({
                url:"../shopOut_detailConfirm/shopOut_detailConfirm?orderId="+type
            })
        }
    },
    //获取区域选择
    areaChange:function (e) {
        var that=this;
        let select=that.data.select
        let areaIndex=e.detail.value;
        select.areaIndex=areaIndex;
        this.setData({
            select:select
        });
        wx.request({
            url:that.data.url+"sell/shopname",
            method:"POST",
            data:{
                cityId:that.data.select.areaId[that.data.select.areaIndex]
            },
            success:function (res) {
                console.log(res);
                if(res.data.code==200){
                    let json=res.data.data;
                    let arr=[];
                    let arr1=[];
                    function push(item,index) {
                        if(item.shopName.length>4){
                            item.shopName=item.shopName.slice(0,4);
                        }
                        arr.push(item.shopName);
                        arr1.push(item.shopId);
                    }
                    json.forEach(push);
                    select.shop=arr;
                    select.shopId=arr1;
                    select.shopIndex=0;
                    that.setData({
                        select:select
                    });
                    request.shopOutOrder(that,"shopout/orderlist")
                }else if(res.data.code==202){
                    select.shop=['仓库'];
                    select.shopId=[1000];
                    select.shopIndex=0;
                    that.setData({
                        select:select
                    });
                    request.shopOutOrder(that,"shopout/orderlist")
                }

            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var url=app.url;
        var that=this;
        let shopId=wx.getStorageSync('shopId');
        this.setData({
            url:url,
            shopId:shopId
        })
        wx.request({//获取区域
            url:this.data.url+"sundry/areas",
            method:"POST",
            success:function (res) {
                console.log(res);
                var size = [];
                var sizeId = [];

                function sizePush(item, index) {
                    size.push(item.area);
                    sizeId.push(item.areaid);
                }
                size.unshift('仓库');
                sizeId.unshift(1000);
                res.data.data.forEach(sizePush);
                var select = that.data.select;
                select.area = size;
                select.areaId = sizeId
                console.log(select);
                that.setData({
                    select: select
                })
            }
        });
        wx.request({//获取店铺地址
            url:this.data.url+"sundry/shop",
            method:"POST",
            success:function (res) {
                var size=[];
                var sizeId=[];
                function sizePush(item,index){
                    if(item.shopName.length>4){
                        item.shopName=item.shopName.slice(0,4);
                    }
                    size.push(item.shopName);
                    sizeId.push(item.shopId);
                }
                res.data.data.forEach(sizePush);
                size.unshift('仓库');
                sizeId.unshift(1000);
                var select=that.data.select;
                select.shop=size;
                select.shopId=sizeId
                that.setData({
                    select:select
                })
            }
        });
        wx.request({//获取快递地址
            url:this.data.url+"sundry/express",
            method:"POST",
            success:function (res) {
                var size=[];
                var sizeId=[];
                function sizePush(item,index){
                    size.push(item.expressName);
                    sizeId.push(item.expressId);
                }
                res.data.data.forEach(sizePush);
                var select=that.data.select;
                select.express=size;
                select.expressId=sizeId
                that.setData({
                    select:select
                })

            }
        });

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        let that=this;
        wx.request({
            url:this.data.url+'shopout/orderlist',
            method:"POST",
            data:{nowShopId:that.data.shopId},
            success:function (res) {
                console.log(res);
                if(res.data.code==200){
                    var num=[];
                    function change(item,index) {
                        item.okTime=formatTime.formatTime(res.data.data[index].ctime)
                        if(item.status==0){
                            item.Type="待收货"
                        }else if(item.status==1){
                            item.Type="已出库"
                        }else if(item.status==2){
                            item.Type='发货修改'
                        }
                        num.push(item);
                    }
                    res.data.data.forEach(change);
                    that.setData({
                        Data:num
                    })
                }else{
                    that.setData({
                        Data:[]
                    })
                }

            }
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})