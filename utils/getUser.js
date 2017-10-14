//获取所有的用户信息
function getUser(that) {
    var obj={};
    obj.U=that.data.U;
    obj.token=that.data.token;
    obj.url=that.data.url;
    return obj
}
module.exports={
 getUser:getUser
};