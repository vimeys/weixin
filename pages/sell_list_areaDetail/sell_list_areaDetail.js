// pages/sell_list_detail/sell_list_detail.js
var app = getApp();
let timer = require("../../utils/util");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "",
        noMore: false,
        number: "",
        select: {
            use: false,
            start: "开始时间",
            Start: "",
            end: "结束时间",
            End: "",
            area: "",//区域
            areaId: "",
            areaIndex: "",
            shop: "",//店铺
            shopId: "",
            shopIndex: "",
            list: ["已对账", "未对账"],//账单选择
            listId: [1, 2],
            listIndex: 0
        },
        order: "",//
        Data: "",//返回数据
        show:true
    },
    confirm: function (e) {
        var that=this;
        wx.request({
            url:that.data.url+"sell/suremoney",
            method:'POST',
            data:{
                sellId:that.data.number
            },
            success:function (res) {
                console.log(res);
                if(res.data.code==200){
                    wx.showModal({
                      title: '提示',
                      content: '对账成功',
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
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var url = app.url;
        var num = options.sellId;
        let that = this;
        this.setData({
            url: url,
            number: num
        })
        wx.request({
            url: that.data.url + "sell/sellorderinfo",
            method: "POST",
            data: {sellId: num},
            success: function (res) {
                console.log(res);
                let goods = res.data.data.goods;
                let order = res.data.data.order;
                order.okTime = timer.formatTime(res.data.data.order.sellCtime);
                that.setData({
                    order: order,
                    Data: goods
                })
                if(res.data.data.order.status==1){
                    that.setData({
                        show:false
                    })
                }
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
        // var url = app.url;
        // var num = options.sellId;
        let that = this;
        // this.setData({
        //     url: url,
        //     number: num
        // })
        wx.request({
            url: that.data.url + "sell/sellorderinfo",
            method: "POST",
            data: {sellId: that.data.number},
            success: function (res) {
                console.log(res);
                let goods = res.data.data.goods;
                let order = res.data.data.order;
                order.okTime = timer.formatTime(res.data.data.order.sellCtime);
                that.setData({
                    order: order,
                    Data: goods
                })
                if(res.data.data.order.status==1){
                    that.setData({
                        show:false
                    })
                }
            }
        })
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