//统一的请求参数
// 没有时间的请求
var formatTime = require("util");
function request(that, nav) {
    var shop = that.data.shopId;
    var style = that.data.select.style;//
    var styleNum = that.data.select.styleNum;
    var Barcode = that.data.select.Barcode;
    var size = that.data.select.sizeId[that.data.select.sizeIndex];
    var nameId = that.data.select.nameId[that.data.select.nameIndex];
    var page=that.data.page;
    if (shop) {//店铺库存请求
        //console.log(12312312)
        wx.request({
            url: that.data.url + nav,
            method: "POST",
            data: {
                page:page,
                shopId: shop,
                goodsFashion: style,
                goodsGirard: styleNum,
                formatCode: Barcode,
                sizeId: size,
                catId: nameId,
            },
            success: function (res) {
                console.log(res.data.data);
                console.log(res);
                if (res.data.code == 202) {
                    that.setData({
                        Data: [],
                    })
                } else if (res.data.code == 200) {
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
                        Data: res.data.data.goodsinfo,
                        order:res.data.data.shop
                    })
                }

            }
        })
    } else {//仓库库存请求
        wx.request({
            url: that.data.url + nav,
            method: "POST",
            data: {
                page:page,
                goodsFashion: style,
                goodsGirard: styleNum,
                formatCode: Barcode,
                sizeId: size,
                catId: nameId,
            },
            success: function (res) {
                function slice(item,index) {
                    if(item.goodsFashion.length>12){
                        item.goodsFashion=item.goodsFashion.slice(0,12)+'...';
                    }
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                }
                res.data.data.forEach(slice);
                that.setData({
                    Data: res.data.data,
                    // order:res.data.data.shop
                })
            }
        })
    }

}
//仓库的统计请求
function requesttime(that, nav) {
    var data1 = {};
    data1.begintime = that.data.select.Start;
    data1.endtime = that.data.select.End;
    data1.goodsFashion = that.data.select.style;
    data1.goodsGirard = that.data.select.styleNum;
    data1.formatCode = that.data.select.Barcode;
    data1.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data1.catId = that.data.select.nameId[that.data.select.nameIndex];
    data1.type = that.data.select.waysId[that.data.select.waysIndex];
    data1.page=that.data.page;
    console.log(data1);
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data1,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else {
                console.log(res);
                var num = [];
                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].ctime);
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    }
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                    num.push(item);
                }

                res.data.data.forEach(change);
                that.setData({
                    Data: num,
                    noMore: false
                })
            }

        }
    })
}
//仓库出库统计的请求
function storCount(that, nav) {
    var data1 = {};
    data1.begintime = that.data.select.Start;
    data1.endtime = that.data.select.End;
    data1.goodsFashion = that.data.select.style;
    data1.goodsGirard = that.data.select.styleNum;
    data1.formatCode = that.data.select.Barcode;
    data1.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data1.catId = that.data.select.nameId[that.data.select.nameIndex];
    data1.page=that.data.page;
    // console.log(data1);
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data1,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else {
                console.log(res);
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].ctime);
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    }
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                    num.push(item);
                }

                res.data.data.forEach(change);
                that.setData({
                    Data: num,
                    noMore: false
                })
            }

        }
    })
}
// //仓库出库的日志请求
// function storNote(that, nav) {
//     var data1 = {};
//     data1.begintime = that.data.select.Start;
//     data1.endtime = that.data.select.End;
//     data1.goodsFashion = that.data.select.style;
//     data1.goodsGirard = that.data.select.styleNum;
//     data1.formatCode = that.data.select.Barcode;
//     data1.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
//     data1.catId = that.data.select.nameId[that.data.select.nameIndex];
//     data1.select = that.data.active;
//     console.log(data1);
//     wx.request({
//         url: that.data.url + nav,
//         method: "POST",
//         data: data1,
//         success: function (res) {
//             console.log(res);
//             if (res.data.code == 202) {
//                 that.setData({
//                     noMore: true,
//                     Data: []
//                 })
//             } else {
//                 console.log(res);
//                 var num = [];
//
//                 function change(item, index) {
//                     item.okTime = formatTime.formatTime(res.data.data[index].logCtime);
//                     if(item.goodsFashion.length>12){
//                         item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
//                     }
//                     num.push(item);
//                 }
//
//                 res.data.data.forEach(change);
//                 that.setData({
//                     Data: num,
//                     noMore: false
//                 })
//             }
//
//         }
//     })
// }
//仓库入库日志请求;
function storNote(that, nav) {
    var data = {};
    data.select = that.data.active;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    data.page=that.data.page;
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].logCtime);
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    }
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                    num.push(item);
                }

                res.data.data.forEach(change);
                that.setData({
                    Data: num,
                    noMore: false
                })
            }
        }
    })
}

