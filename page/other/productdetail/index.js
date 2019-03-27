// page/other/productdetail/index.js
const app = getApp();
Page({
  data: {
    img_url: app.globalData.img_url,
    productData: {},
    imgUrl: [],
    currentSwiper: 0,
    state: '',
    collect: app.globalData.img_url+'collect.png',
    collectNum: 0,
    ispromotion: true,
    property: {},
    select: '',
    buynum: 1,
    choose: false,
    badgeCount: 0,
    coupon: ['满999减150', '会员福利'],
    tab: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showToast({
    //   icon: 'loading',
    //   duration: 10000
    // })
    console.log(options.id);
    var id = options.id;
    this.getProductDetail(id, function(list,that){
      var productData = {
        id: list.id,
        name: list.name,
        image: [list.pictureUrl, list.skuVoList[0].pic, list.skuVoList[1].pic],
        price: { common: list.price, vip: (list.price * 0.95).toFixed(2) },
        property: list.productAttributeVoList,
        state: '正常',
        describe: list.title,
        sell: list.sale,
        download: 70,
        promotion: [{ title: '满减', content: '满199元减10元' }, { title: '会员特价', content: '成为会员可享受会员价' }]
      };
      var op = {};
      for (var i in productData.property) {
        op[i] = productData.property[i].value[0];
      }
      var images = productData.image;
      that.setData({
        autoplay: false,
        imgUrl: images,
        productData: productData,
        promotion: productData.promotion,
        state: productData.state,
        proChose: productData.property,
        property: op
      })
    })
  },
  getProductDetail: function(id, cb){
    var that = this;
    // app.request({
    //   url: 'http://47.101.163.255:8090/product/'+id,
    //   method: 'get',
    //   success: function (res) {
    //     console.log(res.data.data);
    //     var list = res.data.data;
    //     if(list)
    //       wx.setStorageSync('product', list)
    //     typeof cb == 'function' &&cb(list,that);
    //     wx.hideToast();
    //   },
    //   fail: function(){
        var list = wx.getStorageSync('product');
        if(list)
          typeof cb =="function"&&cb(list,that);
        else
        {
          wx.showModal({
            title: '提示',
            content: '网络连接失败',
          })
        }
    //     wx.hideToast();
    //   },
    // })
  },
  getString: function () {
    var sele = '';
    for (var i in this.data.property) {
      sele = sele + this.data.property[i] + '，';
    }
    sele = sele + this.data.buynum + '个';
    this.setData({
      select: sele
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var bought = wx.getStorageSync('bought');
    if(bought){
      this.setData({
        badgeCount: bought.length
      })
    }
    var that = this;
    this.getString();
    // var count = wx.getStorageInfoSync('badgeCount');
    // wx.setStorageSync(this.data.productData.name, '1');
    // if(count){
    //   this.setData({
    //     badgeCount: count
    //   })
    // }
  },
  swiperChange: function (e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  collectshop: function () {
    var img = [this.data.img_url+'collect.png', this.data.img_url+'collected.png'];
    this.setData({
      collect: img[(this.data.collectNum + 1) % 2],
      collectNum: this.data.collectNum + 1
    })
  },
  open_pro: function () {
    this.setData({
      choose: !this.data.choose
    })
  },
  changPeoperty: function ({ currentTarget: { dataset: chose } }) {
    var temp = this.data.property;
    temp[chose.id] = chose.cs;
    this.setData({
      property: temp
    });
    this.getString();
  },
  minusGoods: function(){
    this.setData({
      buynum: this.data.buynum - 1
    })
    this.getString();
  },
  addGoods: function(){
    var productInfo = this.data.productData;
    this.setData({
      buynum: this.data.buynum + 1
    })
    this.getString();
  },
  addCarts: function(){
    var bought = wx.getStorageSync('bought');
    var buy = this.data.productData;
    var flag = false;
    for(var i=0;i<bought.length;i++){
      if (buy.id == bought[i].productId)
      {
        flag = true;
        break;
      }
    }
    if(!flag){
      var newList = {
        "productId": buy.id,
        "title": buy.describe,
        "price": buy.price.vip,
        "mainPicUrl": buy.image[0],
        "total": this.data.buynum,
        "仓库": '北美',
        "logistic": {
          "顺风": '10.00',
          "申通": '8.00',
          "韵达": '6.00'
        },
        "property": this.data.select
      }
      bought.push(newList);
      wx.setStorageSync('bought', bought);
      var cot = this.data.badgeCount;
      console.log(cot);
      this.setData({
        badgeCount: cot + 1
      });
      wx.showToast({
        title: '加入购物车成功'
      })
    }
    else{
      wx.showToast({
        title: '已存在购物车中'
      })
    }
    // console.log(this.data.badgeCount);
    // var num = wx.getStorageInfoSync(this.data.productData.name);
    // if(!num){
    //   ths.setData({
    //     badgeCount: this.data.badgeCount + 1
    //   });
    //   // wx.setStorageSync(this.data.productData.name, this.data.buynum);
    //   // wx.setStorageSync('badgeCount', this.data.badgeCount);
    // }
  },
  gotobuyCar: function(){
    wx.navigateTo({
      url: '/page/other/buycar/index'
    })
  },
  buy: function(){
    var buy = wx.getStorageSync('bought');
    wx.setStorageSync('bought_copy', buy);
    var a =[];
    a.push(buy[1])
    wx.setStorageSync('buy', a);
    console.log(a);
    wx.navigateTo({
      url: '../buy/buy',
    })
  },
  changeTab: function ({ currentTarget: { dataset: { tab: Tab } } }) {
    this.setData({
      tab: Tab
    })
  }
})