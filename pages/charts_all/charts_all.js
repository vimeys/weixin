var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
Page({
    data: {
        // url:'',
        date: ["最近7天", "最近14天", "最近28天"],
        area: ["A", "B"],
        shop: ["a", "b", "c"],
        dataIndex: 0,
        areaIndex:0,
        shopIndex:0,
        money:[1,30,33,33,12,123,123],
        day:"第",
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
        let that=this;
        var categories = [];
        var data = [];
        for (var i = 0; i < 7; i++) {
            categories.push(this.data.day +(i + 1)+'天');
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
    },
    //选择框的改变事件
    optionChange:function (e) {
        var Type=e.target.dataset.type;
        if(Type==1){
            var value=e.detail.value;
            this.setData({
                dataIndex:value
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
    },
    onLoad: function (e) {
        let url=app.url;
        let that=this;
        this.setData({
            url:url
        });

        // 页面请求
        wx.request({
            url:that.data.url+"",
            method:"POST",
            data:{},
            success:function (res) {
                console.log(res);
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
                title: "",
                format: function (val) {
                    return val.toFixed(2);
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