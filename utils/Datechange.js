
 function DateChange(e,that) {
  var Type = e.target.dataset.type;
  var abc1 = that.data.abc;

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