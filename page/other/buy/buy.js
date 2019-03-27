const app = getApp();
Page({
  data: {
    name: 'lee',
    phone: '13355588899',
    address: '中国 广东省 广州市 海珠区 新港中路397号 T.I.T创意园B4',
    buylist: {},
    bargin: 0.9,
    img_url: app.globalData.img_url,
    isPay: false,
    isShowPopup: false,
    userInfo: {}
  },
  onLoad: function (options) {
    var list = wx.getStorageSync('buy');
    // console.log(list);
    this.initInfo(list);
  },
  onShow: function () {
    if(this.data.buylist.length==0){
      wx.removeStorageSync('buy');
      wx.navigateBack({
        delta: 1,
      })
    }
    this.countCost();
  },
  initInfo: function(buylist){
    buylist.forEach(item => { item.logisticChose = Object.keys(item.logistic)[0] });
    this.setData({
      buylist: buylist
    })
  },
  countCost: function () {
    var buylist = this.data.buylist;
    var costAll = 0, costDeal = 0, insure = 0, logistic = 0;
    for (var i = 0; i < buylist.length; i++) {
      costAll += Number(buylist[i].price) * buylist[i].total;
      costDeal += 2;
      insure += 2;
      logistic += Number(buylist[i].logistic[buylist[i].logisticChose]);
    }
    this.setData({
      costAll: String(costAll.toFixed(2)),
      costDeal: String(costDeal.toFixed(2)),
      insure: String(insure.toFixed(2)),
      logistic: String(logistic.toFixed(2)),
      cost: (costAll * this.data.bargin + costDeal + insure + logistic).toFixed(2),
      bargincost: (costAll * (1 - this.data.bargin)).toFixed(2)
    })
  },
  pay: function () {
    var that = this;
    wx.showToast({
      icon: 'loading',
      duration: 10000
    })
    setTimeout(function () {
      wx.hideToast();
      var price = 20;
      var info = { name: '海狸商城平台', price: String(that.data.cost) };
      that.setData({
        userInfo: info,
        isShowPopup: !that.data.isShowPopup
      })
    }
      , 1000)
  },
  gotoFinish: function () {
    var bought = wx.getStorageSync("bought_copy");
    wx.setStorageSync('bought', bought);
    this.setData({
      isShowPopup: false,
      buylist: []
    })
    wx.navigateTo({
      url: '../paysuccess/index?price='+String(this.data.cost)
    })
  },
  back: function(){
    this.setData({
      isShowPopup:false
    })
  }
})