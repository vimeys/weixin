//多选框改变时间
function optionChange(e,that) {
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
}
module.exports={
  optionChange:optionChange
}