// page/home/index.js
const app = getApp();
const example = require('../../utils/example.js');
Page({
  data: {
    indicatorDots: false,
    newGoods: [],
    imgUrls:[],
    hidden: true,
    hidden_end: false,
    isRuleTrue: app.globalData.flag,
    count: 0,
    hint: true,
    currentSwiper: 0,
    img_url: app.globalData.img_url,
    img_url2: app.globalData.img_url2
  },
  onLoad: function (options) {
    var img = this.data.img_url;
    var image = example.slidehome();
    this.setData({
      imgUrls: image,
      image_le: { url: img + 'brand2.png', id: 0},
      image_ri_1: { url: img + 'brand1.png', id:1},
      image_ri_2: { url: img + 'brand1.png', id:2}
    });
    // var images= example.goods();
    var btn = wx.getStorageSync('btn');
    btn = btn || example.smallus();
    wx.setStorageSync('btn', btn);
    this.setData({
      btn: btn
    });
    this.onGetList();
  },
  onGetList: function() {
    // wx.showToast({
    //   icon: 'loading',
    //   duration: 10000
    // })
    var that = this;
    // app.request({
    //   url: 'http://47.101.163.255:8082/product/list',
    //   method: 'get',
    //   success: function(res){
    //     var list = res.data;
    //     if(list)
    //       wx.setStorageSync('productList', list);
    //     var newList = list.slice(0,6);
    //     that.setData({
    //       list: list,
    //       hot_Goods: list.slice(6,16),
    //       newGoods: newList
    //     })
    //     wx.hideToast();
    //   },
    //   fail: function(){
        var list = wx.getStorageSync('productList');
        // console.log(list);
        if(list){
          var newList = list.slice(0, 6);
          that.setData({
            list: list,
            hot_Goods: list.slice(6, 16),
            newGoods: newList
          })
        }
        else{
          wx.showModal({
            title: '提示',
            content: '网络错误'
          })
        }
        wx.hideToast();
    //   },
    // })
  },
  onReady: function () {
  },
  onShow: function(){
  },
  search: function(){
    wx.navigateTo({
      url: '../other/search/index',
    })
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  onReachBottom: function () {
    var that = this;
    if(this.data.count > 3){
      this.setData({
        hint: false
      });
      return;
    }
    this.setData({
      hidden: false
    });
    setTimeout(function () {
      that.setData({
        hidden: true
      });
      var image = that.data.hot_Goods;
      var list = that.data.list;
      var len = image.length;
      for (var i = 0; i < list.length; i++) {
        image[len++] = image[i];
      }
      that.setData({
        hot_Goods: image,
        count: that.data.count+1,
        hidden_end: that.data.count <3? false: true
      });
    }, 500);
  },
  blok: function ({ currentTarget: { dataset: { type: type } } }){
    if(type==4)
      wx.navigateTo({
        url: '/page/other/smalluse/index'
      });
    else if(type==5)
      wx.navigateTo({
        url: '/page/other/discount/index',
      });
    else if(type==8){
      wx.navigateTo({
        url: '/page/other/fresh/index',
      })
    }
  },
  disp_click: function(res){
    console.log(res.currentTarget.dataset.id);
  },
  brand_click: function(res){
    console.log(res.currentTarget.dataset.id);
  },
  more: function(res){
    console.log(res.currentTarget.dataset.type);
  },
  gotoProductDetail: function({currentTarget:{dataset:{id: index}}}) {
    wx.navigateTo({
      url: '../other/productdetail/index?id='+index,
    });
  },
  hideRule: function () {
    app.globalData.flag = false;
    this.setData({
      isRuleTrue: false
    })
  },
  gotoFresh: function() {
    if(app.globalData.userInfo){
      app.globalData.flag = false;
      wx.navigateTo({
        url: '/page/other/fresh/index'
      })
      this.setData({
        isRuleTrue: false
      })
    }
    else{
      wx.navigateTo({
        url: '/page/other/login/index'
      })
    }
  }
})