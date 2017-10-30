// pages/storage_change/storage_change.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      select: {
          start: "开始时间",//开始时间
          Start: "",//开始时间撮
          end: "截止时间",//结束时间
          End: "",//结束时间撮
          orderId: "",//快递单号
          put:['收货入库','调货入库','退货入库'],
          putId:[1,2,3],
          putIndex:0
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