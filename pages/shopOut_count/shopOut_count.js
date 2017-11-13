// pages/shopOut_count/shopOut_count.js
var app = getApp();
var Datechange = require("../../utils/Datechange");
var optionChange = require("../../utils/optionChange");
var common = require("../../utils/common");
var output = require("../../utils/output");
var request = require("../../utils/totalRequest");
let formatTime=require("../../utils/util");
Page({
    /**
     * 页面的初始数据
     */
    data: {
        active1: '1',
        count: [1, 2, 3],
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
            ways:['退货出库','调货出库','销售出库'],
            waysId:[6,7,8],
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
    DateChange:function (e) {
        Datechange.DateChange(e,this,"shopout/searchin");
    },
    output:function (e) {
        output.output(e,this,"shopout/searchin");
    },
    optionChange:function (e) {
        optionChange.optionChange(e,this,"shopout/searchin");
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let url=app.url;
        let that=this;
        let data1=this.data;
        let  shopId=wx.getStorageSync('shopId');
        this.setData({
            url:url,
            shopId:shopId
        });
        wx.request({
            url:data1.url+"sundry/sizes",
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
            url:data1.url+"sundry/cat",
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
        // request.shopOutCount(this,"shopout/searchin");
        var data = {};
        // data.shopId = that.data.select.shopId;
        data.begintime = that.data.select.Start;
        data.endtime = that.data.select.End;
        data.goodsFashion = that.data.select.style;
        data.goodsGirard = that.data.select.styleNum;
        data.formatCode = that.data.select.Barcode;
        data.shopId = that.data.shopId;
        data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
        data.catId = that.data.select.nameId[that.data.select.nameIndex];
        data.type = '';
        // console.log(data);
        wx.request({
            url: that.data.url + 'shopout/searchin',
            method: "POST",
            data: data,
            success: function (res) {
                console.log(res);
                if (res.data.code == 202) {
                    that.setData({
                        noMOre: true,
                        Data: []
                    })
                } else if (res.data.code == 200) {
                    var num = [];

                    function change(item, index) {
                        item.okTime = formatTime.formatTime(res.data.data[index].ctime);
                        if (item.type == 6) {
                            item.Type = "退货出库"
                        } else if (item.type == 7) {
                            item.Type = "收货出库"
                        } else if (item.type == 8) {
                            item.Type = "销售出库"
                        }
                        if(item.goodsFashion.length>12){
                            item.goodsFashion=item.goodsFashion.slice(0,12)+'...';
                        }
                        num.push(item);
                    }

                    res.data.data.forEach(change);
                    console.log(num);
                    that.setData({
                        Data: num,
                        noMore: false
                    });
                    console.log(that.data.Data)
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