//收货店铺日志的请求
function requestShop(that, nav) {
    var data = {};
    data.page=that.data.page;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.shopId = that.data.shopId;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    data.select = that.data.active;
    console.log(data);
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].logCtime);
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    };
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                    if (item.logType == 2) {
                        item.type = "退货入库"
                    } else if (item.logType == 3) {
                        item.type = "收货入库"
                    } else if (item.logType == 4) {
                        item.type = "调货入库"
                    }
                    if(item.fixtype==1){
                        item.type='错误信息'
                    }
                    num.push(item);
                }

                res.data.data.forEach(change);
                console.log(num);
                that.setData({
                    Data: num,
                    noMore: false
                })
                console.log(that.data.Data)
            }
        }
    })
}
//店铺出库日志请求
function requestShopOutNote(that, nav) {
    var data = {};
    data.shopId = that.data.shopId;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    data.select = that.data.active;
    data.page=that.data.page;
    console.log(data);
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].logCtime)
                    if (item.logType == 6) {
                        item.type = "退货出库"
                    } else if (item.logType == 7) {
                        item.type = "调货出库"
                    } else if (item.logType == 8) {
                        item.type = "销售出库"
                    }
                    if (item.fixtype==1) {
                        item.type = "错误信息"
                    }
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    }
                    if(item.colorName.length>2){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                    num.push(item);
                }

                res.data.data.forEach(change);
                that.setData({
                    Data: num,
                    noMore: false
                })
            }
        }
    })
}
//店铺出库统计的请求
function shopOutCount(that, nav) {
    var data = {};
    data.page=that.data.page;
    data.shopId = that.data.select.shopId;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.shopId = that.data.shopId;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    // console.log(data);
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
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
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    }
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
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
}
//仓库出库列表请求
function storList(that, nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.areaId = that.data.select.areaId[that.data.select.areaIndex];
    data.shopId = that.data.select.shopId[that.data.select.shopIndex];
    data.status = that.data.select.styleId[that.data.select.styleIndex];
    data.expressId = that.data.select.expressId[that.data.select.expressIndex];
    data.expressCode = that.data.select.expressNum;
    console.log(data);
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: false,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].ctime)
                    if(item.status==0){
                        item.type="待收货"
                    }else if(item.status==1){
                        item.type="已入库"
                    }else if(item.status==2){
                        item.type="发货修改"
                    }
                    num.push(item);
                }

                res.data.data.forEach(change);
                that.setData({
                    Data: num,
                    noMore: false
                })
            }
        }
    })
}
//店铺出库列表请求
function shopOutOrder(that, nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.areaId = that.data.select.areaId[that.data.select.areaIndex];
    data.shopId = that.data.select.shopId[that.data.select.shopIndex];
    data.status = that.data.select.styleId[that.data.select.styleIndex];
    data.expressId = that.data.select.expressId[that.data.select.expressIndex];
    data.expressCode = that.data.select.expressNum;
    data.nowShopId = that.data.shopId;
    data.type = that.data.select.returnId[that.data.select.returnIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: false,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].ctime)
                    if(item.status==0){
                        item.Type="待收货"
                    }else if(item.status==1){
                        item.Type="已出库"
                    }else if(item.status==2){
                        item.Type='发货修改'
                    }
                    num.push(item);
                }

                res.data.data.forEach(change);
                that.setData({
                    Data: num,
                    noMore: false
                })
            }
        }
    })
}
//收货店铺统计的请求
function requestShopCount(that, nav) {
    var data = {};
    data.page=that.data.page;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.shopId = that.data.shopId;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    // console.log(data);
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].ctime);
                    if(item.goodsFashion.length>10){
                        item.goodsFashion=item.goodsFashion.slice(0,10)+'...';
                    }
                    if(item.colorName.length>3){
                        item.colorName=item.colorName.slice(0,2)+'...';
                    }
                    if (item.type == 2) {
                        item.type = "退货入库"
                    } else if (item.type == 3) {
                        item.type = "收货入库"
                    } else if (item.type == 4) {
                        item.type = "调货入库"
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
}
//销售单总经理请求
function sellListAll(that, nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.cityId = that.data.select.areaId[that.data.select.areaIndex];
    data.shopId = that.data.select.shopId[that.data.select.shopIndex];
    data.status = that.data.select.listId[that.data.select.listIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: false,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].sellCtime);
                    num.push(item)
                }

                res.data.data.forEach(change);
                console.log(num);
                that.setData({
                    Data: num,
                    noMore: false
                })
            }
        }
    })
}
//销售单区域经理请求
function sellListArea(that, nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.space = that.data.city;
    data.shopId = that.data.select.shopId[that.data.select.shopIndex];
    data.status = that.data.select.listId[that.data.select.listIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: false,
                    Data: []
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data.order[index].sellCtime);
                    num.push(item)
                }

                res.data.data.order.forEach(change);
                console.log(num);
                that.setData({
                    Data: num,
                    noMore: false,
                    order:res.data.data.shop
                })
            }
        }
    })
}
//店长销售单请求
function sellListStore(that, nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    // data.space=that.data.city;
    data.shopId = that.data.shopId;
    data.status = that.data.select.listId[that.data.select.listIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: false,
                    Data:[]
                })
            } else if (res.data.code == 200) {
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data.order[index].sellCtime);
                    num.push(item)
                }

                res.data.data.order.forEach(change);
                console.log(num);
                that.setData({
                    Data: num,
                    order:res.data.data.shop,
                    noMore: false
                })
                console.log(that.data.Data);
            }
        }
    })
}
//店铺退货列表页面请求
function shopreturn(that, nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    Data: [],
                    noMore: true
                })
            } else if (res.data.code == 200) {
                var json = res.data.data;
                that.setData({
                    Data: json
                })
                var num = [];

                function change(item, index) {
                    item.okTime = formatTime.formatTime(res.data.data[index].ctime);
                    if (item.status == 0) {
                        item.Type = '待收货'
                    } else if (item.status == 1) {
                        item.Type = '已入库'
                    } else if (item.status == 2) {
                        item.Type = '发货修改'
                    }
                    num.push(item)
                }

                res.data.data.forEach(change);
                that.setData({
                    Data: num,
                })
            }

            // console.log(that.data.Date[0].status);
        }
    })
}
//仓库退货请求
function storReturn(that, nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.page=that.data.page;
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: data,
        success: function (res) {
            console.log(res);
            var json = res.data.data;
            that.setData({
                Date: json
            })
            var num = [];

            function change(item, index) {
                item.okTime = formatTime.formatTime(res.data.data[index].ctime);
                num.push(item)
            }

            res.data.data.forEach(change);
            that.setData({
                Date: num,
            })
            // console.log(that.data.Date[0].status);
        }
    })

}

