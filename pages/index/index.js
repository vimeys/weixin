//index.js
//获取应用实例
var app = getApp();
var getUrl=require("../../utils/getUrl");
Page({
  data: {
    array:[1,2,3],
    index:0,
    judgeUrl:1,
    url: "",
    url1:"",
    user: { nick: '', avatarUrl: '/images/default-header.png' },
    userInfo:"",
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindUrlTap:function (e) {
    getUrl.getUrl(e,this);
  },
  onLoad: function () {
    // wx.login({
    //   success: function (res) {
    //     console.log(res.code);
    //   }
    // })
    // app.getUserInfo(function (userInfo) {
    //   this.setData({
    //     userInfo: userInfo
    //   })
    // });
    wx.setStorage({
      key:"userNum",
      data:"4"
    });
    console.log(this.data.userInfo)
    var url=wx.getStorageSync("userNum");
    if(url==3||url==1){
      this.setData({
        url:"../stock_store/stock_store",
      })
    }else{
      this.setData({
        url1:"../stock_storage/stock_storage",

      })
    }


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
  //   DateChange:function (e) {
  //     console.log(e.detail.value);
  //     this.setData({
  //         index:e.detail.value
  //     })
  // }
})
