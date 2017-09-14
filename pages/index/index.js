//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array:[1,2,3],
    index:0,
    url: "../stock_storage/stock_storage",
    url1:"../stock_store/stock_store"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
    DateChange:function (e) {
      console.log(e.detail.value);
      this.setData({
          index:e.detail.value
      })
  }
})
