// pages/shopIn_note/shopIn_note.js
var app = getApp();
var common = require("../../utils/common");
var output = require("../../utils/output");
var Datechange = require("../../utils/Datechange");
var optionChange = require("../../utils/optionChange");
var request = require("../../utils/totalRequest");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        active: '1',
        select: {
            use: false,
            style: "",
            styleNum: "",
            Barcode: "",
            start: "开始时间",
            Start: "",
            end: "结束时间",
            End: "",
            Date: {"a": ["new"], "b": 2, "c": 3, "d": 4},
            size: ["S", "M", "L", "XL", "XXL"],
            sizeId: [],
            name: ["长", "宽", "高"],
            nameId: [],
            ways: ['全部','正常入库', '退货入库', '调货入库'],
            waysId: [15,3, 2, 4],
            nameIndex: 0,
            sizeIndex: 0,
            waysIndex: 0
        },
        Data: "",
        year: "",//年
        hours: "",//时间
        noMore: true,
        shopId: "",//店铺id
        page:1
    },
    output: function (e) {
        output.output(e, this, "shopstore/logsearch")
    },
    DateChange: function (e) {
        Datechange.DateChange(e, this, "shopstore/logsearch")
    },
    optionChange: function (e) {
        optionChange.optionChange(e, this, "shopstore/logsearch")
    },
    changeNew: function (e) {
        var active = e.currentTarget.dataset.type;
        this.setData({
            active: active
        });
        request.requestShop(this,"shopstore/logsearch")
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var url = app.url;
        let shopId=wx.getStorageSync('shopId');
        this.setData({
            url: url,
            shopId: shopId
        })
        var that = this;
        var data = this.data;
        wx.request({
            url: data.url + "sundry/sizes",
            method: "POST",
            success: function (res) {
                var size = [];
                var sizeId = [];

                function sizePush(item, index) {
                    size.push(item.sizeName);
                    sizeId.push(item.sizeId);
                }

                res.data.data.forEach(sizePush);
                size.unshift('全部');
                sizeId.unshift(0);
                var newsize = that.data.select;
                newsize.size = size;
                newsize.sizeId = sizeId;
                that.setData({
                    select: newsize,

                })
            }
        });
        //
        wx.request({
            url: data.url + "sundry/cat",
            method: "POST",
            success: function (res) {
                var name = [];
                var nameId = []

                function sizePush(item, index) {
                    name.push(item.catName)
                    nameId.push(item.catId)
                }

                res.data.data.forEach(sizePush);
                name.unshift('全部');
                nameId.unshift(0);
                var newsize = that.data.select;
                newsize.name = name;
                newsize.nameId = nameId;
                that.setData({
                    select: newsize
                })
            }
        });
        request.requestShop(this,"shopstore/logsearch")//替换
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
        let that=this;
        let num=that.data.page;
        num++;
        this.setData({
            page:num
        });
        request.requestShop(this,"shopstore/logsearch")
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})