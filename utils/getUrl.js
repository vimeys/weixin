//权限信息提示警告
function getUrl(e,that) {
  var Type=e.currentTarget.dataset.type;
  console.log("信息警告");
  if(Type==2){
    wx.showModal({
      title: '警告',
      content: '你没有权限查看内容',
        showCancel:false,
      success: res=>{
        if (res.confirm) {

        }
      }
    })
  }
}
module.exports={
  getUrl:getUrl
}