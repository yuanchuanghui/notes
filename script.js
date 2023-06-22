//toLocaleString():将当前日期和时间转换为本地格式的字符串，这个字符串会被设置为span元素的innerHTML属性，从而在页面中显示当前时间。
// 引入js写入在head中，确保页面加载完毕，window.onload包裹
window.onload = function() {
    var datetime = document.getElementById('datetime');
    setInterval(function() {
      var now = new Date();
      datetime.innerHTML = now.toLocaleString();
    }, 1000);
  };
  