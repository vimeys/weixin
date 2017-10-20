//时间改变函数
var request=require("totalRequest");
 function DateChange(e,that,nav) {
  var Type = e.target.dataset.type;
  var select1 = that.data.select;
  if (Type == 1) {
      that.setData({
          disable:false
      })
    select1.start = e.detail.value;
    var start=select1.start.replace(/-/g,'/');
    var start1=new Date(start);
    var time=start1.getTime(start1)/1000;
    select1.Start=time;
    that.setData({
      select: select1,
    })
      console.log(select1);

      if(nav=="wearhouse/searchin"){//仓库入库统计的请求
          request.requesttime(that,nav)
      }else if(nav==""){//店铺入库的统计
          request.requestShop(that,nav)
      }else if(nav=="wearhouse/backingoods"){
        request.storReturn(that,nav)
      }
  } else {
    select1.end = e.detail.value;
    var start=select1.end.replace(/-/g,'/')
    var start1=new Date(start);
    var time=start1.getTime(start1)/1000;
    select1.End=time;
    that.setData({
      select: select1
    })
    console.log(select1);
    if(nav=="wearhouse/searchin"){//仓库入库统计的请求
        request.requesttime(that,nav)
    }else if(nav==""){//店铺入库的统计请求
        request.requestShop(that,nav)
    }else if(nav=="wearhouse/backingoods"){
        request.storReturn(that,nav);
    }
  }
}
module.exports={
  DateChange:DateChange
};