//仓库退货入库修改请求
function storChange(that, nav) {
    var obj = {};
    obj.begintime = that.data.select.Start;
    obj.endtime = that.data.select.End;
    obj.orderCode = that.data.orderId;
    obj.page=that.data.page;
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            let json = res.data.data;

            function push(item, index) {
                item.okTime = timer.formatTime(item.ctime)
            }

            res.data.data.forEach(push);
            that.setData({
                Data: json
            })
        }
    })

}
//店铺退货入库修改请求
function shopInChange(that, nav) {
    var obj = {};
    obj.begintime = that.data.select.Start;
    obj.endtime = that.data.select.End;
    obj.orderCode = that.data.select.putId[that.data.select.putIndex];
    obj.orderCode = that.data.orderId;
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            let json = res.data.data;

            function push(item, index) {
                item.okTime = timer.formatTime(item.ctime)
            }

            res.data.data.forEach(push);
            that.setData({
                Data: json
            })
        }
    })
}
//销售总经理统计请求
function sellCountAll(that, nav) {
    let obj = {};
    obj.cityId = that.data.areaId[that.data.areaIndex];
    obj.interval = that.data.Id[that.data.index];
    obj.shopId = that.data.shopId[that.data.shopIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true
                })
            } else if (res.data.code == 200) {
                // var num=[];
                // function change(item,index){
                //     item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                //     num.push(item)
                // }
                // res.data.data.sellinfo.forEach(change);
                that.setData({
                    Data: res.data.data,
                    noMore: false
                })
            }
        }
    })
}
//销售区域经理统计请求
function sellCountArea(that, nav) {
    let obj = {};
    obj.space = that.data.city;
    obj.interval = that.data.Id[that.data.index];
    obj.shopId = that.data.shopId[that.data.shopIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {
                // var num=[];
                // function change(item,index){
                //     item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                //     num.push(item)
                // }
                // res.data.data.sellinfo.forEach(change);
                that.setData({
                    Data: res.data.data.sellinfo,
                    order:res.data.data.shop,
                    noMore: false
                })
            }
        }
    })
}
//销售区域经理统计请求
function sellCountStore(that, nav) {
    let obj = {};
    // obj.space=that.data.city;
    obj.interval = that.data.Id[that.data.index];
    obj.shopId = that.data.shopId
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {

                // var num=[];
                // function change(item,index){
                //     item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                //     num.push(item)
                // }
                // res.data.data.sellinfo.forEach(change);
                that.setData({
                    order: res.data.data.shop,
                    Data: res.data.data.sellinfo,
                    noMore: false
                })
            }
        }
    })
}
//总经理销售额统计
function sellMoneyAll(that, nav) {
    let obj = {};
    obj.cityId = that.data.areaId[that.data.areaIndex];
    obj.interval = that.data.Id[that.data.index];
    obj.shopId = that.data.shopId[that.data.shopIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data:[]
                })
            } else if (res.data.code == 200) {
                that.setData({
                    Data: res.data.data.sell,
                    noMore: false
                })
            }
        }
    })
}
//区域经理销售额统计
function sellMoneyArea(that, nav) {
    let obj = {};
    obj.space = that.data.city;
    obj.interval = that.data.Id[that.data.index];
    obj.shopId = that.data.shopId[that.data.shopIndex];
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {
                that.setData({
                    Data: res.data.data.sell,
                    noMore: false,
                    order:res.data.data.city
                })
            }
        }
    })
}
//店长销售额统计
function sellMoneyStore(that, nav) {
    let obj = {};
    // obj.space=that.data.city;
    obj.interval = that.data.Id[that.data.index];
    obj.shopId = that.data.shopId;
    wx.request({
        url: that.data.url + nav,
        method: "POST",
        data: obj,
        success: function (res) {
            console.log(res);
            if (res.data.code == 202) {
                that.setData({
                    noMore: true,
                    Data: []
                })
            } else if (res.data.code == 200) {
                that.setData({
                    Data: res.data.data,
                    noMore: false
                })
            }
        }
    })
}
//销售趋势总经库
function logAll(that, nav) {
    var obj = {};
    obj.goodsFashion = that.data.code;
    obj.interval=that.data.Id[that.data.index];
    obj.cityId=that.data.areaId[that.data.areaIndex];
    obj.shopId=that.data.shopId[that.data.shopIndex];
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:obj,
        success:function (res) {
            console.log(res);
            let arr=[];
            let con=res.data.data[0].day;
            function push(item,index) {
                arr.push(item.number)
            }
            // arr.push(res.data)
            res.data.data.forEach(push);
            console.log(arr);
            that.setData({
                money:arr,
                num:con
            });
            console.log(that.data.money);
        }
    });
}
function logArea(that,nav) {
    var obj = {};
    obj.goodsFashion = that.data.code;
    obj.interval=that.data.Id[that.data.index];
    obj.cityId=that.data.city;
    obj.shopId=that.data.shopId[that.data.shopIndex];
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:obj,
        success:function (res) {
            console.log(res);
            let arr=[];
            let con=res.data.data.data[0].day;
            function push(item,index) {
                arr.push(item.number)
            }
            // arr.push(res.data)
            res.data.data.data.forEach(push);
            console.log(arr);
            that.setData({
                money:arr,
                num:con,
                order:res.data.data.address
            });
            console.log(that.data.money);
        }
    });
}
function logstore(that,nav) {
    var obj = {};
    obj.goodsFashion = that.data.code;
    obj.interval=that.data.Id[that.data.index];
    obj.shopId=that.data.shopId;
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:obj,
        success:function (res) {
            console.log(res);
            let arr=[];
            let con=res.data.data.data[0].day;
            function push(item,index) {
                arr.push(item.number)
            }
            // arr.push(res.data)
            res.data.data.data.forEach(push);
            console.log(arr);
            that.setData({
                money:arr,
                num:con
            })
            console.log(that.data.money);
        }
    });
}
module.exports = {
    request: request,
    requesttime: requesttime,
    requestShop: requestShop,
    requestShopCount: requestShopCount,
    storReturn: storReturn,
    // storNote:storNote,
    shopreturn: shopreturn,
    storCount: storCount,
    storNote: storNote,
    storList: storList,
    shopOutnote: requestShopOutNote,
    shopOutCount: shopOutCount,
    shopOutOrder: shopOutOrder,
    storChange: storChange,
    shopInChange: shopInChange,
    sellListAll: sellListAll,
    sellListArea: sellListArea,
    sellListStore: sellListStore,
    sellCountAll: sellCountAll,
    sellCountArea: sellCountArea,
    sellCountStore: sellCountStore,
    sellMoneyAll: sellMoneyAll,
    sellMoneyArea: sellMoneyArea,
    sellMoneyStore: sellMoneyStore,
    logAll: logAll,
    logArea:logArea,
    logstore:logstore
};