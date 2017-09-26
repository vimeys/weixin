// pages/express/express.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"选择时间",//时间
    takePeople:"",//收货人
    takePhone:"",//收货人电话
    takeSite:[1,2,3],//收货区域
    site:0,
    takeShop:[1,2,3],//收货店铺
    shop:0,
    takePlace:"",//收货详细地址
    express:[1,2,3],//快递公司
    expressIndex:0,
    expressNum:'',//快递单号
    sendPeople:"",//发货人
    sendPhone:""//发货人电话
  },
  //时间选择
  DateChange:function (e) {
      var date=e.detail.value;
      this.setData({
        date:date
      })
    console.log(this.data.date);
  },
  //多选框的存储
  optionChange:function (e) {
    var data=this.data;
    var Type=e.target.dataset.type;
    if(Type==1){
      var Site=e.detail.value;
      this.setData({
        site:Site
      })
    }else if(Type==2){
      var Shop=e.detail.value;
      this.setData({
        shop:Shop
      })
    }else{
      var ExpressIndex=e.detail.value;
      this.setData({
        expressIndex:ExpressIndex
      })
    }
  },

  //input值的存储
  outPut:function (e) {
    var Type=e.currentTarget.dataset.type;
    var value=e.detail.value;
    console.log(e);
    if(Type==1){
      this.setData({
        takePeople:value
      })
    }else if(Type==2){
      this.setData({
        takePhone:value
      })
    }else if(Type==3) {
      this.setData({
        takePlace: value
      })
    }
      else if(Type==4){
        this.setData({
          expressNum:value
        })
      }else if(Type==5){
        this.setData({
          sendPeople:value
        })
      }else{
        this.setData({
          sendPhone:value
        })
        console.log(this.data)
      }
  },
  //发货选择
  sendExpress:function (e) {
    var data=this.data;
    // wx.request({
    //   url:"",
    //   method:"POST",
    //   success:function (e) {
    //
    //   }
    // });
    wx.navigateBack({
      delta:2
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