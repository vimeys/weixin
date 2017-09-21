// pages/storage_returns/storage_returns.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:{
      use:false,
    start:"开始时间",
    end:"结束时间"
    }
      
   
    
  },
  DateChange:function (e) {
    console.log(e.target.dataset.type);
    var Type=e.target.dataset.type;
    if(Type==1){
      this.setData({
        start:e.detail.value
      })
    }else{
      this.setData({
        end:e.detail.value
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