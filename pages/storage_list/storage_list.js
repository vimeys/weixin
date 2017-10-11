// pages/storage_list/storage_list.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'',
    number:"",
    Data:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      var that=this;
      var Num=options.number
        this.setData({
            url:url,
            number:Num
      })
      wx.request({
          url:this.data.url+"wearhouse/waitList",
          method:"POST",
          // data:{}
          success:function (res) {
             var json=res.data.data;
             console.log(res.data);
             console.log(json);
             that.setData({
                 Data:json
             })
          }
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