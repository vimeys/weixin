// pages/ruku/ruku.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: "",//仓库链接
    url1:"",//店铺链接
    Model:false,
    items: [
      {name: 'USA', value: '美国'},
      {name: 'CHN', value: '中国'},
      {name: 'BRA', value: '巴西'},
      {name: 'JPN', value: '日本sdf啥地方风问'},
      {name: 'ENG', value: '英国'},
      {name: 'TUR', value: '法国'},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userNum=wx.getStorageSync('userNum');
    if(userNum==4){

    }
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