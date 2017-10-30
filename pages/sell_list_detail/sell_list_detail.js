// pages/sell_list_detail/sell_list_detail.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      noMore:false,
      select:{
          use:false,
          start:"开始时间",
          Start:"",
          end:"结束时间",
          End:"",
          area:"",//区域
          areaId:"",
          areaIndex:"",
          shop:"",//店铺
          shopId:"",
          shopIndex:"",
          list:["已对账","未对账"],//账单选择
          listId:[1,2],
          listIndex:0
      },
      Data:""//返回数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      var num=options.list;
      this.setData({
          url:url,
          number:num
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