// pages/storage_returns/storage_returns.js
var app=getApp();
var formatTime=require("../../utils/util");
var DateChange=require("../../utils/Datechange");
var common=require("../../utils/common")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      disable:true,
    select:{
        use:false,
        start:"开始时间",
        Start:"",
        end:"结束时间",
        End:"",
        Data:"",//
        mark:false,
    },
    Date:"",//
      page:1
  },
   bindpick:function (e) {
      common.bindpick(this)
   } ,
  DateChange:function (e) {
      DateChange.DateChange(e,this,"wearhouse/backingoods");
  },
    click:function (e) {
      let  Type=e.currentTarget.dataset.type;
      let Name=e.currentTarget.dataset.name;
      if(Type==0){
          wx.navigateTo({
            url: '../storage_detail/storage_detail?orderId='+Name
          })
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
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
      let that=this;
      wx.request({
          url:this.data.url+"wearhouse/backingoods",
          method:"POST",
          data:{page:that.data.page},
          success:function (res) {
              var json=res.data.data;
              that.setData({
                  Date:json
              })
              var num=[];
              function change(item,index){
                  item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                  num.push(item)
              }
              res.data.data.forEach(change);
              that.setData({
                  Date:num,
              })
              console.log(that.data.Date[0].status);
          }
      })
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
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})