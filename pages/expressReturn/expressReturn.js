// pages/expressReturn/expressReturn.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        storeId:[1,1],
        date: "选择时间",//时间
        Date:"",
        takePeople: "",//收货人
        takePhone: "",//收货人电话
        takeArea: [1, 2, 3],//收货区域
        areaId:[],
        areaIndex:0,
        takeShop: [1, 2, 3],//收货店铺
        shopId:[],
        shopIndex:0,
        takePlace: "",//收货详细地址
        express: [1, 2, 3],//快递公司
        expressId:[],
        expressIndex: 0,
        expressNum: '',//快递单号
        sendPeople: "",//发货人
        sendPhone: "",//发货人电话
        return:"",
        shopID:"",
    },
    //时间选择
    // DateChange: function (e) {
    //     var date = e.detail.value;
    //     var start=date.replace(/-/g,'/');
    //     var start1=new Date(start);
    //     var time=start1.getTime(start1)/1000;
    //     this.setData({
    //         date: date,
    //         Date:time
    //     })
    // },
    //多选框的存储
    optionChange: function (e) {
        var data = this.data;
        var Type = e.target.dataset.type;
        if (Type == 1) {
            var Site = e.detail.value;
            this.setData({
                areaIndex: Site
            })
        } else if (Type == 2) {
            var Shop = e.detail.value;
            this.setData({
                shopIndex: Shop
            })
        } else {
            var ExpressIndex = e.detail.value;
            this.setData({
                expressIndex: ExpressIndex
            })
        }
    },
    outPut: function (e) {
        var Type = e.currentTarget.dataset.type;
        var value = e.detail.value;
        console.log(e);
        if (Type == 1) {
            this.setData({
                takePeople: value
            })
        } else if (Type == 2) {
            this.setData({
                takePhone: value
            })
        } else if (Type == 3) {
            this.setData({
                takePlace: value
            })
        }
        else if (Type == 4) {
            this.setData({
                expressNum: value
            })
        } else if (Type == 5) {
            this.setData({
                sendPeople: value
            })
        } else {
            this.setData({
                sendPhone: value
            })
            console.log(this.data)
        }
    },
    outputArea:function (e) {
        var type=e.detail.value;

        this.setData({
            return:type
        })
        console.log(this.data.return);
    },
    //发货选择
    sendExpress: function (e) {
        var data = this.data;
        let obj={};
        var storeId=data.storeId;
        // obj.ctime=data.Date;
        obj.receiver=data.takePeople;
        obj.rephone=data.takePhone;
        obj.reshopId=data.shopID;
        // obj.areaId=data.areaId[data.areaIndex];
        // obj.reshopId=data.shopId[data.shopIndex];
        obj.address=data.takePlace;
        obj.expressId=data.expressId[data.expressIndex];
        obj.expressCode=data.expressNum;
        obj.shipper=data.sendPeople;
        obj.shphone=data.sendPhone;
        obj.remark=data.return;
        console.log(obj);
        wx.request({
            url:data.url+"shopout/backstore",
            method:"POST",
            data:{
                data:obj,
                storeId:storeId
            },
            success:function (res) {
                console.log(1);
                if(res.data.code){
                    wx.showModal({
                        title: '提示',
                        content: '发货成功',
                        showCancel:false,
                        success: res=>{
                            if (res.confirm) {
                                wx.navigateBack({
                                    delta: 3
                                })
                            }
                        }
                    })
                }else if(res.data.code){
                    wx.showModal({
                        title: '警告',
                        content: '发货失败',
                        showCancel:false,
                        success: res=>{
                            if (res.confirm) {
                                wx.navigateBack({
                                    delta: 3
                                })
                            }
                        }
                    })
                }

            }
        });

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let url=app.url;
        var str=options.storeId;
        let shopID=wx.getStorageSync('shopId');
        let storeId=str.split(",");
        var that=this;
        that.setData({
            url:url,
            storeId:storeId,
            shopID:shopID
        })
        wx.request({//获取区域
            url:this.data.url+"sundry/areas",
            method:"POST",
            success:function (res) {
                console.log(res);
                var size=[];
                var sizeId=[];
                function sizePush(item,index){
                    size.push(item.area);
                    sizeId.push(item.areaid);
                }
                res.data.data.forEach(sizePush);
                console.log(size);
                // var newsize=that.data.select;
                // newsize.size=size;
                // newsize.sizeId=sizeId;
                that.setData({
                    takeArea:size,
                    areaId:sizeId
                })
            }
        });
        wx.request({//获取店铺地址
            url:this.data.url+"sundry/shop",
            method:"POST",
            success:function (res) {
                console.log(res);
                var size=[];
                var sizeId=[];
                function sizePush(item,index){
                    size.push(item.shopName);
                    sizeId.push(item.shopId);
                }
                res.data.data.forEach(sizePush);
                console.log(size);
                that.setData({
                    takeShop:size,
                    shopId:sizeId
                })
            }
        });
        wx.request({//获取快递地址
            url:this.data.url+"sundry/express",
            method:"POST",
            success:function (res) {
                console.log(res);
                var size=[];
                var sizeId=[];
                function sizePush(item,index){
                    size.push(item.expressName);
                    sizeId.push(item.expressId);
                }
                res.data.data.forEach(sizePush);
                console.log(size);
                that.setData({
                    express:size,
                    expressId:sizeId
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