// pages/sell_list_area/sell_list_area.js
var app=getApp();
var DateChange=require("../../utils/Datechange");
var request=require("../../utils/totalRequest");
var optionChange=require("../../utils/optionChange");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      noMore:false,
      select:{
          use:false,
          start:"开始时间",
          Start:"",
          end:"结束时间",
          End:"",
          area:"",//区域
          areaId:"",
          areaIndex:"",
          shop:"",//店铺
          shopId:"",
          shopIndex:"",
          list:"",//账单选择
          listId:[1,2],
          listIndex:""
      },
      Data:""//返回数据
  },
    //时间选择
    DataChange:function (e) {
        DateChange.DateChange(e.this,"")
    },
    //选择框
    optionChange:function (e) {
        optionChange.optionChangeSellAll(e,this,"");
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      this.setData({
          url:url,
      })
      request.sellListAll(this,"")
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