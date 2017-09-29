function storageJOG(nav,that) {
  wx.request({
    url:"",
    method:'GET',
    data:{
      Number:that.data.Number
    },
    success:function (res) {
      if(res.success=="true"){
        wx.navigateTo({
          url: nav+'?number='+that.data.Number
        })
      }else{
        wx.showModal({
          title: '提示',
          content: '条形码错误,请重新校验',
          success: res=>{
            if (res.confirm) {
              console.log("失败");
            }
          }
        })
      }
    }
  })
}
module.exports={
  storageJOG:storageJOG
}