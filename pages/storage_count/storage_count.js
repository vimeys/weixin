// pages/storage_count/storage_count.js
var app = getApp();
var Datechange = require("../../utils/Datechange.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    abc: {
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
    console.log(e);
    console.log(this);
    var abc=this.data.abc;
    var Type=e.target.dataset.type;
    if(Type==1){
      abc.sizeIndex=e.detail.value;
      this.setData({
        abc:abc
      })
    }else if(Type==2){
      abc.nameIndex = e.detail.value;
      this.setData({
        abc: abc
      })
    }else if(Type==3){
      abc.waysIndex = e.detail.value;
      this.setData({
        abc: abc
      })
    }
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