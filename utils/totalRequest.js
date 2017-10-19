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
//仓库的店铺请求
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
            if(res.data.code==202){
                that.setData({
                    noMore:false
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
//收货店铺的请求
function requestShop(that,nav) {
    var data = {};
    data.shopId = that.data.select.shopId;
    data.begintime = that.data.select.Start;
    data.endtime = that.data.select.End;
    data.goodsFashion = that.data.select.style;
    data.goodsGirard = that.data.select.styleNum;
    data.formatCode = that.data.select.Barcode;
    data.sizeId = that.data.select.sizeId[that.data.select.sizeIndex];
    data.catId = that.data.select.nameId[that.data.select.nameIndex];
    data.type = that.data.select.waysId[that.data.select.waysIndex];
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data,
        success:function (res) {
            if(res.data.code==202){
                that.setData({
                    noMOre:false
                })
            }else{
                var num=[];
                function change(item,index) {
                    item.okTime=formatTime.formatTime(res.data.data[index].ctime)
                    num.push(item);
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
//销售单总经理请求
function sellListAll(that,nav) {
    var data={};
    data.begintime=that.data.select.Start;
    data.endtime=that.data.select.End;
    data.area=that.data.select.areaId[that.data.select.areaIndex];
    data.shop=that.data.select.shopId[that.data.select.shopIndex];
    data.list=that.data.select.listId[that.data.select.listId]
}

module.exports={
    request:request,
    requesttime:requesttime,
    requestShop:requestShop
};