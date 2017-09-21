// pages/storage_count/storage_count.js
var app = getApp();
var Datechange = require("../../utils/Datechange.js");
var optionChange=require("../../utils/optionChange");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: {
      use: false,
      start: "开始时间",
      end: "结束时间",
      Date: {"a": ["new"], "b": 2, "c": 3, "d": 4},
      size:["S","M","L","XL","XXL"],
      name:["长","宽","高"],
      ways:['正常入库','退货入库','调货入库'],
      nameIndex:0,
      sizeIndex:0,
      waysIndex:0
    },

  },
  DateChange:function (e) {
    Datechange.DateChange(e,this);
  },

  optionChange:function (e) {
    optionChange.optionChange(e,this);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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