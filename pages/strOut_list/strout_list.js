// pages/strOut_list/strout_list.js
var app=getApp();
var common=require("../../utils/common")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"",
    count:[{"goods":"1"},{"goods":2},{"goods":3}]

  },
    //删除事件
  delThis:function (e) {
    var delCount=e.currentSrc.dataset.type;

  },
  //修改商品数量
    output:function(e){
      console.log(e);
      common.output(e,this);
    },
  //跳转填写快递页面
    express:function (e) {
      wx.navigateTo({
        url:'../express/express'
      })
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