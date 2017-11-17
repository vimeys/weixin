// pages/shopIn_return/shopIn_return.js
var app = getApp();
var confirm = require("../../utils/shopconfirn");
let common = require("../../utils/common");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "",
        number: "",
        shopId: "",
        Data: "",
        uname: "",
        sendData: ""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let number = options.Number;
        let url = app.url;
        let shopId = wx.getStorageSync('shopId');
        let uname = wx.getStorageSync('uname');
        let that = this;
        this.setData({
            url: url,
            number: number,
            shopId: shopId,
            uname: uname
        })
        wx.request({
            url: this.data.url + "shopstore/backgoodslist",
            method: "POST",
            data: {
                shopId: this.data.shopId
            },
            success: function (res) {
                if (res.data.code == 200) {
                    let json = res.data.data;
                    function slice(item,index) {
                        if(item.goodsFashion.length>12){
                            item.goodsFashion=item.goodsFashion.slice(0,12)+'...';
                        }
                        if(item.colorName.length>3){
                            item.colorName=item.colorName.slice(0,2)+'...';
                        }
                    }
                    res.data.data.forEach(slice);
                    that.setData({
                        Data: json
                    })
                }
            }
        })
    },
    //确认入库事件
    confirm: function (e) {
        confirm.confirm(this, "shopstore/backgoodsoko")
    },
    //修改数量
    output: function (e) {
        common.output(e,this,"shopstore/backfix")
    },
    //删除数据
    delGoods:function (e) {
        common.delGoodsShop(e,this,"shopstore/backdel")
    },
    //继续添加
    go: function (e) {
        common.go(this)
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