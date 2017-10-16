//统一的请求参数
function request(that,nav){
    var shop=that.data.shopId;
    var style=that.data.select.style;//
    var styleNum=that.data.select.styleNum;
    var Barcode=that.data.select.Barcode;
    var size=that.data.select.sizeId[that.data.select.sizeIndex];
    var nameId=that.data.select.nameId[that.data.select.nameIndex];
    console.log(size);
    console.log(style);
    console.log(nameId);
    console.log(styleNum);
    console.log(Barcode);
    console.log(shop)
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
module.exports={
    request:request
};