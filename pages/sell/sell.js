// pages/sell/sell.js
var getStor=require("../../utils/getStorage");
var app=getApp();
var getUrl=require("../../utils/getUrl");
Page({
  /**
   * 页面的初始数据
   */
  data: {
      url:'',
      urlList:'', //销售单页面
      urlCount:"",//统计单页面
      urlMoney:"",//销售额页面
      urlExcel:""//销售图标

  },
   bindUrlTap:function (e) {
       getUrl.getUrl(e,this);
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // var url=app.url;
      //权限分类
    var level=wx.getStorageSync('level');
    if(level==1){
        this.setData({
            urlList:"../sell_list_store/sell_store",
            urlCount:"../sell_count_store/sell_count_store",
            urlMoney:"../sell_money_store/sell_money_store",
            urlExcel:"../charts/line/line"
        })
    }else if(level==3){
            this.setData({
                urlList: "../sell_list_area/sell_list_area",
                urlCount:"../sell_count_area/sell_count_area",
                urlMoney:"../sell_money_area/sell_money_area",
                urlExcel:"../charts_area/charts_ares"
            })
    }else if(level==4){
        this.setData({
            urlList: "../sell_list_all/sell_list_all",
            urlCount:"../sell_count_all/sell_count_all",
            urlMoney:"../sell_money_all/sell_money_all",
            urlExcel:"../charts_all/charts_all"
        })
    }
    // getStor.getStor(this);
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