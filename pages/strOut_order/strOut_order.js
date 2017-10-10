// pages/strOut_order/strOut_order.js
var app=getApp();
var common=require("../../utils/common");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        disable:true,//结束时间禁用
        start: "开始时间",//开始时间
        Start: "",//开始时间撮
        end: "截止时间",//结束时间
        End: "",//结束时间撮
        area: ["区域", "区域2"],//发货区域
        areaWord:"",//具体区域
        areaIndex: 0,//发货区域下标
        style: ["已发货", "已入库", "待收货"],//发货状态
        styleWord:"",//具体状态
        styleIndex: 0,
        express: ["圆通", "申通", "汇通"],//快递
        expressWord:"",//具体快递
        expressIndex: 0,
        expressNum: ""//快递单号

    },
    DateChange: function (e) {
        var Type = e.target.dataset.type;
        if (Type == 1) {
            var start = e.detail.value;
            var time = start.replace(/-/g, '/');
            var timer = new Date(time).getTime();
            this.setData({
                start: start,
                Start:timer,
                disable:false
            })
        } else {
            var end = e.detail.value;
            var time = end.replace(/-/g, '/');
            var timer = new Date(time).getTime();
            console.log(timer);
            this.setData({
                end: end,
                End:timer
            })
        }
    },
    optionChange: function (e) {
        var Type = e.currentTarget.dataset.type;
        console.log(e);
        if (Type == 1) {
            var i = e.detail.value;
            this.setData({
                areaIndex: i,
                areaWord:area[i]
            })
            console.log(e);
        } else if (Type == 2) {
            var i = e.detail.value;
            this.setData({
                styleIndex: i,
                styleWord:style[i]
            })
        } else {
            var i = e.detail.value;
            this.setData({
                expressIndex: i,
                expressWord:express[i]
            })
        }
    },
    output: function (e) {
        var Num = e.detail.value;
        this.setData({
            expressNum: Num
        })
        console.log(Num)
    },
    bindpick:function () {
        common.bindpick(this);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var url=app.url;
        this.setData({
            url:url
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