// pages/storage_note/storage_note.js
var app=getApp();
var Datechange=require("../../utils/Datechange");
var optionChange=require("../../utils/optionChange");
var output=require("../../utils/output");
var request=require("../../utils/totalRequest");
Page({
  /**
   * 页面的初始数据
   */
  data: {
      active: '1',
      count: [1, 2, 3],
      time: 1477808630404,
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
          size: ["S", "M", "L", "XL", "XXL"],
          sizeId:[],
          name: ["长", "宽", "高"],
          nameId:[],
          ways: ['正常入库', '退货入库'],
          waysId:[0,1],
          nameIndex: 0,
          sizeIndex: 0,
          waysIndex: 0
      },
      Data: "",
      year: "",
      hours: "",
      noMore: ""
  },
  DateChange:function (e) {
    Datechange.DateChange(e,this,"wearhouse/loglist")
  },
  output:function(e){
    output.output(e,this,"wearhouse/loglist")
  },
  optionChange:function (e) {
    optionChange.optionChange(e,this,"wearhouse/loglist")
  },
  changeNew:function (e) {
    var active=e.currentTarget.dataset.type;
    this.setData({
      active:active
    });
      request.storNote(this,"wearhouse/loglist")
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var url=app.url;
    this.setData({
        url:url
    });
      // var time=new Date(this.data.time)
    var time=new Date().getDate();
    var time1=new Date().getHours();
    var time2=new Date().getMinutes();
    var time3=new Date().getSeconds();
    console.log(time+"+"+time1+"+"+time2+"+"+time3)
      wx.request({
          url:this.data.url+"sundry/sizes",
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
      wx.request({
          url:this.data.url+"sundry/cat",
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
      request.storNote(this,"wearhouse/loglist")
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