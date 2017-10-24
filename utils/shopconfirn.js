//店铺退货入库确认按钮
function confirm(that,nav) {
    var Data=that.data.Data;
    var num=[];
    function push(item,index) {
        var obj={};
        var ID = item.storeId;
        var Num = item.goodsStock;
        obj.storeId = ID;
        obj.goodsStock = Num;
        obj.logEditor=that.data.uname;
        obj.shopId=that.data.shopId;
        num.push(obj);
    }
    Data.forEach(push);
    console.log(num);
    that.setData({
        sendData:num
    });
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:{
            data:that.data.sendData
        },
        success:function (res) {
            console.log(res);
            if (res.data.code == 200) {
                wx.showModal({
                    title:"成功",
                    content:"入库成功",
                    showCancel:false,
                    success:function (res) {
                        wx.navigateBack({
                          delta:2
                        })
                    }
                })
            } else {
                wx.showModal({
                    title: '提示',
                    content: '失败,请重新扫描',
                    success: res => {
                        if (res.confirm) {

                        }
                    }
                })
            }

        },
    })
    console.log(num);
}
module.exports={
    confirm:confirm
}