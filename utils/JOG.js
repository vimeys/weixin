function JOG(nav,num,that) {
  wx.request({
    url:that.data.url+"/Ajax/U/GetGoods.aspx?U=''&Token=''&Number"+num,
    method:"GET",
    success:function(res){
      var data=res.data;
      if(data.Success=='true'){
        wx.navigator({
          url:nav+"?Number="+num
                      
          })
      }else{
        wx.showModal({
          title: '提示',
          content: '商品条码信息不全,请重新输入',
          success: res=>{
            if (res.confirm) {
              console.log(1)
            }
          }
        })
      }
    }
  })
}
module.exports={
  JOG:JOG
}