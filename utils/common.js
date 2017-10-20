var getUser=require("getUser");

//获取总的链接


//登录验证
function testLog(that){
    var obj=getUser.getUser(that)
    wx.request({
        url:obj.U+"",
        method:"POST",
        success:function (res) {
            if(res.data){
                wx.showModal({
                    title: '提示',
                    content: '你没有权限,请联系管理员',
                    success: res=>{
                        if (res.confirm) {
                            console.log(1)
                        }
                    }
                })
            }
        },
    })
}



//确定前一个时间已经选择
function bindpick(that){
  var display=that.data.disable;
  if(display==true){
      wx.showModal({
        title: '提示',
        content: '请选择起始时间',
          showCancel:false,
        success: res=>{
          if (res.confirm) {
            console.log("成功")
          }
        }
      })
  }
}


//店铺和仓库出库列表所有参数时间的传递
function request(that){
    var data=that.data;
    var url=data.url;
    var start=data.Start;
    var end=data.end;
    var area=data.areaWord;
    var style=data.styleWord;
    var express=data.expressWord;
    var expressNum=data.expressNum;
    wx.request({
        url:url,
        method:"GET",
        data:{
            
        },
        success:function (res) {
            var josn=res.data;
        }
    })
}



//订单列表页面修改数量
function output(e,that,nav) {
    var value=e.detail.value;
    var Type=e.currentTarget.dataset.type;//获取
    var data=that.data;
    var count=data.Data;
    count[Type].goodsStock=value;
    that.setData({
        Data:count
    });
    var num={};
    num.storeId=that.data.Data[Type].storeId;
    num.goodsStock=that.data.Data[Type].goodsStock;
    console.log(num);
    wx.request({
        url:that.data.url+nav,
        method:"GET",
        data:num,
        success:function (res) {
            console.log(res);
        }
    })
    console.log(that.data.Data);
}



//删除商品
function delGoods(e,that,nav) {
    console.log(e);
    var Type=e.currentTarget.dataset.type;
    var storeId=that.data.Data[Type].storeId;
    that.setData({
        storeId:storeId
    })
    wx.showModal({
      title: '警告',
      content: '确定要删除商品嘛?',
      success: res=>{
        if (res.confirm) {
            wx.request({
                url:that.data.url+nav,
                method:"GET",
                data:{
                    storeId:that.data.storeId
                },
                success:function (res) {
                    console.log(res);
                    if(res.data.code==200){
                        that.setData({
                            Data:res.data.data
                        })
                    }
                }
            })
        }
      }
    })

}
//动态页面返回
function go(that) {
    wx.navigateBack({
        delta:2
    })
}
module.exports={
    bindpick:bindpick,
    request:request,
    output:output,
    delGoods:delGoods,
    go:go
}