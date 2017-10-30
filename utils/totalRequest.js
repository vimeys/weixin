//统一的请求参数
// 没有时间的请求
var formatTime=require("util");
function request(that,nav){
    var shop=that.data.shopId;
    var style=that.data.select.style;//
    var styleNum=that.data.select.styleNum;
    var Barcode=that.data.select.Barcode;
    var size=that.data.select.sizeId[that.data.select.sizeIndex];
    var nameId=that.data.select.nameId[that.data.select.nameIndex];

    if(shop){
console.log(12312312)
        wx.request({
            url:that.data.url+nav,
            method:"POST",
            data:{
                shopId:shop,
                goodsFashion:style,
                goodsGirard:styleNum,
                formatCode:Barcode,
                sizeId:size,
                catId:nameId,
            },
            success:function (res) {
                console.log(res.data.data);
                console.log(res);
                that.setData({
                    Data:res.data.data
                })
            }
        })
    }else {
        wx.request({
            url:that.data.url+nav,
            method:"POST",
            data:{

                goodsFashion:style,
                goodsGirard:styleNum,
                formatCode:Barcode,
                sizeId:size,
                catId:nameId,
            },
            success:function (res) {
                console.log(res.data.data);
                console.log(res);
                that.setData({
                    Data:res.data.data
                })
            }
        })
    }

}
//仓库的统计请求
function requesttime(that,nav) {
    var data1={};
    data1.begintime=that.data.select.Start;
    data1.endtime=that.data.select.End;
    data1.goodsFashion=that.data.select.style;
    data1.goodsGirard=that.data.select.styleNum;
    data1.formatCode=that.data.select.Barcode;
    data1.sizeId=that.data.select.sizeId[that.data.select.sizeIndex];
    data1.catId=that.data.select.nameId[that.data.select.nameIndex];
    data1.type=that.data.select.waysId[that.data.select.waysIndex];
    console.log(data1);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data1,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMore:false,
                    Data:[]
            })
            }else {
                console.log(res);
                // var t=formatTime.formatTime(res.data.data[0].ctime);
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    num.push(item);
                }
                res.data.data.forEach(change);
                // console.log(t);
                that.setData({
                    Data:num,
                    noMore:false
                })
            }

        }
    })
}
//仓库出库统计的请求
function storCount(that,nav) {
    var data1={};
    data1.begintime=that.data.select.Start;
    data1.endtime=that.data.select.End;
    data1.goodsFashion=that.data.select.style;
    data1.goodsGirard=that.data.select.styleNum;
    data1.formatCode=that.data.select.Barcode;
    data1.sizeId=that.data.select.sizeId[that.data.select.sizeIndex];
    data1.catId=that.data.select.nameId[that.data.select.nameIndex];
    console.log(data1);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data1,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMore:true,
                    Data:[]
                })
            }else {
                console.log(res);
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    num.push(item);
                }
                res.data.data.forEach(change);
                that.setData({
                    Data:num,
                    noMore:false
                })
            }

        }
    })
}
//仓库出库的日志请求
function storNote(that,nav) {
    var data1={};
    data1.begintime=that.data.select.Start;
    data1.endtime=that.data.select.End;
    data1.goodsFashion=that.data.select.style;
    data1.goodsGirard=that.data.select.styleNum;
    data1.formatCode=that.data.select.Barcode;
    data1.sizeId=that.data.select.sizeId[that.data.select.sizeIndex];
    data1.catId=that.data.select.nameId[that.data.select.nameIndex];
    data1.select=that.data.active;
    console.log(data1);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data1,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMore:true,
                    Data:[]
                })
            }else {
                console.log(res);
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].logCtime);
                    num.push(item);
                }
                res.data.data.forEach(change);
                that.setData({
                    Data:num,
                    noMore:false
                })
            }

        }
    })
}
//收货店铺日志的请求
function requestShop(that,nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.shopId=that.data.shopId;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    data.select=that.data.active;
    console.log(data);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMOre:false,
                    Data:[]
                })
            }else if(res.data.code==200){
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].logCtime)
                    if(item.logType==2){
                        item.type="退货入库"
                    }else if(item.logType==3){
                        item.type="收货入库"
                    }else if(item.logType==4){
                        item.type="调货入库"
                    }
                    num.push(item);
                }
                res.data.data.forEach(change);
                console.log(num);
                that.setData({
                    Data:num,
                    noMore:false
                })
                console.log(that.data.Data)
            }
        }
    })
}
//店铺出库日志请求
function requestShopOutNote(that,nav) {
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
    data.select=that.data.active;
    console.log(data);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMOre:false,
                    Data:[]
                })
            }else if(res.data.code==200){
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].logCtime)
                    if(item.logType==6){
                        item.type="退货出库"
                    }else if(item.logType==7){
                        item.type="调货出库"
                    }else if(item.logType==8){
                        item.type="销售出库"
                    }else if(item.logType==9||item.logType==10){
                        item.type="错误信息"
                    }
                    num.push(item);
                }
                res.data.data.forEach(change);
                that.setData({
                    Data:num,
                    noMore:false
                })
            }
        }
    })
}
//店铺出库统计的请求
function shopOutCount(that,nav) {
    var data = {};
    data.shopId = that.data.select.shopId;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.shopId=that.data.shopId;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    // console.log(data);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMOre:true,
                    Data:[]
                })
            }else if(res.data.code==200){
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    if(item.type==6){
                        item.Type="退货出库"
                    }else if(item.type==7){
                        item.Type="收货出库"
                    }else if(item.type==8){
                        item.Type="销售出库"
                    }
                    num.push(item);
                }
                res.data.data.forEach(change);
                console.log(num);
                that.setData({
                    Data:num,
                    noMore:false
                });
                console.log(that.data.Data)
            }
        }
    })
}
//仓库出库列表请求
function storList(that,nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.areaId=that.data.areaId[that.data.select.areaIndex];
    data.shopId = that.data.select.shopId[that.data.select.shopIndex];
    data.status = that.data.select.styleId[that.data.select.styleIndex];
    data.expressId = that.data.select.expressId[that.data.select.expressIndex];
    data.expressCode=that.data.select.expressNum;
    console.log(data);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMOre:false,
                    Data:[]
                })
            }else if(res.data.code==200){
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime)
                    // if(item.logType==2){
                    //     item.type="退货入库"
                    // }else if(item.logType==3){
                    //     item.type="收货入库"
                    // }else if(item.logType==4){
                    //     item.type="调货入库"
                    // }
                    num.push(item);
                }
                res.data.data.forEach(change);
                that.setData({
                    Data:num,
                    noMore:false
                })
            }
        }
    })
}
//店铺出库列表请求
function shopOutOrder(that,nav) {
    var data = {};
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.areaId=that.data.select.areaId[that.data.select.areaIndex];
    data.shopId = that.data.select.shopId[that.data.select.shopIndex];
    data.status = that.data.select.styleId[that.data.select.styleIndex];
    data.expressId = that.data.select.expressId[that.data.select.expressIndex];
    data.expressCode=that.data.select.expressNum;
    data.nowShopId=that.data.shopId;
    data.type=that.data.select.return[that.data.select.returnIndex];
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMOre:false,
                    Data:[]
                })
            }else if(res.data.code==200){
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime)
                    // if(item.logType==2){
                    //     item.type="退货入库"
                    // }else if(item.logType==3){
                    //     item.type="收货入库"
                    // }else if(item.logType==4){
                    //     item.type="调货入库"
                    // }
                    num.push(item);
                }
                res.data.data.forEach(change);
                that.setData({
                    Data:num,
                    noMore:false
                })
            }
        }
    })
}
//收货店铺统计的请求
function requestShopCount(that,nav) {
    var data = {};
    data.shopId = that.data.select.shopId;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.shopId=that.data.shopId;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    // console.log(data);
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    noMOre:true,
                    Data:[]
                })
            }else if(res.data.code==200){
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    if(item.type==2){
                        item.type="退货入库"
                    }else if(item.type==3){
                        item.type="收货入库"
                    }else if(item.type==4){
                        item.type="调货入库"
                    }
                    num.push(item);
                }
                res.data.data.forEach(change);
                console.log(num);
                that.setData({
                    Data:num,
                    noMore:false
                });
                console.log(that.data.Data)
            }
        }
    })
}
//销售单总经理请求
function sellListAll(that,nav) {
    var data={};
    data.begintime=that.data.select.Start;
    data.endtime=that.data.select.End;
    data.area=that.data.select.areaId[that.data.select.areaIndex];
    data.shop=that.data.select.shopId[that.data.select.shopIndex];
    data.list=that.data.select.listId[that.data.select.listId];
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            if(res.data.code==202){
                that.setData({
                    noMOre:false
                })
            }else if(res.data.code==200){
                var num=[];
                function change(item,index){
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    num.push(item)
                }
                res.data.data.forEach(change);
                that.setData({
                    Date:num,
                    noMore:false
                })
            }
        }
    })
}

