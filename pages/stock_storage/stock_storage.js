// pages/stock_storage/stock_storage.js
var app=getApp();
var DateChange=require("../../utils/Datechange");
var optionChange=require("../../utils/optionChange");
var request=     require("../../utils/totalRequest");
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
      size:["女"],
      sizeId:[],
      name: ["长", "宽", "高"],
      nameId:[],
      ways: ['正常入库', '退货入库', '调货入库'],
      sizeIndex: 0,
      nameIndex: 0,
      waysIndex: 0
    },
    Data:""//回传商品数据
  },
  optionChange:function (e) {
    optionChange.optionChange(e,this,'wearhouse/storesearch')
  },
    //仓库商品数据
  stock:function (e) {
    var Type=e.currentTarget.dataset.type;
    var value=e.detail.value;
    if(Type==1){
      var select=this.data.select;
      select.style=value;
      this.setData({
        select:select
      })
    }else if(Type==2){
      var select=this.data.select;
      select.styleNum=value;
      this.setData({
        select:select
      })
    }else{
      var select=this.data.select;
      select.Barcode=value;
      this.setData({
        select:select
      })
    }
    request.request(this,'wearhouse/storesearch');
    // var url=app.url;
    // this.setData({
    //   url:url
    // });
    // wx.request({
    //   url:url+"/Ajax/U/ListOrder.aspx?" + "U=&Token=" + "&State=undefined" + this.data.select.start + "&PageIndex=1" + "&Number=" + this.data.select.Barcode + "&Name=" + this.data.select.style + "&Size=" + this.data.select.styleNum + "&Color=" +  + "&Series=",
    //   method:"GET",
    //   success:function (res) {
    //     console.log(url+"/Ajax/U/ListOrder.aspx?" + "U=&Token=" + "&State=undefined"  + "&PageIndex=1" + "&Number="  + "&Name="   + "&Size=L"  + "&Color="   + "&Series=")
    //     var json=res.data;
    //     console.log(res);
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this
      var data=this.data;
      var url=app.url;
      this.setData({
          url:url
      })
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
              // wx.setStorageSync('size', size);
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
                // wx.setStorageSync('name', name);
          }
      })
      request.request(this,'wearhouse/storesearch')
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