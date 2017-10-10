//获取用户User的ID和token
function getStorage_Id(){
  var obj={};
  var userId=wx.getStorageSync("userID");
  var Token=wx.getStorageSync("Token");
  obj.UserID=userId;
  obj.TOken=Token;
  return obj;
}
module.exports={
  getStorage_Id:getStorage_Id
}