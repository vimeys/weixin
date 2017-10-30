// pages/shopOut_note/shopOut_note.js
var app = getApp();
var Datechange = require("../../utils/Datechange");
var optionChange = require("../../utils/optionChange");
var common = require("../../utils/common");
var output = require("../../utils/output");
var request = require("../../utils/totalRequest");
var formatTime=require("../../utils/util");
Page({
    /**
     * 页面的初始数据
     */
    data: {
        active: '1',
        select: {
            use: false,
            style:"",
            styleNum:"",
            Barcode:"",
            start:"开始时间",
            Start:"",
            end: "结束时间",
            End:"",
            Date: {"a": ["new"], "b": 2, "c": 3, "d": 4},
            size:["S","M","L","XL","XXL"],
            sizeId:"",
            name:["长","宽","高"],
            nameId:[],
            ways:['调货出库','退货出库'],
            waysId:[7,6],
            nameIndex:0,
            sizeIndex:0,
            waysIndex:0
        },
        Data:"",//接受数据
        year:"" ,//年
        hours:"",//时间
        noMore:true,
        shopId:""//店铺id
    },
    DateChange: function (e) {
        Datechange.DateChange(e, this,"shopout/loglist")
    },
    optionChange: function (e) {
        optionChange.optionChange(e, this,"shopout/loglist")
    },
    output:function (e) {
      output.output(e,this,"shopout/loglist")
    },
    changeNew: function (e) {
        var active = e.currentTarget.dataset.type;
        this.setData({
            active: active
        });
        request.shopOutnote(this,"shopout/loglist")
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let url=app.url;
        let  shopId=wx.getStorageSync('shopId');
        this.setData({
            url:url,
            shopId:shopId
        });
        let that=this;
        let data=this.data;
        wx.request({
            url:data.url+"sundry/sizes",
            method:"POST",
            success:function (res) {
                var size=[];
                var sizeId=[];
                function sizePush(item,index){
                    size.push(item.sizeName);
                    sizeId.push(item.sizeId);
                }
                res.data.data.forEach(sizePush);
                // console.log(size);
                var newsize=that.data.select;
                newsize.size=size;
                newsize.sizeId=sizeId;
                that.setData({
                    select:newsize,

                })
            }
        });
        //
        wx.request({
            url:data.url+"sundry/cat",
            method:"POST",
            success:function (res) {
                var name=[];
                var nameId=[]
                function sizePush(item,index){
                    name.push(item.catName)
                    nameId.push(item.catId)
                }
                res.data.data.forEach(sizePush);
                var newsize=that.data.select;
                newsize.name=name;
                newsize.nameId=nameId;
                that.setData({
                    select:newsize
                })
            }
        });
        wx.request({
            url:that.data.url+"shopout/loglist",
            method:"POST",
            data:{select:1,shopId:shopId},
            success:function (res) {
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(item.logCtime);
                    if(item.logType==6){
                        item.type="退货出库"
                    }else if(item.logType==7){
                        item.type="调货出库"
                    }else if(item.logType==8){
                        item.type="销售出库"
                    }else if(item.logType==9||item.logType==10){
                        item.type="错误信息"
                    }
                    num.push(item)
                }
                res.data.data.forEach(change);
                console.log(num);
                let data=res.data.data;
                that.setData({
                    Data:data
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