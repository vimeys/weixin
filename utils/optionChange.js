//多选框改变时间
var request=require("totalRequest")
function optionChange(e,that,nav) {
  console.log(e);
  console.log(that);
  var select=that.data.select;
  var Type=e.target.dataset.type;
  if(Type==1){
    select.sizeIndex=e.detail.value;
    that.setData({
      select:select
    })
  }else if(Type==2){
    select.nameIndex = e.detail.value;
    that.setData({
      select: select
    })
  }else if(Type==3){
    select.waysIndex = e.detail.value;
    that.setData({
      select: select
    })
  }
  request.request(that,nav);
}
module.exports={
  optionChange:optionChange
}