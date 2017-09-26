// pages/strOut_list/strout_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:[2],
    url:''

  },
  delThis:function (e) {
    var delCount=e.currentSrc.dataset.type;

  },
  getMore:function (e) {
    var count=this.data.count;
    wx.setStorage({
      key:"count",
      data:count
    });
    wx.navigateBack({
      delta:1
    })
  },
  express:function (e) {
    wx.navigateTo({
      url:"../express/express?number="+this.data.count
    });
    wx.removeStorageSync("count")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id=options.id
    var storage=wx.getStorageSync('count');
    var count=this.data.count;
    if(!storage){
      count.push(parseInt(id));
      this.setData({
        count:count
      })
    }else{
      storage.push(parseInt(id));
      this.setData({
        count:storage
      });
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