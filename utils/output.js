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
    }else if(nav=="shopstore/logsearch"){//店铺请求
        request.requestShop(that,nav)
    }

}
module.exports={
    output:output
}