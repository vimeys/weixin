//时间撮转换格式
function formatTime(date) {
    var data=new Date();
        data.setTime(date*1000);
  var year = data.getFullYear();
  var month = data.getMonth() + 1;
  var day = data.getDate();

  var hour = data.getHours();
  var minute = data.getMinutes();
  var second = data.getSeconds();


  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}