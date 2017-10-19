// pages/stock_store/stock_store.js
var app=getApp();
var optionChange=require("../../utils/optionChange");
var request=require("../../utils/totalRequest");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      shopId:"",//店铺id
      select:{
          use: false,
          style:'',
          styleNum:"",
          Barcode:'',
          start: "",
          end: "",
          size:["女"],
          sizeId:[],
          name: ["长", "宽", "高"],
          nameId:[],
          ways: ['正常入库', '退货入库', '调货入库'],
          sizeIndex: 0,
          nameIndex: 0,
          waysIndex: 0
      },
      Data:""//接受数据
  },
    //选择框时间
    optionChange:function (e) {
      optionChange.optionChange(e,this,"shopstore/search")
    },
    //仓库商品数据
    stock:function (e) {
        var Type=e.currentTarget.dataset.type;
        var value=e.detail.value;
        if(Type==1){
            var select=this.data.select;
            select.style=value;
            this.setData({
                select:select
            })
        }else if(Type==2){
            var select=this.data.select;
            select.styleNum=value;
            this.setData({
                select:select
            })
        }else{
            var select=this.data.select;
            select.Barcode=value;
            this.setData({
                select:select
            })
        }
        request.request(this,"shopstore/search");
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var url=app.url;
      var that=this;
      var data=this.data;
      var shopId=options.shopId;
      console.log(shopId);
      this.setData({
          url:url,
          shopId:shopId
      });
      wx.request({//获取尺寸
          url:data.url+"sundry/sizes",
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
              var newsize=that.data.select;
              newsize.size=size;
              newsize.sizeId=sizeId;
              that.setData({
                  select:newsize,

              })
          }
      })
      //获取分类
      wx.request({
          url:data.url+"sundry/cat",
          method:"POST",
          success:function (res) {
              var name=[];
              var nameId=[]
              function sizePush(item,index){
                  name.push(item.catName)
                  nameId.push(item.catId)
              }
              res.data.data.forEach(sizePush);
              var newsize=that.data.select;
              newsize.name=name;
              newsize.nameId=nameId;
              that.setData({
                  select:newsize
              })
          }
      });
      request.request(this,"shopstore/search")
  //     wx.request({
  //         url:this.data.url+"shopstore/storesearch",
  //         method:"POST",
  //         data:{
  //             shop:shopId
  //         },
  //         success:function (res) {
  //             // res.
  //         }
  // })
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