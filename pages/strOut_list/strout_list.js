// pages/strOut_list/strout_list.js
var app=getApp();
var common=require("../../utils/common");
var confirm=require("../../utils/editConfi")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      number:"",
      count:[{"goods":"1"},{"goods":2},{"goods":3}],
      Data:"",//回传数据
      sendData:"",//传递数据
      uname:"",//用户名字
      storeId:""//删除返回的storeID
  },
    // 修改数量
    output:function (e) {
        common.output(e,this,"wearout/fix")
    },
    //删除数据
    delGoods:function(e){
        common.delGoods(e,this,"wearout/delinterimgoods")
    },
    //确认入库
    confirm:function (e) {
        let storeId=[];
        function push(item,index) {
            storeId.push(item.storeId)
        }
        this.data.Data.forEach(push);
        wx.navigateTo({
            url:"../express/express?storeId="+storeId
        })
    },
    //继续添加
    go:function (e) {
        common.go(this)
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
          url:this.data.url+"wearout/outlist",
          method:"POST",
          // data:{}
          success:function (res) {
              var json=res.data.data;
              function slice(item,index) {
                  if(item.goodsFashion.length>10){
                      item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                  }
                  if(item.colorName.length>3){
                      item.colorName=item.colorName.slice(0,2)+'...';
                  }
              }
              res.data.data.forEach(slice);
              that.setData({
                  Data:json
              })
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
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})