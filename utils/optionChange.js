//选择框选择
var request=require("totalRequest")
function optionChange(e,that,nav) {
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
  console.log(nav);
  if(nav=="wearhouse/storesearch"||nav=="shopstore/search"){
      request.request(that,nav);
  }else if(nav=="wearhouse/searchin"){
      request.requesttime(that,nav);
  }else if(nav=="shopstore/logsearch"){//店铺入库日志请求
      request.requestShop(that,nav);
  }else if(nav=="shopstore/countsearch"){//店铺入库统计请求
      request.requestShopCount(that,nav)
  }else if(nav=="wearout/outcount"){//仓库出库统计请求
      console.log(1);
      request.storCount(that,nav)
  }else if(nav=="wearout/outlog"){//仓库出库日志请求
      request.storNote(that,nav)
  }else if(nav=="shopout/loglist"){//店铺出库日志请求
      request.shopOutnote(that,nav)
  }else if(nav=='shopout/searchin'){//店铺出库统计请求
      request.shopOutCount(that,nav)
  }else if(nav=="wearhouse/loglist"){//仓库入库日志请求
      request.storNote(that,nav)
  }
}
//
function optionChangeSellAll(e,that,nav) {
    var select=that.data.select;
    var Type=e.target.dataset.type;
    // if(Type==1){
    //     select.areaIndex=e.detail.value;
    //     that.setData({
    //         select:select
    //     })
    // }else
        if(Type==2){
        select.shopIndex = e.detail.value;
        that.setData({
            select: select
        })
    }else if(Type==3){
        select.listIndex = e.detail.value;
        that.setData({
            select: select
        })
    }
    // if(nav=="wearhouse/storesearch"||nav=="shopstore/search"){
    //     request.request(that,nav);
    // }else if(nav="wearhouse/searchin"){
    //     request.requesttime(that,nav)
    // }
    request.sellListAll(that,nav);
}
function optionChangeSellArea(e,that,nav) {
    var select=that.data.select;
    var Type=e.target.dataset.type;
    // if(Type==1){
    //     select.areaIndex=e.detail.value;
    //     that.setData({
    //         select:select
    //     })
    // }else
    if(Type==2){
        select.shopIndex = e.detail.value;
        that.setData({
            select: select
        })
    }else if(Type==3){
        select.listIndex = e.detail.value;
        that.setData({
            select: select
        })
    }
    // if(nav=="wearhouse/storesearch"||nav=="shopstore/search"){
    //     request.request(that,nav);
    // }else if(nav="wearhouse/searchin"){
    //     request.requesttime(that,nav)
    // }
    request.sellListArea(that,nav);
}
function optionChangeSellStore(e,that,nav) {
    var select=that.data.select;
    var Type=e.target.dataset.type;
    // if(Type==1){
    //     select.areaIndex=e.detail.value;
    //     that.setData({
    //         select:select
    //     })
    // }else
    // if(Type==2){
    //     select.shopIndex = e.detail.value;
    //     that.setData({
    //         select: select
    //     })
    // }else
    if(Type==3){
        select.listIndex = e.detail.value;
        that.setData({
            select: select
        })
    }
    // if(nav=="wearhouse/storesearch"||nav=="shopstore/search"){
    //     request.request(that,nav);
    // }else if(nav="wearhouse/searchin"){
    //     request.requesttime(that,nav)
    // }
    request.sellListStore( that,nav);
}
module.exports={
    optionChange:optionChange,
    optionChangeSellAll:optionChangeSellAll,
    optionChangeSellStore:optionChangeSellStore,
    optionChangeSellArea:optionChangeSellArea
}