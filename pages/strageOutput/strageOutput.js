// pages/strageOutput/strageOutput.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:""
  },
  bindtap:function(e){
    wx.scanCode({
      success:(res)=>{
        let BarCode=res.result;
        if(BarCode){
          wx.request({
            url:this.data.url+"/Ajax/U/GetGoods.aspx?U=''&Token=''"+ "&Number=" + res.result,
            method:'GET',
            success:function (res) {
              var result=res.data;
              console.log(result);
              if(result.success=='true'){
                wx.navigateTo({
                  url: '../strOut_list/strOut_list?Number='+result.Number
                })
              }else{
                wx.showModal({
                  title:'提示',
                  content:'商品条码信息不全,请重新输入',
                  success:function (e) {
                    wx.navigateTo({
                      url: "../strOut_JOG/strOut_JOG"
                    })
                  }
                })
              }
            }
          })
        }
      },
      fail:(res) =>{
        wx.showModal({
          title: '提示',
          content: '该条码无法识别，请手动输入条码',
          showCancel: false,
          success: function (res) {
            wx.navigateTo({
              url: "../strOut_JOG/strOut_JOG"
            })
          }
        })
      }
    })
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