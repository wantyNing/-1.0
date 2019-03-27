//app.js
App({
  onLaunch: function () {
    var that = this;
    this.globalData.logInfo = wx.getStorageSync('login');
    console.log(this.globalData.logInfo);
    wx.showToast({
      icon: 'loading',
      duration: 10000
    });
    // this.getUserInfo();
  },
  getUserInfo: function(){
    var that = this;
    if(this.globalData.logInfo){
      this.request({
        url: that.globalData.api_url+'/user/login',
        data: {
          'username': that.globalData.logInfo.username,
          'password': that.globalData.logInfo.password
          },
        method: 'POST',
        success: function(res){
          if(parseInt(res.data.code) === 200){
            that.globalData.userInfo = res.data.data;
            that.globalData.state = res.data.data.status;
          }
          else
            wx.removeStorageSync('login');
        },
        fail: function(){
          wx.removeStorageSync('login');
        },
        complete: function(){
       
        }
      })
    }
  },
  authRequest: function (obj,cb) {
    var flag = true;
    wx.showToast({
      title: '登录中',
      icon: 'loading',
      duration: 10000
    })
    var that = this;
    var datas = {'username': obj.username,'password': obj.password};
    this.request({
      url: that.globalData.api_url+'/user/login',
      data: datas,
      method: "POST",
      success: function(res){
        if (parseInt(res.data.code) === 200) {
          wx.hideToast();
          that.globalData.userInfo = res.data.data;
          that.globalData.state = res.data.data.status;
          that.globalData.head ='https://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/5aaf074fNadb7038d.jpg';
          if(obj.isRem)
            wx.setStorageSync('login', datas);
          typeof cb == "function" && cb(flag);
        }
        else
          typeof cb == "function" && cb(!flag);
      },
      fail: function(){
        wx.showModal({
          title: '提示',
          showCancel: false,
          content: '登录失败',
          success(res) {
          }
        });
      },
      complete: function(){
        
      }
    });
  },
  request: function (obj) {
    var header = obj.header || {}
    if (!header['Content-Type']) {
      header['Content-Type'] = 'application/json'
    }
    if (!header['Authorization']) {
      header['Authorization'] = this.globalData.token
    }
    wx.request({
      url: obj.url,
      data: obj.data || {},
      method: obj.method || 'GET',
      header: header,
      success: function (res) {
        typeof obj.success == "function" && obj.success(res)
      },
      fail: obj.fail || function () { },
      complete: obj.complete || function () { }
    })
  },
  globalData:{
    state: -1,
    userInfo: null,
    logInfo: null,
    currentCuston: null,
    api_url: 'http://47.101.163.255:8090/',
    prod_url: 'http://47.101.163.255:8100/pms',
    img_url: 'https://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/',
    img_url2: 'https://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/',
    flag: true
  }
})