//出库仓库手动输入事件
function storOutJOG(nav,that) {
    wx.request({
        url:that.data.url+"wearout/manual",
        method:'POST',
        data:{
            goodsCode:that.data.Number
        },
        success:function (res) {
            if(res.data.code==200||res.data.code==203){
                console.log(1);
                wx.navigateTo({
                    url: nav+'?number='+that.data.Number
                })
            }else{
                console.log(res);
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
    storOutJOG:storOutJOG
}