//店铺退货列表页面请求
function shopreturn(that,nav) {
    var data={};
    data.begintime=that.data.select.Start;
    data.endtime=that.data.select.End;
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            console.log(res);
            if(res.data.code==202){
                that.setData({
                    Data:[],
                    noMore:true
                })
            }else if(res.data.code==200){
                var json=res.data.data;
                that.setData({
                    Data:json
                })
                var num=[];
                function change(item,index){
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    if(item.status==0){
                        item.Type='待收货'
                    }else if(item.status==1){
                        item.Type='已入库'
                    }else if(item.status==2){
                        item.Type='发货修改'
                    }
                    num.push(item)
                }
                res.data.data.forEach(change);
                that.setData({
                    Data:num,
                })
            }

            // console.log(that.data.Date[0].status);
        }
    })
}
//仓库退货请求
    function storReturn(that,nav) {
        var data={};
        data.begintime=that.data.select.Start;
        data.endtime=that.data.select.End;
        wx.request({
            url:that.data.url+nav,
            method:"POST",
            data:data,
            success:function (res) {
                console.log(res);
                var json=res.data.data;
                that.setData({
                    Date:json
                })
                var num=[];
                function change(item,index){
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                    num.push(item)
                }
                res.data.data.forEach(change);
                that.setData({
                    Date:num,
                })
                // console.log(that.data.Date[0].status);
            }
        })

    }
