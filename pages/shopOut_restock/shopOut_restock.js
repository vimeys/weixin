// pages/shopOut_restock/shopOut_restock.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      UserID:"",//用户姓名
      url:"",//
      choose:1,//选中样式
      btnWord:"确认",//确认按钮的样式
      urlData:""//请求路径
  },
    //选择发货方式
  chooseStyle:function (e) {
    var Type=e.currentTarget.dataset.type;
    if(Type==2){
        this.setData({
            choose:2,

        })
    }else if(Type==1){
      this.setData({
          choose:1,
          btnWord:"确认"
      })
    }
    console.log(e);
  },
  //跳转退货页面
  navTo:function (e) {
    wx.navigateTo({
      url: '../shopOut_return/shopOut_return'
    })
  },
  //选择确认页面
    getNav:function (e) {
      var Type=e.currentTarget.dataset.type;
      if(Type==1) {
          // wx.request({
          //     url:this.data.url+"",
          //
          // })
          wx.navigateTp({
              url:"../strageOutput/strageOutput"
          })
      }else{
        // wx.request({
        //     url:this.data.url+"",
        //     method:"POST",
        //     data:{},
        //     success:function (res) {
        //
        //     }
        // });
        wx.navigateTo({
          url: '../express/express'
        })
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      this.setData({
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