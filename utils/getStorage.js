//获取用户User的ID和token
function getStorage_Id(){
  var obj={};
  var userId=wx.getStorageSync("userID");
  var Token=wx.getStorageSync("Token");
  obj.UserID=userId;
  obj.TOken=Token;
  return obj;
}

//销售页面分权url
function getStor(that) {
    wx.getStorage({
        key: 'userNum',
        success: res => {
            var judgeUrl = res.data;
            that.setData({
                judgeUrl: judgeUrl
            })
            var judge = that.data.judgeUrl;
            if (judge == 1) {
                that.setData({
                    urlList: "../sell_list_area/sell_list_area",
                    urlCount:"../sell_count_area/sell_count_area",
                    urlMoney:"../sell_money_area/sell_money_area"
                })
            }else if(judge==2||judge==3){
                that.setData({
                    urlList: "../sell_list_all/sell_list_all",
                    urlCount:"../sell_count_all/sell_count_all",
                    urlMoney:"../sell_money_all/sell_money_all"
                })
            }
        }
    });
}

module.exports={
    getStorage_Id:getStorage_Id,
    getStor: getStor
}