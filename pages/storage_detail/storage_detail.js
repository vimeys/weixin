// pages/storage_detail/storage_detail.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      orderId:"",//订单的id
      Data:"",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
      var url=app.url;
      var num=options.orderId;
      this.setData({
          url:url,
          orderId:num
      })
      wx.request({
          url:that.data.url+"wearhouse/backgoodsinfo",
          method:"POST",
          data:{
              orderId:that.data.orderId
          },
          success:function (res) {
              var json=res.data.data;
              that.setData({
                  Date:json
              });
              var num=[];
              function change(item,index){
                  item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                  num.push(item)
              }
              res.data.data.forEach(change);
              that.setData({
                  Date:num,
              })
              console.log(that.data.Date[0].status);
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