//仓库入库日志请求;
    function storNote(that,nav) {
        var data={};
        data.select=that.data.active;
        data.begintime=that.data.select.Start;
        data.endtime=that.data.select.End;
        data.goodsFashion=that.data.select.style;
        data.goodsGirard=that.data.select.styleNum;
        data.formatCode=that.data.select.Barcode;
        data.sizeId=that.data.select.sizeId[that.data.select.sizeIndex];
        data.catId=that.data.select.nameId[that.data.select.nameIndex];
        data.type=that.data.select.waysId[that.data.select.waysIndex];
        console.log(data);
        wx.request({
            url:that.data.url+nav,
            method:"POST",
            data:data,
            success:function (res) {
                console.log(res);
                if(res.data.code==202){
                    that.setData({
                        noMore:false,
                        Data:[]
                    })
                }else if(res.data.code==200) {
                    // var t=formatTime.formatTime(res.data.data[0].ctime);
                    var num=[];
                    function change(item,index) {
                        item.time=formatTime.formatTime(res.data.data[index].logCtime);
                        num.push(item);
                    }
                    res.data.data.forEach(change);
                    // console.log(t);
                    that.setData({
                        Data:num,
                        noMore:false
                    })
                }
            }
        })
    }
module.exports={
    request:request,
    requesttime:requesttime,
    requestShop:requestShop,
    requestShopCount:requestShopCount,
    sellListAll:sellListAll,
    storReturn:storReturn,
    storNote:storNote,
    shopreturn:shopreturn,
    storCount:storCount,
    storNote:storNote,
    storList:storList,
    shopOutnote:requestShopOutNote,
    shopOutCount:shopOutCount,
    shopOutOrder: shopOutOrder,
};