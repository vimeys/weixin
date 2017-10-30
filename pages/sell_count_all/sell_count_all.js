// pages/sell_count_all/sell_count_all.js
let app=getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:'',
        date: ["最近7天", "最近14天", "最近28天"],
        area: ["A", "B"],
        shop: ["a", "b", "c"],
        index: 0,
        areaIndex: 0,
        shopIndex: 0,
    },
    //选择框改变事件
    optionChange:function (e) {
        var Type=e.target.dataset.type;
        if(Type==1){
            var value=e.detail.value;
            this.setData({
                dataIndex:value
            })
        }else if(Type==3){
            var value=e.detail.value;
            this.setData({
                areaIndex:value
            })
        }else if(Type==2){
            var value=e.detail.value;
            this.setData({
                shopIndex:value
            })
        }
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let url=app.url;
        let that=this;
        that.setData({
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