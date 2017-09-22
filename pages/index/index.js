//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    array:[1,2,3],
    index:0,
    judgeUrl:1,
    url: "../stock_storage/stock_storage",
    url1:"../stock_shop/stock_shop",
    user: { nick: '', avatarUrl: '/images/default-header.png' },
    userInfo:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindUrlTap:function () {
    wx.showModal({
      title: '警告',
      content: '你没有权限查看内容',
      success: res=>{
        if (res.confirm) {
          console.log(23);
        }
      }
    })
  },
  onLoad: function () {
    // wx.login({
    //   success: function (res) {
    //     console.log(res.code);
    //   }
    // })
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });
    wx.setStorage({
      key:"url",
      data:"1"
    });
    console.log(this.data.userInfo)
    // if(this.data.judgeUrl==1){
    //     // wx.showModal({
    //     //   title: '警告',
    //     //   content: '你没有权限查看内容',
    //     //   success: res=>{
    //     //     if (res.confirm) {
    //     //       console.log(23);
    //     //     }
    //     //   }
    //     // })
    //     this.setData({
    //       url1:""
    //     })
    // }
    //
    // var that = this;
    //
    // //调用应用实例的方法获取全局数据
    // wx.authorize({
    //   scope: 'scope.userInfo',
    //   success:function(){
    //     console.log(1);
    //   }
    // })
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res);
    //     that.setDate({
    //       user:res
    //     })
    //   }
    // })
  },
  onLaunch:function () {
    console.log(1);
      
  },
    DateChange:function (e) {
      console.log(e.detail.value);
      this.setData({
          index:e.detail.value
      })
  }
})
