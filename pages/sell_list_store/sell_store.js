// pages/sell_list_store/sell_store.js
var Datechange=require("../../utils/Datechange");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:{
      start:"开始时间",
      end:"截止时间",
      state:["已对账","未对账"],
      use:false
    },

    index:0
  },
  DateChange:function (e) {
    Datechange.DateChange(e,this);
  },
  optionChange:function (e) {
      var index=e.detail.value;
      console.log(index);
      this.setData({
        index:index
      })
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