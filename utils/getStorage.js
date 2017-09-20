function getStor(that) {
  wx.getStorage({
    key: 'url',
    success: res => {
      var judgeUrl = res.data;
      that.setData({
        judgeUrl: judgeUrl
      })
      var judge = that.data.judgeUrl;
      if (judge == 1) {
        that.setData({
          urlList: "../sell_list_area/sell_list_area"
        })
      }
    }
  });
}
module.exports = {
  getStor: getStor
}