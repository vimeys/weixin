// pages/sell_list_store/sell_store.js
var app=getApp();
var DateChange=require("../../utils/Datechange");
var request=require("../../utils/totalRequest");
var optionChange=require("../../utils/optionChange");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      noMore:false,
      shopId:'',
      select:{
          use:false,
          start:"开始时间",
          Start:"",
          end:"结束时间",
          End:"",
          area:['全部区域'],//区域
          areaId:[0],
          areaIndex:0,
          shop:['全部店铺'],//店铺
          shopId:'',
          shopIndex:0,
          list:["未对账","已对账"],//账单选择
          listId:[0,1],
          listIndex:0
      },
      Data:"",//返回数据
      order:'',
  },
    getUrl:function (e) {
      let Type=e.currentTarget.dataset.type;
      let name=e.currentTarget.dataset.name;
      if(name==1){
          wx.navigateTo({
              url: '../sell_list_detail/sell_list_detail?sellId='+Type
          })
      }else if(name==0){
          wx.navigateTo({
              url:'../sell_list_storeDetail/sell_list_storeDetail?sellId='+Type
          })
      }

    },
    //时间选择
    DateChange:function (e) {
        DateChange.DateChange(e,this,"sell/shopsellorder")
    },
    //选择框
    optionChange:function (e) {
        optionChange.optionChangeSellStore(e,this,"sell/shopsellorder");
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      let shop=wx.getStorageSync('shop');
      let shopId=shop[0].name;
      this.setData({
          url:url,
          shopId:shopId
      });
      // console.log(this.data.)

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
      request.sellListStore(this,"sell/shopsellorder");
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