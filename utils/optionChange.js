function optionChange(e,that) {
  console.log(e);
  console.log(that);
  var abc=that.data.abc;
  var Type=e.target.dataset.type;
  if(Type==1){
    abc.sizeIndex=e.detail.value;
    that.setData({
      abc:abc
    })
  }else if(Type==2){
    abc.nameIndex = e.detail.value;
    that.setData({
      abc: abc
    })
  }else if(Type==3){
    abc.waysIndex = e.detail.value;
    that.setData({
      abc: abc
    })
  }
}
module.exports={
  optionChange:optionChange
}