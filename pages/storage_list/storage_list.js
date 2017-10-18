// pages/storage_list/storage_list.js
var app=getApp();
var common=require("../../utils/common");
var confirm=require("../../utils/editConfi");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:'',
      number:"",//扫描的条码
      Data:"",//回传数据
      sendData:"",//传递数据
      uname:"",//用户名字,
      storeId:""//删除返回的storeID
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      var that=this;
      var uname=wx.getStorageSync('uname');
      var Num=options.number;
        this.setData({
            url:url,
            number:Num,
            uname:uname
      })
      wx.request({
          url:this.data.url+"wearhouse/waitList",
          method:"POST",
          // data:{}
          success:function (res) {
             var json=res.data.data;
             console.log(res.data);
             console.log(json);
             that.setData({
                 Data:json
             })
          }
      })
  },
    // 修改数量
    output:function (e) {
        common.output(e,this,"wearhouse/fixInstoreNumber")
    },
    //删除数据
    delGoods:function(e){
    common.delGoods(e,this,"wearhouse/delInstoreNumber")
    },
    //确认入库
    confirm:function (e) {
      confirm.confirm(this,"wearhouse/waitInstore")
    },
    //继续添加
    go:function (e) {
      common.go(this)
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