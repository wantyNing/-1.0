const app = getApp();
const link = require('../../../utils/example.js')
Page({
  data: {
    tab: 0,
    prolist: [],
    showprolist: [],
    img_url: app.globalData.img_url
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tab: options.tab
    })
    this.getPro();
    this.showlist();
  },

  getPro: function () {
    var prolist = link.managerlist();
    this.setData({
      prolist: prolist
    })
  },

  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  click: function ({ currentTarget: { dataset: { tap: tap } } }) {
    this.setData({
      tab: tap
    })
    this.showlist();
  },
  showlist: function () {
    var tap = this.data.tab;
    var list = this.data.prolist;
    var showlist = [];
    if (tap == 0)
      showlist = list;
    else {
      for (var i = 0; i < list.length; i++) {
        if (list[i].state == tap - 1)
          showlist.push(list[i]);
      }
    }
    this.setData({
      showprolist: showlist
    })
  },
  gotoGoodsDetail: function({currentTarget:{dataset:{id:id}}}){
    wx.navigateTo({
      url: '/page/other/productdetail/index?id=' + id,
    })
  }
})