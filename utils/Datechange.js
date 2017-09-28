
 function DateChange(e,that) {
  var Type = e.target.dataset.type;
  var select1 = that.data.select;

  if (Type == 1) {
    select1.start = e.detail.value;
    var start=select1.start.replace(/-/g,'/')
    var start1=new Date(start);
    var time=start1.getTime(start1);

    wx.request({
      url:'',
      method:"GET",
      data:{
        size:select1.start,
      },
      success:function () {

      }
    });
    that.setData({
      select: select1,
    })
  } else {
    select1.end = e.detail.value;
    var start=select1.end.replace(/-/g,'/')
    var start1=new Date(start);
    var time=start1.getTime(start1);

    that.setData({
      select: select1
    })
  }
}
module.exports={
  DateChange:DateChange
}