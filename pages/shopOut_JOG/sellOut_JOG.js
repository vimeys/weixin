// pages/shopIn_JOG/shopIn_JOG.js
var app=getApp();
var shopJOG=require("../../utils/shopOut_JOG")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        number:"",
        shopId:"",
    },
    //
    bindInput:function (e) {
        var num=e.detail.value;
        this.setData({
            number:num
        })
    },
    location:function () {
        shopJOG.shopOut_JOG("shopout/manual",this)

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var url=app.url;
        let shopId=wx.getStorageSync('shopId');
        this.setData({
            url:url,
            shopId:shopId
        })
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