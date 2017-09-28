
 function DateChange(e,that) {
  var Type = e.target.dataset.type;
  var select1 = that.data.select;

  if (Type == 1) {
    select1.start = e.detail.value;
    // console.log(select1.start);
    // var start=select1.start.replace(/-/g,'/')
    // var start1=new Date(start);
    // var time=Date.getTime(start1);
    // console.log(start1);

    // wx.request({
    //   url:'',
    //   data:{
    //     size:select1.start,
    //   }
    // });
    that.setData({

      select: select1,
    })
  } else {
    select1.end = e.detail.value;
    that.setData({
      select: select1
    })
  }
}
module.exports={
  DateChange:DateChange
}