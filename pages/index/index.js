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
    Model:false,
    items: [
      {'name': 'USA', 'value': '美国'},
      {'name': 'CHN', 'value': '中国'},
      {'name': 'BRA', 'value': '巴西'},
      {'name': 'JPN', 'value': '日本sdf啥地方风问'},
      {'name': 'ENG', 'value': '英国'},
      {'name': 'TUR', 'value': '法国'},
    ],
  },
  checkboxChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    // if(e.detail.value){
      console.log(1);
    this.setData({
      Model:false
    })
    wx.navigateTo({
      url: '../stock_store/stock_store?shopId='+e.detail.value
    })
    // }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //绑定仓库跳转
  bindUrlTap:function (e) {
    var url=wx.getStorageSync('userNum');
    if(url==3||url==4){
      this.setData({
        url:"../stock_storage/stock_storage"
      })
    }
    getUrl.getUrl(e,this);
  },

  //绑定店铺跳转
  bindUrl1Tap:function (e) {
    var url=wx.getStorageSync('level');
    if(url==3||url==4){
      this.setData({
        url1:"123",
        Model:true
      })
    }
    if(this.data.Model.toString()=="false"){
      console.log(1);
      getUrl.getUrl(e,this);
    }
  },


  onLoad: function () {
    // wx.setStorage({
    //   key:"userNum",
    //   data:"3"
    // });
    var shop=wx.getStorageSync("shop");
    this.setData({
        items:shop
    });
    console.log(shop);
    console.log(this.data.userInfo);
    var url=wx.getStorageSync("level");
    if(url==2){
      this.setData({
        url:"../stock_storage/stock_storage",
      })
    }else if(url==1){
      this.setData({
        url1:"../stock_store/stock_store",
      })
    }else{
      this.setData({
        url:"../stock_storage/stock_storage"
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
