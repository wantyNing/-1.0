const app = getApp();
const link = require('../../../utils/example.js')
Page({
  data: {
    tab: 0,
    orderlist: [],
    showorderlist: [],
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
    var orderlist = link.orderlistmanager();
    this.setData({
      orderlist: orderlist
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
    var list = this.data.orderlist;
    var showorderlist = [];
    if (tap == 0)
      showorderlist = list;
    else {
      for (var i = 0; i < list.length; i++) {
        if (list[i].state == tap - 1)
          showorderlist.push(list[i]);
      }
    }
    this.setData({
      showorderlist: showorderlist
    })
  },
  gotoOrderDetail: function({currentTarget:{dataset:{list:list}}}){
    wx.setStorageSync('orderDetail', list)
    wx.navigateTo({
      url: '/page/other/orderDetail/index',
    })
  }
})