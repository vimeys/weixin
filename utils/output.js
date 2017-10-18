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
    if(nav=="wearhouse/searchin"){
        request.requesttime(that,nav);
    }
    // wx.request({
    //     url:"",
    //     method:"GET",
    //     data:{
    //         start:select.start,
    //         end:select.end,
    //         style:select.style,
    //         styleNum:select.styleNum,
    //         codeBar:select.codeBar,
    //         size:select.size[select.sizeIndex],
    //         name:select.name[select.nameIndex],
    //         ways:select.ways[select.waysIndex]
    //     },
    //     success:function (res) {
    //         if(res.success){
    //
    //         }
    //     }
    // })
}
module.exports={
    output:output
}