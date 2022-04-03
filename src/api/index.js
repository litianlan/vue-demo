
export default {
  install(Vue) {
    let baseUrl = 'http://localhost:8080/';
    Vue.prototype.$http = function(opt) {
      opt.method = opt.method.toUpperCase() || 'GET';
      opt.url = baseUrl + opt.url;
      opt.async = opt.async || true;
      opt.success = opt.success || function () {};
    
      // 创建ajax
      var xmlHttp = null;
      if (XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
      }
      else {
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
      }
    
      // 转换传入参数
      var params = [];
      for (var key in opt.data){
        params.push(key + '=' + opt.data[key]);
      }
      var postData = params.join('&');
    
      //post 方法
      if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        xmlHttp.send(postData);
      }
      // get 方法
      else if (opt.method.toUpperCase() === 'GET') {
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
      }
    
      // 返回响应 执行函数
      xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          opt.success(xmlHttp.responseText);
        } else {
          opt.error(xmlHttp.responseText);
        }
      };
    }
    Vue.prototype.$post = function(options) {
      options.method = 'post';
      return this.$http(options);
    }
    Vue.prototype.$get = function(options) {
      options.method = 'get';
      return this.$http(options);
    }
  }
}
