// pages/storage_count/storage_count.js
var app = getApp();
var Datechange = require("../../utils/Datechange.js");
var optionChange=require("../../utils/optionChange");
var output=require("../../utils/output");
var request=require("../../utils/totalRequest")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"",
    select: {
      use: false,
      style:"",
      styleNum:"",
      Barcode:"",
      start:"开始时间",
      Start:"",
      end: "结束时间",
      End:"",
      Date: {"a": ["new"]},
      size:["S","M"],
      sizeId:"",
      name:["长","宽","高"],
      nameId:[],
      ways:['全部','正常入库','退货入库'],
      waysId:[15,0,1],
      nameIndex:0,
      sizeIndex:0,
      waysIndex:0
    },
    Data:"",//接受数据
    year:"" ,//年
    hours:"",//时间
    noMore:true
  },
  DateChange:function (e) {
    Datechange.DateChange(e,this,"wearhouse/searchin");
  },
  output:function (e) {
      output.output(e,this,"wearhouse/searchin");
  },
  optionChange:function (e) {
    optionChange.optionChange(e,this,"wearhouse/searchin");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var url=app.url;
    this.setData({
      url:url
    });
    var that=this;
    var data=this.data;
      wx.request({
          url:data.url+"sundry/sizes",
          method:"POST",
          success:function (res) {
              var size=[];
              var sizeId=[];
              function sizePush(item,index){
                  size.push(item.sizeName);
                  sizeId.push(item.sizeId);
              }
              res.data.data.forEach(sizePush);
              size.unshift('全部');
              sizeId.unshift(0);
              var newsize=that.data.select;
              newsize.size=size;
              newsize.sizeId=sizeId;
              that.setData({
                  select:newsize,
              })
          }
      })
      //
      wx.request({
          url:data.url+"sundry/cat",
          method:"POST",
          success:function (res) {
              var name=[];
              var nameId=[]
              function sizePush(item,index){
                  name.push(item.catName);
                  nameId.push(item.catId)
              }
              res.data.data.forEach(sizePush);
              name.unshift('全部');
              nameId.unshift(0);
              var newsize=that.data.select;
              newsize.name=name;
              newsize.nameId=nameId;
              that.setData({
                  select:newsize
              })
          }
      });
      request.requesttime(this,"wearhouse/searchin")
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