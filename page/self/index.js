var app = getApp();
const link = require('../../utils/example.js');
Page({
  data: {
    state: 0,
    head_portrait: 'https://mall-imgs.oss-cn-hangzhou.aliyuncs.com/wechat/account.png',
    state_text: '未登录',
    img_url: app.globalData.img_url
  },
  onLoad: function (options){
    wx.setNavigationBarTitle({
      title: '个人中心'
    });
  },
  onShow: function () {
    if(1){
      this.setData({
        state: 1,
        head_portrait: 'http://mall-imgs.oss-cn-hangzhou.aliyuncs.com/img/logo.png',
        state_text : "wanty"
      })
    }   
    var list = link.managerlist();
    var order = link.orderlistmanager();
    var numList = {
      'audit': 0,
      'sell': 0,
      'out': 0,
      'stockout': 0
    };
    var numOrder = {
      'creat':0,
      'deal':0,
      'deliver':0,
      'serice':0
    }

    for(var i=0;i<list.length;i++){
      if(list[i].state==0)
        numList.audit +=1;
      else if(list[i].state ==1)
        numList.sell +=1;
      else if(list[i].state == 2)
        numList.out += 1;
      else
        numList.stockout+=1;
    }
    for (var i = 0; i < list.length; i++) {
      if (list[i].state == 0)
        numOrder.creat += 1;
      else if (list[i].state == 1)
        numOrder.deal += 1;
      else if (list[i].state == 2)
        numOrder.deliver += 1;
      else
        numOrder.serice += 1;
    }
    this.setData({
      productNum: numList,
      orderNum: numOrder
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  gotoGoods: function ({ currentTarget: { dataset: { index: index } } }) {
    wx.navigateTo({
      url: '../other/productManager/index?tab='+index,
    })
  },
  gotoOrder: function ({ currentTarget: { dataset: { index: index } } }) {
    wx.navigateTo({
      url: '../other/orderManager/index?tab='+index,
    })
  },
  login: function(){
    if(app.globalData.state == -1){
      wx.navigateTo({
        url: '../other/login/index',
      })
    }
  },
  collect: function(){

  },
  wallet: function(){

  },
  downloaded: function(){

  },
  remind: function(){

  }
})