//店铺手动输入事件
function shopJOG(nav,that) {
  wx.request({
    url:that.data.url+'',
    method:'GET',
    data:{
      Number:that.data.Number,
    },
    success:function (res) {
      if(res.success=='true'){
        wx.navigateTo({
          url: nav+'?Number'+that.data.Number
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