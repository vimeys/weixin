// pages/strOut_order/strOut_order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: "开始时间",//开始时间
    end: "截止时间",//结束时间
    area: ["区域", "区域2"],//发货区域
    areaIndex: 0,//发货区域下标
    style: ["已发货", "已入库", "待收货"],//发货状态
    styleIndex: 0,
    express: ["圆通", "申通", "汇通"],//快递
    expressIndex: 0,
    expressNum: ""//快递单号

  },
  DateChange: function (e) {
    var Type = e.target.dataset.type;
    if (Type == 1) {
      var start = e.detail.value;
      this.setData({
        start: start
      })
    } else {
      var end = e.detail.value;
      this.setData({
        end: end
      })
    }
  },
  optionChange: function (e) {
    var Type = e.currentTarget.dataset.type;
    console.log(e);
    if (Type == 1) {
      var i = e.detail.value;
      this.setData({
        areaIndex: i
      })
    } else if (Type == 2) {
      var i = e.detail.value;
      this.setData({
        styleIndex: i
      })
    } else {
      var i = e.detail.value;
      this.setData({
        expressIndex: i
      })
    }
  },
  output: function (e) {
    var Num = e.detail.value;
    this.setData({
      expressNum: Num
    })
    console.log(Num)
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