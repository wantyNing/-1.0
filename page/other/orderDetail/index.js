// page/other/orderDetail/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url: app.globalData.img_url
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = wx.getStorageSync('orderDetail');
    this.setData({
      orderList: list,
      tab: list.state
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var list = this.data.orderList;
    var price = Number(list.price)*Number(list.total) + Number(list.order.deliverPrice);
    this.setData({
      price: String(price.toFixed(2))
    })
  }
})