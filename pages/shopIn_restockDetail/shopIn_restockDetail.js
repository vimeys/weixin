// pages/shopIn_takeDetail/shopIN_takeDetail.js
let app = getApp()
let formatTime = require("../../utils/util");
Page({
    /**
     * 页面的初始数据
     */
    data: {
        url: "",
        orderId: "",//订单的id
        Data: "",
        order: "",
        log: "",
        shopId: "",
        shopId: "",
        confirm:true,//
        change:false,
        show:true,//控制按钮图标显示
        Type:''
    },
    //确认入库请求
    confirm: function (e) {
        var that = this;
        var data = [];
        var order = {};
        order.shopId = that.data.shopId;
        order.order = that.data.order.orderId;
        function push(item, index) {
            var obj = {};
            obj.storeId = item.storeId;
            // obj.goodsStock = item.goodsStock;
            obj.logEditer = that.data.log;
            data.push(obj);
        }

        that.data.Data.forEach(push);
        console.log(1);
        console.log(data);
        console.log(order);
        wx.request({
            url: this.data.url + "shopstore/diaook",
            method: "POST",
            data: {
                data: data,
                info: order
            },
            success: function (res) {
                console.log(res.data.code);
                if (res.data.code == 200) {
                    wx.showModal({
                        title: '提示',
                        content: '商品已确认入库',
                        showCancel: false,
                        success: res => {
                            if (res.confirm) {
                                wx.navigateBack({
                                    delta: 2,
                                })
                            }
                        }
                    })
                }
            }
        })
    },
    //发货数量修改跳转页面
    click: function (e) {
        var Type = e.currentTarget.dataset.type;
        wx.setStorageSync('detail', 'restock');
        wx.navigateTo({
            url: '../shopIn_change/shopIn_change?storeId=' + Type
        })
        console.log(Type);
    },
    //发货修改确认请求
    changeConfirm: function (e) {
        let that = this;
        wx.request({
            url: that.data.url + "shopstore/fixtype",
            method: "POST",
            data: {
                logEditer:that.data.log,
                orderId: that.data.orderId
            },
            success: function (res) {
                console.log(res);
                if (res.data.code == 200||res.data.code==210) {
                    wx.showModal({
                        title: '提示',
                        content: '发货修改成功',
                        showCancel: false,
                        success: res => {
                            if (res.confirm) {
                                wx.navigateBack({
                                    delta: 1
                                })
                            }
                        }
                    })
                } else if (res.data.code == 201 || res.data.code == 202) {
                    wx.showModal({
                        title: '提示',
                        content: '提交失败,请重试',
                        showCancel: false,
                        success: res => {
                            if (res.confirm) {

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
        var that = this;
        var url = app.url;
        var log = wx.getStorageSync('uname');
        var shopId = wx.getStorageSync('shopId');
        var num = options.orderId;
        this.setData({
            url: url,
            orderId: num,
            log: log,
            shopId: shopId
        })
        // wx.request({
        //     url: that.data.url + "shopstore/orderinfo",
        //     method: "POST",
        //     data: {
        //         orderId: that.data.orderId
        //     },
        //     success: function (res) {
        //         var json = res.data.data.goodsinfo;
        //         var order = res.data.data.order;
        //
        //         that.setData({
        //             Data: json,
        //             order: order
        //         });
        //         console.log(res);
        //
        //     }
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
        var that = this;
        // var url = app.url;
        // var log = wx.getStorageSync('uname');
        // var shopId = wx.getStorageSync('shopId');
        // var num = options.orderId;
        // this.setData({
        //     url: url,
        //     orderId: num,
        //     log: log,
        //     shopId: shopId
        // })
        wx.request({
            url: that.data.url + "shopstore/orderinfo",
            method: "POST",
            data: {
                orderId: that.data.orderId
            },
            success: function (res) {
                var json = res.data.data.goodsinfo;
                var order = res.data.data.order;
                if(order.status==1){
                    that.setData({
                        show:false,
                        Type:'已入库'
                    })
                }else if(order.status==0){
                    that.setData({
                        Type:'待收货'
                    })
                }else if(order.status==2){
                    that.setData({
                        Type:'发货修改'
                    })
                }
                order.okTime=formatTime.formatTime(order.ctime);
                function judge(item,index) {
                    if(item.fixnumber>0){
                        that.setData({
                            confirm:false,
                            change:true
                        })
                    }
                }
                res.data.data.goodsinfo.forEach(judge);
                function slice(item,index) {
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    }
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                }
                res.data.data.goodsinfo.forEach(slice);
                that.setData({
                    Data: json,
                    order: order
                });
                console.log(res);

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