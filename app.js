//app.js
App({
  url:'http://jxc.scmxkj.com/index.php/invo/',

  onLaunch: function () {
    var url=this.Url;
    wx.getUserInfo({
      success: function (res) {
        var userInfoAvatar=res.userInfo.avatarUrl;
        var nickname=res.userInfo.nickName;
        console.log("在onlaunch里面的url"+url);
        console.log("nickname"+nickname)
        wx.login({
          success: function (res) {
            if (res.code) {
              //发起网络请求
              console.log(res.code)
              wx.request({
                url: url+'/WeChat/login.aspx?Code=' + res.code + "&Img="+userInfoAvatar+"&Name="+nickname,
                method:"POST",
                data:{
                  code:res.code,
                  Img:userInfoAvatar,
                  Name:nickname
                },
                success: function (res) {
                  if (res.data.Success == 'true')
                    wx.setStorageSync('UserID', res.data.UserID);
                  wx.setStorageSync('Token', res.data.Token);
                },
                fail: function () {
                  // fail
                  console.log(123);
                  wx.setStorageSync('user', userInfoAvatar);
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
      fail: function (res) {
        // fail
        console.log(res);
        console.log("获取失败！")
      },
      complete: function () {
        // complete
        console.log("获取用户信息完成！")
      }
    })
  },
  getUserId_Token:function(){
    var obj={}
    var UserID=wx.getStorageSync('UserID')
    var Token=wx.getStorageSync('Token')
    console.log(UserID)
    console.log(Token)
    obj.UserID=UserID;
    obj.Token=Token
    return obj;
  },
  getUserInfo:function(cb){
    var that = this
    //如果定义在app函数对象全局的用户名存在
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //如果不存在于全局的用户名，调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})
