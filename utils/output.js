//输入框失去焦点时间
var request=require("totalRequest");
function output(e,that,nav) {
    var value=e.detail.value;
    console.log(e);
    var select=that.data.select;
    var Type=e.currentTarget.dataset.type;

    if(Type==1){
        select.style=value;
        that.setData({
            select:select
        })
    }else if(Type==2){
        select.styleNum=value;
        that.setData({
            select:select
        })
    }else if(Type==3){
        select.Barcode=value;
        that.setData({
            select:select
        })
    }
    if(nav=="wearhouse/searchin"){//仓库请求
        request.requesttime(that,nav);
    }else if(nav=="shopstore/logsearch"){//店铺日志请求
        request.requestShop(that,nav)
    }else if(nav=="shopstore/countsearch"){//店铺统计请求
        request.requestShopCount(that,nav)
    }else if(nav=="wearout/outcount"){//仓库出库统计请求
        request.storCount(that,nav)
    }else if(nav=="wearout/outlog"){//仓库出库日志请求
        request.storNote(that,nav)
    }else if(nav=="shopout/loglist"){//店铺出库日志请求
        request.shopOutnote(that,nav)
    }else if(nav=='shopout/searchin'){//店铺出库统计请求
        request.shopOutCount(that,nav)
    }
}
module.exports={
    output:output
}