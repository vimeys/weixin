// pages/storage_detail/storage_detail.js
var app=getApp();
var formatTime=require("../../utils/util");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      url:"",
      orderId:"",//订单的id
      Data:"",
      order:"",
  },
    confirm:function (e) {
        var that=this;
        wx.request({
            url:this.data.url+"wearhouse/backinok",
            method:"POST",
            data:{orderId:that.data.orderId},
            success:function (res) {
                console.log(res.data.code);
                if(res.data.code==200){
                    wx.showModal({
                        title: '提示',
                        content: '商品已确认入库',
                        showCancel:false,
                        success: res=>{
                            if (res.confirm) {
                                wx.navigateBack({
                                    delta:2,
                                })
                            }
                        }
                    })
                }
            }
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this;
      var url=app.url;
      var num=options.orderId;
      this.setData({
          url:url,
          orderId:num
      })
      wx.request({
          url:that.data.url+"wearhouse/backgoodsinfo",
          method:"POST",
          data:{
              orderId:that.data.orderId
          },
          success:function (res) {
              var json=res.data.data.interim;
              console.log(json);
              var order=res.data.data.order;
              var num=[];
              function change(item,index) {
                  item.formatCode=res.data.data.interim[index].goodsCode;
                  item.formatStock=res.data.data.interim[index].goodsStock
                  num.push(item)
              }
              res.data.data.interim.forEach(change);
              console.log(res);
              // order.
              order.okTime=formatTime.formatTime(res.data.data.order.ctime);
              that.setData({
                  Data:num,
                  order:order
              });


              console.log(that.data.order);
              console.log(that.data.Data);

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