// pages/shopIn_change/shopIn_change.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: "",
        storeId: "",
        Data: [],
        number: "",
        newUrl: "",
        orderType: "",
        log: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        var url = app.url;
        let log = wx.getStorageSync('uname');
        var storeId = options.storeId;
        let detail = wx.getStorageSync('detail');
        let orderType = wx.getStorageSync('orderType');
        this.setData({
            url: url,
            storeId: storeId,
            log: log,
            orderType: orderType
        });

        console.log(detail);
        if (detail == 'sell') {//店长请求页面数据
            wx.request({
                url: this.data.url + "sell/fixpage",
                method: "POST",
                data: {sellBookId: that.data.storeId},
                success: function (res) {
                    var json = [];
                    json.push(res.data.data);
                    that.setData({
                        Data: json
                    })
                }
            });
            console.log(1);
        } else if (detail == 'shopInChange') {//店铺修改入库请求页面
            wx.request({
                url: this.data.url + "shopstore/fixpage",
                method: "POST",
                data: {storeId: that.data.storeId},
                success: function (res) {
                    console.log(res.data);

                    var json = [];
                    if(res.data.data.fixnumber>0){
                        res.data.data.number=res.data.data.fixnumber
                    }else{
                        res.data.data.number=res.data.data.goodsStock;
                    }
                    if(res.data.data.goodsFashion.length>10){
                        res.data.data.goodsFashion=res.data.data.goodsFashion.slice(0,10)+'...';
                    }
                    if(res.data.data.colorName.length>3){
                        res.data.data.colorName=res.data.data.colorName.slice(0,2)+'...';
                    }
                    json.push(res.data.data);
                    that.setData({
                        Data: json
                    })
                }
            })
        } else if (detail == 'storChange') {//仓库入库修改请求页面
            wx.request({
                url: this.data.url + "wearhouse/fixpage",
                method: "POST",
                data: {storeId: that.data.storeId},
                success: function (res) {
                    console.log(res.data);

                    var json = [];
                    if(res.data.data.fixnumber>0){
                        res.data.data.number=res.data.data.fixnumber
                    }else{
                        res.data.data.number=res.data.data.goodsStock;
                    }
                    if(res.data.data.goodsFashion.length>10){
                        res.data.data.goodsFashion=res.data.data.goodsFashion.slice(0,10)+'...';
                    }
                    if(res.data.data.colorName.length>3){
                        res.data.data.colorName=res.data.data.colorName.slice(0,2)+'...';
                    }
                    json.push(res.data.data);
                    that.setData({
                        Data: json
                    })
                }
            })
        } else if (detail == 'take') {//店铺收货入库修改页面
            wx.request({
                url: this.data.url + "shopstore/fixpage",
                method: "POST",
                data: {storeId: that.data.storeId},
                success: function (res) {
                    console.log(res.data);

                    var json = [];
                    if(res.data.data.goodsFashion.length>10){
                        res.data.data.goodsFashion=res.data.data.goodsFashion.slice(0,10)+'...';
                    }
                    if(res.data.data.colorName.length>3){
                        res.data.data.colorName=res.data.data.colorName.slice(0,2)+'...';
                    }

                    json.push(res.data.data);
                    that.setData({
                        Data: json
                    })
                }
            })
        } else if (detail == 'restock') {//调货入库修改页面
            wx.request({
                url: this.data.url + "shopstore/fixpage",
                method: "POST",
                data: {storeId: that.data.storeId},
                success: function (res) {
                    console.log(res.data);

                    var json = [];
                    if(res.data.data.goodsFashion.length>10){
                        res.data.data.goodsFashion=res.data.data.goodsFashion.slice(0,10)+'...';
                    }
                    if(res.data.data.colorName.length>3){
                        res.data.data.colorName=res.data.data.colorName.slice(0,2)+'...';
                    }
                    json.push(res.data.data);
                    that.setData({
                        Data: json
                    })
                }
            })
        }
    },
    //修改数量
    output: function (e) {
        var num = e.detail.value;
        this.setData({
            number: num
        })
        console.log(this.data.number);
    },
    //确认保存页面
    confirm: function (e) {
        let that = this;
        let detail = wx.getStorageSync('detail');
        if (detail == "restock") {
            this.setData({
                newUrl: "..shopIn_restockDetail/shopIn_restockDetail"
            })
            wx.request({
                url: that.data.url + "shopstore/shoufix",
                method: "POST",
                data: {
                    storeId: that.data.storeId,
                    goodsStock: that.data.number
                },
                success: function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.showModal({
                            title: '提示',
                            content: '商品修改成功',
                            showCancel: false,
                            success: res => {
                                wx.navigateBack({
                                    delta: 1
                                })
                            }
                        })
                    } else if (res.data.code == 202 || res.data.code == 201) {
                        wx.showModal({
                            title: "警告",
                            content: "修改失败,请重新修改",
                            showCancel: false,
                            success: function (res) {
                                // wx.navigateBack({
                                //     delta:1
                                // })
                            }
                        })
                    }
                }
            })
        } else if (detail == "take") {
            this.setData({
                newUrl: "..shopIn_takeDetail/shopIN_takeDetail"
            })
            wx.request({
                url: that.data.url + "shopstore/shoufix",
                method: "POST",
                data: {
                    storeId: that.data.storeId,
                    goodsStock: that.data.number
                },
                success: function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.showModal({
                            title: '提示',
                            content: '商品修改成功',
                            showCancel: false,
                            success: res => {
                                wx.navigateBack()({
                                    delta: 1
                                })
                            }
                        })
                    } else if (res.data.code == 202 || res.data.code == 201) {
                        wx.showModal({
                            title: "警告",
                            content: "修改失败,请重新修改",
                            showCancel: false,
                            success: function (res) {
                                // wx.navigateBack({
                                //     delta:1
                                // })
                            }
                        })
                    }
                }
            })
        } else if (detail == 'sell') {//店长销售单修改页面
            this.setData({
                newUrl: "../sell_list_storeDetail/sell_list_storeDetail"
            })
            wx.request({
                url: that.data.url + "sell/fixnumber",
                method: "POST",
                data: {
                    sellBookId: that.data.storeId,
                    number: that.data.number
                },
                success: function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.showModal({
                            title: '提示',
                            content: '商品修改成功',
                            showCancel: false,
                            success: res => {
                                console.log("成功");
                                wx.navigateBack()({
                                    delta: 1
                                })
                            }
                        })
                    } else if (res.data.code == 202 || res.data.code == 201) {
                        wx.showModal({
                            title: "警告",
                            content: "修改失败,请重新修改",
                            showCancel: false,
                            success: function (res) {
                                // wx.navigateBack({
                                //     delta:1
                                // })
                            }
                        })
                    }
                }
            })
        } else if (detail == 'sell') {//店铺入库修改页面
            this.setData({
                newUrl: "..pages/shopIn_changeAllDetail/shopIn_changeAllDetail"
            })
            wx.request({
                url: that.data.url + "shopstore/shoufix",
                method: "POST",
                data: {
                    storeId: that.data.storeId,
                    goodsStock: that.data.number
                },
                success: function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.showModal({
                            title: '提示',
                            content: '商品修改成功',
                            showCancel: false,
                            success: res => {
                                console.log("成功");
                                wx.navigateTo({
                                    url: that.data.newUrl
                                })
                            }
                        })
                    } else if (res.data.code == 202 || res.data.code == 201) {
                        wx.showModal({
                            title: "警告",
                            content: "修改失败,请重新修改",
                            showCancel: false,
                            success: function (res) {
                                // wx.navigateBack({
                                //     delta:1
                                // })
                            }
                        })
                    }
                }
            })
        } else if (detail == 'storChange') {//店铺入库修改页面
            // this.setData({
            //     newUrl: "..pages/shopIn_changeAllDetail/shopIn_changeAllDetail"
            // })
            wx.request({
                url: that.data.url + "wearhouse/changeinfo",
                method: "POST",
                data: {
                    storeId: that.data.storeId,
                    type: that.data.orderType,
                    logEditer: that.data.log,
                    goodsStock: that.data.number
                },
                success: function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.removeStorageSync("detail");
                        wx.showModal({
                            title: '提示',
                            content: '商品修改成功',
                            showCancel: false,

                            success: res => {
                                        wx.navigateBack({
                                            delta: 1
                                        })
                            }
                        })
                    } else if (res.data.code == 202 || res.data.code == 201) {
                        wx.showModal({
                            title: "警告",
                            content: "修改失败,请重新修改",
                            showCancel: false,
                            success: function (res) {
                                // wx.navigateBack({
                                //     delta:1
                                // })
                            }
                        })
                    }
                }
            })
        } else if (detail == "shopInChange") {
            // this.setData({
            //     newUrl:"..shopIn_takeDetail/shopIN_takeDetail"
            // })
            wx.request({
                url: that.data.url + "wearhouse/changeinfo",
                method: "POST",
                data: {
                    storeId: that.data.storeId,
                    type: that.data.orderType,
                    logEditer: that.data.log,
                    goodsStock: that.data.number
                },
                success: function (res) {
                    console.log(res);
                    if (res.data.code == 200) {
                        wx.showModal({
                            title: '提示',
                            content: '商品修改成功',
                            showCancel: false,
                            success: res => {
                                wx.navigateBack()({
                                    delta: 1
                                })
                            }
                        })
                    } else if (res.data.code == 202 || res.data.code == 201) {
                        wx.showModal({
                            title: "警告",
                            content: "修改失败,请重新修改",
                            showCancel: false,
                            success: function (res) {
                                // wx.navigateBack({
                                //     delta:1
                                // })
                            }
                        })
                    }
                }
            })
        }

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