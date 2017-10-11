// pages/storage_JOG/storage_JOG.js
var app=getApp();
var storageJOG=require("../../utils/storageJOG");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      Number:""
  },
  bindInput:function (e) {
    var value=e.detail.value;
    this.setData({
      Number:value
    })
  },
  location:function (e) {
    // var that=this.data;
    storageJOG.storageJOG("../storage_list/storage_list",this);
    console.log(this.data.Number);
    // wx.navigateTo({
    //     url: '../storage_list/storage_list'
    //   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      this.setData({
          url:url
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