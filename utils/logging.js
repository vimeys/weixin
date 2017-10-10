function logging(fn, that) {
  var obj = UandToken.U_Token(that)
  wx.getUserInfo({
    success: function (res) {
      var userInfoAvatar = res.userInfo.avatarUrl;
      var nickname = res.userInfo.nickName;
      console.log("nickname" + nickname)
      wx.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            console.log(res.code)
            wx.request({
              url: obj.url + '/WeChat/login.aspx?Code=' + res.code + "&Img=" + userInfoAvatar + "&Name=" + nickname,
              success: function (res) {
                if (res.data.Success == 'true')
                wx.setStorageSync('UserID', res.data.UserID);
                wx.setStorageSync('Token', res.data.Token);
                that.setData({
                  U: res.data.UserID,
                  Token: res.data.Token
                })
                if (fn && that) {
                  fn(that);
                }
              },
              fail: function () {
                // fail
                console.log()
              },
              complete: function () {
                // complete
              }
            })
          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      })

    },
    fail: function () {
      // fail
      console.log("获取失败！");

    },
    complete: function () {
      // complete
      console.log("获取用户信息完成！")
    }
  })
}
module.exports = {
  logging: logging
}