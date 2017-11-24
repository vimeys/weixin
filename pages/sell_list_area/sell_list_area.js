// pages/sell_list_area/sell_list_area.js
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
      city:'',
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
          shopId:[0],
          shopIndex:0,
          list:["未对账","已对账"],//账单选择
          listId:[0,1],
          listIndex:0
      },
      Data:"",//返回数据
      order:'',
  },
    //时间选择
    DateChange:function (e) {
        DateChange.DateChange(e,this,"sell/citysellorder")
    },
    //选择框
    optionChange:function (e) {
        optionChange.optionChangeSellArea(e,this,"sell/citysellorder");
    },
    //选择已对账
    getUrl:function (e) {
        console.log(e);
        let Type=e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../sell_list_areaDetail/sell_list_areaDetail?sellId='+Type
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      let that=this;
      let city=wx.getStorageSync('space');
      this.setData({
          url:url,
          city:city
      })
      //区域选择
      wx.request({
          url:that.data.url+"sell/shopname",
          method:"POST",
          data:{
              cityId:that.data.city
          },
          success:function (res) {
              console.log(res.data.data);
              let json=res.data.data;
              json.unshift({shopName:'全部店铺',shopId:0});
              let arr=[];
              let arr1=[];
              function push(item,index) {
                  arr.push(item.shopName);
                  arr1.push(item.shopId);
              }
              json.forEach(push);
              let obj=that.data.select;
              obj.shop=arr;
              obj.shopId=arr1;
              console.log(obj);
              that.setData({
                  select:obj
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
      request.sellListArea(this,"sell/citysellorder")
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