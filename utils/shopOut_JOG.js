//店铺手动输入事件--退货入库
function shopOut_JOG(nav,that) {
    var data={};
    data.shopId=that.data.number;
    data.goodsCode=that.data.shopId;
    console.log(data);
    wx.request({
        url:that.data.url+nav,
        method:'POST',
        data:{
            goodsCode:that.data.number,
            shopId:that.data.shopId
        },
        success:function (res) {
            console.log(res);
            if(res.data.code==200){
                wx.navigateTo({
                    url: '../shopOut_restock/shopOut_restock?number='+that.data.number
                })
            }else{
                wx.showModal({
                    title: '提示',
                    content: '条形码错误',
                    showCancel:false,
                    success: res=>{
                        if (res.confirm) {

                        }
                    }
                })
            }
        }
    })
}
module.exports={
    shopOut_JOG:shopOut_JOG
}