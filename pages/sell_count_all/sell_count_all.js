// pages/sell_count_all/sell_count_all.js
let app=getApp();
var request=require("../../utils/totalRequest");
var optionChange=require("../../utils/optionChange");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "",
        noMore: false,
        date: ["最近7天", "最近14天", "最近28天"],
        Id: [7, 14, 28],
        index: 0,
        use: false,
        area: ['全部区域'],//区域
        areaId: [0],
        areaIndex: 0,
        shop: ['全部店铺'],//店铺
        shopId: [0],
        shopIndex: 0,
        Data: ""//返回数据
    },
    //选择框改变事件
    optionChange:function (e) {
        var Type=e.target.dataset.type;
        if(Type==1){
            var value=e.detail.value;
            this.setData({
                index:value
            })
        }else if(Type==2){
            var value=e.detail.value;
            this.setData({
                areaIndex:value
            })
        }else if(Type==3){
            var value=e.detail.value;
            this.setData({
                shopIndex:value
            })
        }
        request.sellCountAll(this,'sell/bosssellnumber');
    },
    areaChange:function (e) {
        var that=this;
        let areaIndex=e.detail.value;
        this.setData({
            areaIndex:areaIndex
        });
        wx.request({
            url:that.data.url+"sell/shopname",
            method:"POST",
            data:{
                cityId:that.data.areaId[that.data.areaIndex]
            },
            success:function (res) {
                console.log(res)
                let json=res.data.data;
                json.unshift({shopName:'全部店铺',shopId:'0'});
                let arr=[];
                let arr1=[];
                function push(item,index) {
                    arr.push(item.shopName);
                    arr1.push(item.shopId);
                }
                json.forEach(push);
                // let obj=that.data.select;
                // shop=arr;
                // shopId=arr1;
                // console.log(obj);
                that.setData({
                    shop:arr,
                    shopId:arr1,
                    shopIndex:0
                })
                request.sellCountAll(that,'sell/bosssellnumber');
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let url=app.url;
        let that=this;
        that.setData({
            url:url
        });
        //获取全部区域
        wx.request({
            url:that.data.url+"sell/city",
            method:"POST",
            success:function (res) {
                console.log(res);
                let json=res.data.data;
                json.unshift({city:'全部区域',cityid:0});
                let arr=[];
                let arr1=[];
                function push(item,index) {
                    arr.push(item.city);
                    arr1.push(item.cityid);
                }
                json.forEach(push);
                let obj=that.data.select;
                // obj.area=arr;
                // obj.areaId=arr1;
                // console.log(obj);
                that.setData({
                    area:arr,
                    areaId:arr1
                })
            }
        });
        request.sellCountAll(this,"sell/bosssellnumber")
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