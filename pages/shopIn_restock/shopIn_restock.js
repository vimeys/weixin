// pages/shopIn_restock/shopIn_restock.js
let app = getApp();
var formatTime = require("../../utils/util");
var DateChange = require("../../utils/Datechange");
var common = require("../../utils/common")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        disable:true,
        noMore:true,
        select:{
            use:false,
            start:"开始时间",
            Start:"",
            end:"结束时间",
            End:"",
            Data:"",//
            mark:false,
        },
        Data:""//
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let url=app.url;
        let that=this;
        let shopId=wx.getStorageSync('shopId');
        this.setData({
            url:url,
            shopId:shopId
        });
        wx.request({
            url:this.data.url+"shopstore/diaolist",
            method:"POST",
            data:{shopId:this.data.shopId},
            success:function (res) {
                console.log(res);
                let json=res.data.data;
                that.setData({
                    Data:json
                });
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    if(item.status==0){
                        item.Type='待收货'
                    }else if(item.status==1){
                        item.Type='已入库'
                    }else if(item.status==2){
                        item.Type='发货修改'
                    }
                    num.push(item)
                }
                res.data.data.forEach(change);
                that.setData({
                    Data:num
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