//时间改变函数
var request=require("totalRequest");
 function DateChange(e,that,nav) {
  var Type = e.target.dataset.type;
  var select1 = that.data.select;
  if (Type == 1) {
    select1.start = e.detail.value;
    var start=select1.start.replace(/-/g,'/');
    var start1=new Date(start);
    var time=start1.getTime(start1)/1000;
    select1.Start=time;
    that.setData({
      select: select1,
    })
      console.log(select1)
      request.requesttime(that,nav)
  } else {
    select1.end = e.detail.value;
    var start=select1.end.replace(/-/g,'/')
    var start1=new Date(start);
    var time=start1.getTime(start1)/1000;
    select1.End=time;
    that.setData({
      select: select1
    })
    console.log(select1)
      request.requesttime(that,nav)
  }
}
module.exports={
  DateChange:DateChange
};
