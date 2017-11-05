// pages/strOut_detail/strOut_detail.js
var app=getApp();
var common=require("../../utils/common");
let formatTime=require("../../utils/util");
let request=require("../../utils/totalRequest");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        Data:"",
        order:"",
    },
    //返回首页

    //确认修改
    confirm:function (e) {
        let that=this;
        let user=wx.getStorageSync('uname');
        let Type=this.data.order.type;
        if(Type==2){
            wx.request({
                url:that.data.url+"shopout/backgoodsok",
                method:"POST",
                data:{
                    logEditer:user
                },
                success:function (res) {
                    console.log(res);
                    if(res.data.code==200){
                        wx.showModal({
                            title: '提示',
                            content: '确认成功',
                            showCancel:false,
                            success: res=>{
                                if (res.confirm) {
                                    wx.navigateBack({
                                        delta:1
                                    })
                                }
                            }
                        })
                    }
                }
            })
        }else if(Type==3){
            wx.request({
                url:that.data.url+"shopout/diaook",
                method:"POST",
                data:{
                    logEditer:user
                },
                success:function (res) {
                    console.log(res);
                    if(res.data.code==200){
                        wx.showModal({
                          title: '提示',
                          content: '确认成功',
                            showCancel:false,
                          success: res=>{
                            if (res.confirm) {
                                wx.navigateBack({
                                    delta:1
                                })
                            }
                          }
                        })
                    }
                }
            })
        }

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var url=app.url;
        let orderId=options.orderId;
        var that=this;
        this.setData({
            url:url
        })
        wx.request({
            url:that.data.url+"shopstore/orderinfo",
            method:"POST",
            data:{
                orderId:orderId
            },
            success:function (res) {
                console.log(res);
                let json=res.data.data.goodsinfo;
                let order=res.data.data.order;
                order.okTime=formatTime.formatTime(res.data.data.order.ctime);
                console.log(json)
                that.setData({
                    Data:json,
                    order:order,
                });
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