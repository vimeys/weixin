// pages/shopOut_sellList/sellLsit.js
var app = getApp();
var timer=require("../../utils/util");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        storeId:"",
        Data:"",
        user:"",
        totalNum:'',
        price:"",
        name:"",
        newTime:""
    },
    click:function (e) {
        let that=this;
        wx.request({
            url:that.data.url+"shopout/selok",
            method:"POST",
            data:{
                storeId:that.data.storeId,
                logEditer:that.data.user
            },
            success:function (res) {
                if(res.data.code==200){
                    wx.showModal({
                      title: '提示',
                      content: '销售成功',
                        showCancel:false,
                      success: res=>{
                        if (res.confirm) {
                            wx.navigateBack({
                                delta:3
                            })
                        }
                      }
                    })
                }else if(res.data.code==202){
                    wx.showModal({
                      title: '警告',
                      content: '出库失败,请重新出库',
                      success: res=>{
                        if (res.confirm) {
                            wx.navigateBack({
                                delta:3
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
        let url=app.url;
        var str=options.storeId;
        let storeId=str.split(",");
        var that=this;
        let User=wx.getStorageSync('uname');
        that.setData({
            url:url,
            storeId:storeId,
            user:User,
        })
        wx.request({
            url:that.data.url+"shopout/selorder",
            method:"POST",
            data:{
                storeId:that.data.storeId,
                editer:User
            },
            success:function (res) {
                console.log(res);
                let time=timer.formatTime(res.data.data.nowtime);
                console.log(res.data.data.data);
                that.setData({
                    Data:res.data.data.data,
                    totalNum:res.data.data.sumStock,
                    price:res.data.data.sumPrice,
                    newTime:time,
                    name:res.data.data.editer
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