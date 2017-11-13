// pages/chuku/chuku.js
var getUrl = require("../../utils/getUrl")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "",//仓库链接
        url1: "",//店铺链接
        Model: false,
        items: [
            {name: 'USA', value: '美国'},
            {name: 'CHN', value: '中国'},
            {name: 'BRA', value: '巴西'},
            {name: 'JPN', value: '日本sdf啥地方风问'},
            {name: 'ENG', value: '英国'},
            {name: 'TUR', value: '法国'},
        ]
    },
    hide:function (e) {
        if(this.data.Model){
            this.setData({
                Model:false
            })
        }

    },
    //选择店铺
    checkboxChange: function (e) {
        console.log(1);
        this.setData({
            Model: false
        });
        wx.setStorageSync('shopId', e.detail.value);
        wx.navigateTo({
            url: '../shopOut/shopOut?shopId=' + e.detail.value
        })
    },
    //仓库链接权限
    bindUrlTap: function (e) {
        var level = wx.getStorageSync('level');
        if (level == 3 || level == 4) {
            this.setData({
                url: "../strageOutput/strageOutput"
            })
        }
        getUrl.getUrl(e, this)
    },
    //店铺链接权限
    bindUrl1Tap: function (e) {
        var level = wx.getStorageSync('level');
        if (level == 3 || level == 4) {
            this.setData({
                url1: "123",
                Model: true
            })
        }
        if (this.data.Model.toString() == 'false') {
            getUrl.getUrl(e, this);
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var shop = wx.getStorageSync("shop");
        this.setData({
            items: shop
        })
        var level = wx.getStorageSync('level');
        if (level == 2) {
            this.setData({
                url: "../strageOutput/strageOutput"
            })
        } else if (level == 1) {
            this.setData({
                url1: "../shopOut/shopOut"
            })
        } else if (level == 3 || level == 4) {
            this.setData({
                url: "../strageOutput/strageOutput"
            })
        }
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
        this.setData({
            Model:false
        })
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