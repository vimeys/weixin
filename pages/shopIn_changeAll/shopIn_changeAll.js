// pages/shopIn_changeAll/shopIn_changeAll.js
var app = getApp();
var Datechange = require("../../utils/Datechange");
let request=require("../../utils/totalRequest");
let optionChnage=require("../../utils/optionChange");
let timer=require("../../utils/util");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        orderId:"",
        select: {
            start: "开始时间",//开始时间
            Start: "",//开始时间撮
            end: "截止时间",//结束时间
            End: "",//结束时间撮
            orderId: "",//快递单号
            put:['全部','收货入库','调货入库'],
            putId:[15,0,3],
            putIndex:0
        },
        Data:""
    },
    DateChange:function (e) {
        Datechange.DateChange(e,this,"shopstore/allorder");
    },
    output:function (e) {
        let val=e.detail.value;
        this.setData({
            orderId:val
        });
        request.shopInChange(this,'shopstore/allorder');
    },
    optionChange:function (e) {
        let val=e.detail.value;
        let data=this.data.select
        data.putIndex=val;
        this.setData({
            select:data
        })
        request.shopInChange(e,this,"shopstore/allorder")
    },
    click:function (e) {
        let that=this;
        var orderId=e.currentTarget.dataset.type;
        wx.navigateTo({
            url: '../shopIn_changeAllDetail/shopIn_changeAllDetail?orderId='+orderId
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that=this;
        let url=app.url;
        let shopId=wx.getStorageSync('shopId');
        this.setData({
            url:url,
        });
        wx.request({
            url:that.data.url+"shopstore/allorder",
            method:"POST",
            data:{shopId:shopId},
            success:function (res) {
                console.log(res);
                let json =res.data.data;
                function push(item,index) {
                    item.okTime=timer.formatTime(item.ctime)
                }
                res.data.data.forEach(push);
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