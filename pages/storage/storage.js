// pages/storage/storage.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindtap:function(){
      wx.scanCode({
          success:(res)=>{
            console.log(res.ruslut);
            wx.request({
              url:"",
              method:"GET",
              data:"",
              success:function (res) {
                var data=res.data;
                if(data.success=="true"){
                  wx.navigateTo({
                    url:"../storage_list/storage_list?number="+res.data.number
                  })
                }else{
                  wx.showModal({
                    title: '提示',
                    content: '该条码不存在,请核对后再扫描',
                    success: res=>{
                      if (res.confirm) {
                        console.log("关闭")
                      }
                    }
                  })
                }
              }
            })
          }
      })
  },
  //....
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