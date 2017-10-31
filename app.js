//app.js
App({
  url:'http://192.168.0.122/jxc1/index.php/invo/',
  onLaunch: function () {
    var url=this.url;
    //登录信息
    wx.getUserInfo({
      success: function (res) {
        var userInfoAvatar=res.userInfo.avatarUrl;
        var nickname=res.userInfo.nickName;
        // wx.setStorageSync('UserID', nickname);
        // console.log("在onlaunch里面的url"+url);
        // console.log("nickname"+nickname)
        // console.log("nickname"+userInfoAvatar);
        wx.login({
          success: function (res) {
            if (res.code) {
              //发起网络请求
              console.log(res.code)
              wx.request({
                url: url+'user/info',
                method:"POST",
                data:{
                  code:res.code,
                  Img:userInfoAvatar,
                  Name:nickname
                },
                success: function (res) {
                  console.log(res);
                  var data=res.data.data;
                  if(res.data.code ==200){
                      wx.setStorageSync('uid', data.userinfo.uid);
                      wx.setStorageSync('uname', data.userinfo.uname);
                      wx.setStorageSync('level',data.userinfo.level);
                      if(res.data.data.userinfo.shopId){
                        wx.setStorageSync('shopId',data.userinfo.shopId)
                      }
                  }
                    console.log(data);
                    if(data.shop){
                    var num=[];
                      function push(item,index) {
                          var obj={};
                          obj.name=item.shopId;
                          obj.value=item.shopName;
                          num.push(obj)
                      }
                      data.shop.forEach(push);
                      console.log(num);
                      wx.setStorageSync('shop',num);
                  }
                  // if(data.shopId){
                  //     wx.request({
                  //         url:url+"shopstore/shopgoods",
                  //         method:"POST",
                  //         data:{
                  //             shopId:data.shopId
                  //         },
                  //         success:function (e) {
                  //             console.log(e)
                  //         }
                  //     })
                  // }
                },
                fail: function () {
                  console.log(123);
                  wx.setStorageSync('user', userInfoAvatar);
                },
                complete: function () {

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
    var obj={};
    var UserID=wx.getStorageSync('UserID');
    var Token=wx.getStorageSync('Token');
    console.log(UserID);
    console.log(Token);
    obj.UserID=UserID;
    obj.Token=Token;
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
