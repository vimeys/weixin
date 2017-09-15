
 function DateChange(e,that) {
  // console.log(e.target.dataset.type);
  var Type = e.target.dataset.type;
  // var qwe=abc.start;
  // var qwer=abc.end;
  var abc1 = that.data.abc;

  // abc.start=e.detail.value;
  if (Type == 1) {
    abc1.start = e.detail.value;
    // wx.request({
    //   url:'',
    //   data:{
    //     size:abc1.start,
    //   }
    // });
    that.setData({

      abc: abc1,
    })
    // console.log(e.test);
  } else {
    abc1.end = e.detail.value;
    that.setData({
      abc: abc1
    })
  }
}
module.exports={
  DateChange:DateChange
}