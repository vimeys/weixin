//扫描入库确认按钮
function confirm(that,nav) {
    var Data=that.data.Data;
    var num=[];
    function push(item,index) {
        var obj={}
        var ID = item.formatId;
        var Num = item.goodsStock;
        obj.formatId = ID;
        obj.formatStock = Num;
        num.push(obj)
    }
    Data.forEach(push);
    that.setData({
        sendData:num
    })
    wx.request({
        url:that.data.url+nav,
        method:"POST",
        data:{
            data:that.sendData
        },
        success:function (res) {
            console.log(res);
            if (res.data.code == 200){
                wx.navigateBack({
                    delta: 2
                })
        }else{
                wx.showModal({
                  title: '提示',
                  content: '失败,请重新扫描',
                  success: res=>{
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