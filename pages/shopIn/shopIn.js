// pages/shopIn/shopIn.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "",
        number:'',//条码号
        shopId:""
    },
    //退货扫描
    bindtap: function () {
        var that = this;
        wx.scanCode({
            success: (res) => {
                var number = res.result;
                wx.request({
                    url: this.data.url + "shopstore/backgoods",
                    method: "POST",
                    data: {
                        goodsCode: number,
                        shopId:this.data.shopId
                    },
                    success: function (res) {
                        var data = res.data;
                        if (data.code == 200 || data.code == 203) {
                            that.setData({
                                number: number
                            })
                            wx.navigateTo({
                                url: "../shopIn_return/shopIn_return?number=" + res.data.number
                            })
                        } else {
                            wx.showModal({
                                title: '提示',
                                content: '该条码不存在,请核对后再扫描',
                                showCancel:false,
                                success: res => {
                                    wx.navigateTo({
                                        url: '../shopIn_JOG/shopIn_JOG'
                                    })
                                }
                            })
                        }
                    }
                })
            },
            fail: (res) => {
                wx.showModal({
                    title: '提示',
                    content: '该条码无法识别，请手动输入条码',
                    showCancel: false,
                    success: function (res) {
                        wx.navigateTo({
                            url: "../shopIn_JOG/shopIn_JOG"
                        })
                    }
                })
            }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let url = app.url;
        let shopId=wx.getStorageSync('shopId');
        this.setData({
            url: url,
            shopId:shopId
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