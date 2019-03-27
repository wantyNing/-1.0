const app = getApp();
Page({
  data: {
    name: '',
    pass: '',
    see: true,
    img_url: app.globalData.img_url
  },
  onLoad: function(){
    this.setData({
      seeUrl: this.data.img_url+'eyeclose.png'
    })
  },
  inputN: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  inputP: function(e){
    this.setData({
      pass: e.detail.value
    })
  },
  resetUse: function(){
    this.setData({
      name: ''
    })
  },
  openPass: function(){
    var see = !this.data.see;
    var url = [this.data.img_url+'eyeclose.png', this.data.img_url+'eyeopen.png'];
    this.setData({
      see: see,
      seeUrl: url[see?0:1]
    });
  },
  formSubmit(e){
    var use = e.detail.value.name;
    var pass = e.detail.value.pass;
    var isRem = !e.detail.value.checkbox? false : true;     
    if(!use||!pass){
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '用户名和密码不可为空',
        success(res) {
        }
      })
    }
    else{
      app.authRequest({'username':use, 'password':pass, 'isRem': isRem}, function(flag){
        if (flag == true) {
          wx.showToast({
            title: '登录成功',
            icon: 'success',
            duration: 10000
          });
          setTimeout(function(){
            wx.hideToast();
            wx.navigateBack({
              delta: 1
            });
          },1500);
        }
        else {
          if (flag == false) {
            wx.showModal({
              title: '提示',
              showCancel: false,
              content: '用户名或密码错误',
              success(res) {
              }
            })
            this.setData({
              name: '',
              pass: ''
            })
          }
        }
      });
    }
  },
  deal: function(flag){
  }
})