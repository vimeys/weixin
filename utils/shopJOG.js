//店铺手动输入事件--退货入库
function shopJOG(nav,that) {
    var data={};
    data.shopId=that.data.number;
    data.goodsCode=that.data.shopId;
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
          url: '../shopIn_return/shopIn_return?number='+that.data.Number
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
  shopJOG:shopJOG
}