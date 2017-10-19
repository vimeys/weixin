// pages/shopIn_count/shopIn_count.js
var app=getApp();
var Datechange = require("../../utils/Datechange");
var optionChange = require("../../utils/optionChange");
var common=require("../../utils/common");
var output=require("../../utils/output");
var request=require("../../utils/totalRequest");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active1: '1',
    count: [1, 2, 3],
    goodsMeg: {
      name: "超级好看的鞋子",
      sizeNum: "49646164615",
      codeNum: "546541313",
      size: "L",
      color: '红色',
      many: "7946",
      state: "1"
    },
    select: {
        use: false,
        style:"",
        styleNum:"",
        Barcode:"",
        start:"开始时间",
        Start:"",
        end: "结束时间",
        End:"",
        Date: {"a": ["new"], "b": 2, "c": 3, "d": 4},
        size:["S","M","L","XL","XXL"],
        sizeId:"",
        name:["长","宽","高"],
        nameId:[],
        ways:['正常入库','退货入库'],
        waysId:[0,1],
        nameIndex:0,
        sizeIndex:0,
        waysIndex:0
    },
      Data:"",//接受数据
      year:"" ,//年
      hours:"",//时间
      noMore:true,
      shopId:""//店铺id
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
      common.url(this);
      var shopId=options.shopId;
      this.setData({
          shopId:shopId
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
              // console.log(size);
              var newsize=that.data.select;
              newsize.size=size;
              newsize.sizeId=sizeId;
              that.setData({
                  select:newsize,

              })
          }
      });
      //
      wx.request({
          url:data.url+"sundry/cat",
          method:"POST",
          success:function (res) {
              var name=[];
              var nameId=[]
              function sizePush(item,index){
                  name.push(item.catName)
                  nameId.push(item.catId)
              }
              res.data.data.forEach(sizePush);
              var newsize=that.data.select;
              newsize.name=name;
              newsize.nameId=nameId;
              that.setData({
                  select:newsize
              })
          }
      });
      request.requestshop(this,"wearhouse/searchin")
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