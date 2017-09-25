// pages/strOut_JOG/strOut_JOG.js
var app=getApp();
var JOG=require("../../utils/JOG.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    Number:'',
    Barcode:''
  },
  outPut:function (e) {
    var num=e.detail.value;
    this.setData({
      Number:num
    })
  },
  location:function () {
    var num=this.data.Number;
    JOG.JOG("../strOut_list/strOut_list",num,this)
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