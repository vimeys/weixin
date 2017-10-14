var getUser=require("getUser");
//确定前一个时间已经选择
function bindpick(that){
  var display=that.data.disable;
  if(display==true){
      wx.showModal({
        title: '提示',
        content: '请选择请示时间',
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
function output(e,that) {
    var value=e.detail.value;
    var Type=e.currentTarget.dataset.type;
    var data=that.data;
    var count=data.Data;
    count[Type].goodsStock=value;
    that.setData({
        Data:count
    });
    console.log(that.data.Data);
}
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

module.exports={
    bindpick:bindpick,
    request:request,
    output:output
}