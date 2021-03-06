// pages/storage_note/storage_note.js
var app=getApp();
var DateChange=require("../../utils/Datechange");
var optionChange=require("../../utils/optionChange");
var output=require("../../utils/output");
var request=require("../../utils/totalRequest");
var formatTime=require("../../utils/util");
Page({
  /**
   * 页面的初始数据
   */
  data: {
      active: '1',
      time: '',
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
          size: ["S", "M", "L", "XL", "XXL"],
          sizeId:[],
          name: ["长", "宽", "高"],
          nameId:[],
          ways: ['全部','正常入库', '退货入库'],
          waysId:[15,0,1],
          nameIndex: 0,
          sizeIndex: 0,
          waysIndex: 0
      },
      Data: "",
      year: "",
      hours: "",
      noMore: "",
      page:1,
  },
  DateChange:function (e) {
    DateChange.DateChange(e,this,"wearhouse/loglist")
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
              size.unshift('全部');
              sizeId.unshift(0);
              var newsize=that.data.select;
              newsize.size=size;
              newsize.sizeId=sizeId;
              console.log(size);
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
      // request.storNote(this,"wearhouse/loglist")
      //获取页面数据
          var data = {};
          data.select = that.data.active;
          data.begintime = that.data.select.Start;
          data.endtime = that.data.select.End;
          data.goodsFashion = that.data.select.style;
          data.goodsGirard = that.data.select.styleNum;
          data.formatCode = that.data.select.Barcode;
          data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
          data.catId = that.data.select.nameId[that.data.select.nameIndex];
          data.page=that.data.page;
          // data.type = '';
          wx.request({
              url: that.data.url + "wearhouse/loglist",
              method: "POST",
              data: data,
              success: function (res) {
                  if (res.data.code == 202) {
                      that.setData({
                          noMore: true,
                          Data: []
                      })
                  } else if (res.data.code == 200) {
                      var num = [];
                      function change(item, index) {
                          item.okTime = formatTime.formatTime(res.data.data[index].logCtime);
                          if(item.goodsFashion.length>10){
                              item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                          }
                          if(item.colorName.length>3){
                              item.colorName=item.colorName.slice(0,2)+'...';
                          }
                          num.push(item);
                      }
                      res.data.data.forEach(change);
                      that.setData({
                          Data: num,
                          noMore: false
                      })
                  }
              }
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
      let that=this;
      let num=that.data.page;
      num++;
      this.setData({
          page:num
      });
      request.storNote(this,"wearhouse/loglist")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})