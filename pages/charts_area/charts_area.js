var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
var request=require("../../utils/totalRequest");
Page({
    data: {
        date: ["最近7天", "最近14天", "最近28天"],
        Id:[7,14,28],
        index:0,
        area: ["A", "B"],
        areaId:'',
        areaIndex:0,
        shop: ['全部店铺'],
        shopId:[0],
        shopIndex:0,
        money:[0,0,0,0,0,0,0],
        code:'',
        day:"第",
        num:'',
        disable:false,
        order:''
    },
    touchHandler: function (e) {
        console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            // background: '#7cb5ec',
            format: function (item, category) {
                return category + ' ' + item.name + ':' + item.data
            }
        });
    },
    createSimulationData: function () {
        var categories = [];
        var data = [];
        let that=this;
        for (var i = 0; i < 7; i++) {
            if(that.data.num==2){
                categories.push(this.data.day + (2*i + 1) + '天');
            }else if(that.data.num==4) {
                categories.push(this.data.day + (4*i + 1) + '天');
            }else {
                categories.push(this.data.day + (i + 1) + '天');
            }
            // data.push(Math.random() * (this.data.money - 10) + 10);
            data.push(that.data.money[i]);
        }
        // data[4] = null;
        return {
            categories: categories,
            data: data
        }
    },
    updateData: function () {
        var simulationData = this.createSimulationData();
        var series = [{
            name: '成交量1',
            data: simulationData.data,
            format: function (val, name) {
                return val.toFixed(2) + '万';
            }
        }];
        lineChart.updateData({
            categories: simulationData.categories,
            series: series
        });
        this.setData({
            disable:true
        })
    },
    output:function (e) {
        // console.log(e);
        let value=e.detail.value;
        this.setData({
            code:value
        })
        console.log(this.data.code);
        request.logArea(this,"sell/citytrend")
    },
    //选择框的改变事件
    optionChange:function (e) {
        var Type=e.target.dataset.type;
        if(Type==1){
            var value=e.detail.value;
            this.setData({
                index:value
            })
        }else if(Type==2){
            var value=e.detail.value;
            this.setData({
                areaIndex:value
            })
        }else if(Type==3){
            var value=e.detail.value;
            this.setData({
                shopIndex:value
            })
        }
        request.logArea(this,"sell/citytrend")
    },
    onLoad: function (e) {
        let url=app.url;
        let that=this;
        let city=wx.getStorageSync('space');
        that.setData({
            url:url,
            city:city
        })
        //店铺选择
        wx.request({
            url:that.data.url+"sell/shopname",
            method:"POST",
            data:{
                cityId:that.data.city
            },
            success:function (res) {
                console.log(res.data.data);
                let json=res.data.data;
                json.unshift({shopName:'全部店铺',shopId:0});
                let arr=[];
                let arr1=[];
                function push(item,index) {
                    arr.push(item.shopName);
                    arr1.push(item.shopId);
                }
                json.forEach(push);
                // let obj=that.data.select;
                // obj.shop=arr;
                // obj.shopId=arr1;
                // console.log(obj);
                that.setData({
                    shop:arr,
                    shopId:arr1
                })
                console.log(that.data.shopId);
            }
        });
        wx.request({
            url:that.data.url+"sell/citytrend",
            method:"POST",
            data:{
                cityId:that.data.city,
                shopId:0,
                interval:7
            },
            success:function (res) {
                console.log(res);
                let arr=[];
                let con=res.data.data.data[0].day;
                function push(item,index) {
                    arr.push(item.number)
                }
                res.data.data.data.forEach(push);
                that.setData({
                    money:arr,
                    num:con
                })
            }
        });
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }

        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            background: '#f5f5f5',
            series: [{
                name: '销售数量',
                data: simulationData.data,
                format: function (val, name) {
                    return val + '万';
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title: '',
                format: function (val) {
                    return val.toFixed(0);
                },
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: false,
            dataPointShape: true,
            extra: {
                lineStyle: 'curve'
            }
        });
    }
});