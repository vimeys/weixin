// pages/storage_change/storage_change.js
var app = getApp();
var Datechange = require("../../utils/Datechange");
let request=require("../../utils/totalRequest");
let timer=require("../../utils/util");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "",
        orderId: "",//快递单号
        select: {
            start: "开始时间",//开始时间
            Start: "",//开始时间撮
            end: "截止时间",//结束时间
            End: "",//结束时间撮
        },
        Data:""
    },
    DateChange:function (e) {
        Datechange.DateChange(e,this,"wearhouse/backingoods");
    },
    output:function (e) {
      let val=e.detail.value;
      this.setData({
          orderId:val
      })
        request.storChange(this,'wearhouse/backingoods');
    },
    click:function (e) {
        let that=this;
        var orderId=e.currentTarget.dataset.type;
        wx.navigateTo({
          url: '../storage_changeDetail/storage_changeDetail?orderId='+orderId
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that=this;
        let url=app.url;
        this.setData({
            url:url,
        });
        wx.request({
            url:that.data.url+"wearhouse/backingoods",
            method:"POST",
            data:{
              mark:1,
            },
            success:function (res) {
                console.log(res);
                let json =res.data.data;
                function push(item,index) {
                    item.okTime=timer.formatTime(item.ctime)

                }
                res.data.data.forEach(push);
                that.setData({
                    Data:json
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