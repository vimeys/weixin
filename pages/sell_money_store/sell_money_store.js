// pages/sell_money_store/sell_money_store.js
let app = getApp();
var request=require("../../utils/totalRequest");
var optionChange=require("../../utils/optionChange");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url: "",
      noMore: false,
      date: ["最近7天", "最近14天", "最近28天"],
      Id: [7, 14, 28],
      index: 0,
      use: false,
      // area: ['全部区域'],//区域
      // areaId: [0],
      // areaIndex: 0,
      // shop: ['全部店铺'],//店铺
      // shopId: [0],
      // shopIndex: 0,
      Data: "",//返回数据
      shopId:"",
      order:""
  },
    optionChange:function (e) {
        var Type=e.target.dataset.type;
        if(Type==1){
            var value=e.detail.value;
            this.setData({
                index:value
            })
        }
        request.sellMoneyStore(this,"sell/annuasales");
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let url=app.url;
      let that=this;
      let shop=wx.getStorageSync('shop');
      let shopId=shop[0].name;
      this.setData({
          url:url,
          shopId:shopId
      });
      //
      request.sellMoneyStore(this,"sell/annuasales");
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