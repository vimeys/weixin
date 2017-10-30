// pages/sell_money_store/sell_money_store.js
let app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      date: ["最近7天", "最近14天", "最近28天"],
      Data:"",
      index:0
  },
    optionChange:function (e) {
        var Type=e.target.dataset.type;
        if(Type==1){
            var value=e.detail.value;
            this.setData({
                index:value
            })
        }else if(Type==2){
            var value=e.detail.value;
            this.setData({
                shopIndex:value
            })
        }else if(Type==3){
            var value=e.detail.value;
            this.setData({
                shopIndex:value
            })
        }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let url=app.url;
      let that=this;
      that.setData({
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