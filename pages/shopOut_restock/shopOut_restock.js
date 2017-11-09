// pages/shopOut_restock/shopOut_restock.js
var app=getApp();
let common=require("../../utils/common");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      UserID:"",//用户姓名
      url:"",//
      choose:1,//选中样式
      btnWord:"确认",//确认按钮的样式
      urlData:"",//请求路径
      sell:true,
      restock:false,
      return:false,
      Data:"",
  },
    //选择发货方式
  chooseStyle:function (e) {
    var Type=e.currentTarget.dataset.type;
    wx.setStorageSync('choose', Type);
    if(Type==2){
        let choose=wx.getStorageSync('choose');
        this.setData({
            choose:choose,
            sell:false,
            restock:true,
            return:false,
        })
    }else if(Type==1){
        let choose=wx.getStorageSync('choose');
      this.setData({
          choose:choose,
          sell:true,
          restock:false,
          return:false,
      })
    }else if(Type==3){
        let choose=wx.getStorageSync('choose');
        this.setData({
            choose:choose,
            sell:false,
            restock:false,
            return:true,
        })
    }
    console.log(e);
  },
    //删除数据
    delGoods:function (e) {
        common.delGoodsShop(e,this,"shopout/dellist")
    },
    //修改数量
    output:function (e) {
        common.shopOutput(e,this,"shopout/fixnumber")
    },
  //选择确认页面
    sell:function (e) {
      let that=this;
      var Type=e.currentTarget.dataset.type;
      var name=e.currentTarget.dataset.name;
      wx.removeStorageSync("choose");
      let num=[]
      function push(item,index) {
          num.push(item.storeId);
      }
      that.data.Data.forEach(push);
      wx.request({
          url:that.data.url+"shopout/changetype",
          method:"POST",
          data:{
              type:Type,
              storeId:num
          },
          success:function (res) {
              console.log(res);
              if(res.data.code==200){
                  if(name==1){
                      wx.navigateTo({
                        url: '../shopOut_sellList/sellLsit?storeId='+num
                      })
                  }else if(name==2){
                      wx.setStorageSync('nav', '店铺调货出库');
                      wx.navigateTo({
                          url:"../express/express?storeId="+num
                      })
                  }else if(name==3){
                      wx.navigateTo({
                          url:"../expressReturn/expressReturn?storeId="+num
                      })
                  }
              }
          }
      })
    },
    go:function (e) {
        common.go(this);
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      let that=this;
      let choose=wx.getStorageSync('choose');
      let shopId=wx.getStorageSync("shopId");
      var url=app.url;
      this.setData({
          url:url,
          choose:choose,
          shopId:shopId
      });
      wx.request({
          url:that.data.url+"shopout/outlist",
          method:"POST",
          data:{
              shopId:shopId
          },
          success:function (res) {
              console.log(res);
              let json=res.data.data;
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