// toLocaleString():将当前日期和时间转换为本地格式的字符串，这个字符串会被设置为span元素的innerHTML属性，从而在页面中显示当前时间。
// 引入js写入在head中，确保页面加载完毕，window.onload包裹
window.onload = function() {
    var datetime = document.getElementById('datetime');
    setInterval(function() {
      var now = new Date();
      var options = { weekday: 'long' }; // 星期几选项
      var weekday = now.toLocaleString('zh-CN', options); // 获取当前日期的星期几
      datetime.innerHTML =now.toLocaleString() +" " + weekday; // 将星期几设置为元素的内容
    }, 1000);
  };
  
