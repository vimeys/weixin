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
      console.log(nav);

      if(nav=="wearhouse/searchin"){//仓库入库统计的请求
          request.requesttime(that,nav)
      }else if(nav=="shopstore/logsearch"){//店铺入库的统计
          request.requestShop(that,nav)
      }else if(nav=="wearhouse/backingoods"){
        request.storReturn(that,nav)
      }else if(nav=="shopstore/countsearch"){//店铺入库统计
          request.requestShopCount(that,nav)
      }else if(nav=="shopstore/shougoods"){//店铺退货列表
          request.shopreturn(that,nav)
      }else if(nav=="wearout/outcount"){//仓库出库统计请求
          console.log(1);
          request.storCount(that,nav)
      }else if(nav=="wearout/outlog"){//仓库出库日志请求
          request.storNote(that,nav)
      }else if(nav=="shopout/loglist"){//店铺出库日志请求
          request.shopOutnote(that,nav)
      }else if(nav=='shopout/searchin'){//店铺出库统计请求
          request.shopOutCount(that,nav)
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
    }else if(nav=="shopstore/logsearch"){//店铺入库的日志请求
        request.requestShop(that,nav)
    }else if(nav=="wearhouse/backingoods"){
        request.storReturn(that,nav);
    }else if(nav=="shopstore/countsearch"){//店铺入库统计
        request.requestShopCount(that,nav)
    }else if(nav=="shopstore/shougoods"){//店铺退货列表
        request.shopreturn(that,nav)
    }else if(nav=="wearout/outcount"){//仓库出库统计请求
        console.log(1);
        request.storCount(that,nav)
    }else if(nav=="wearout/outlog"){//仓库出库日志请求
        request.storNote(that,nav)
    }else if(nav=="shopout/loglist"){//店铺出库日志请求
        request.shopOutnote(that,nav)
    }else if(nav=='shopout/searchin'){//店铺出库统计请求
        request.shopOutCount(that,nav)
    }
  }
}
module.exports={
  DateChange:DateChange
};
