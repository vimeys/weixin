//统一的请求参数
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
function requesttime(that,nav) {
    var data1={};
    data1.begintime=that.data.select.Start;
    data1.endtime=that.data.select.End;
    data1.goodsFashion=that.data.select.style;
    data1.goodsGirard=that.data.select.styleNum;
    data1.formatCode=that.data.select.Barcode;
    data1.sizeId=that.data.select.sizeId;
    data1.catId=that.data.select.nameId;
    data1.type=that.data.select.waysId;
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:data1,
        success:function (res) {
            console.log(res.data.data);
            // var t=formatTime.formatTime(res.data.data[0].ctime);
            var num=[]
            function change(item,index) {
                item.okTime=formatTime.formatTime(res.data.data[index].ctime);
                num.push(item);
            }
            res.data.data.forEach(change);
            // console.log(t);
            that.setData({
                Data:num
            })
        }
    })
}
module.exports={
    request:request,
    requesttime:requesttime
};