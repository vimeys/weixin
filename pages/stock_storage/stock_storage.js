// pages/stock_storage/stock_storage.js
var app=getApp();
var DateChange=require("../../utils/Datechange");
var optionChange=require("../../utils/optionChange");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:"",
    select: {
      use: false,
      style:'',
      styleNum:"",
      Barcode:'',
      start: "",
      end: "",
      Date: { "a": ["new"], "b": 2, "c": 3, "d": 4 },
      size: ["S", "M", "L", "XL", "XXL"],
      name: ["长", "宽", "高"],
      ways: ['正常入库', '退货入库', '调货入库'],
      sizeIndex: 0,
      nameIndex: 0,
      waysIndex: 0
    }
  },
  optionChange:function (e) {
    optionChange.optionChange(e,this)
  },
  stock:function (e) {
    var Type=e.currentTarget.dataset.type;
    if(Type==1){
      var select=this.data.select;
      select.style=Type;
      this.setData({
        select:select
      })
    }else if(Type==2){
      var select=this.data.select;
      select.styleNum=Type;
      this.setData({
        select:select
      })
    }else{
      var select=this.data.select;
      select.Barcode=Type;
      this.setData({
        select:select
      })
    }
    var url=app.url;
    this.setData({
      url:url
    });
    wx.request({
      url:url+"/Ajax/U/ListOrder.aspx?" + "U=&Token=" + "&State=undefined" + this.data.select.start + "&PageIndex=1" + "&Number=" + this.data.select.Barcode + "&Name=" + this.data.select.style + "&Size=" + this.data.select.styleNum + "&Color=" +  + "&Series=",
      method:"GET",
      success:function (res) {
        console.log(url+"/Ajax/U/ListOrder.aspx?" + "U=&Token=" + "&State=undefined"  + "&PageIndex=1" + "&Number="  + "&Name="   + "&Size=L"  + "&Color="   + "&Series=")
        var json=res.data;
        console.log(res);
      }
    })
  },
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