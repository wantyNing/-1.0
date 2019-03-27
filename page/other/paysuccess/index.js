// page/other/paysuccess/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: 40,
    price: 4000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showToast({
      title: '支付成功',
      icon: 'success',
      duration: 2000
    })
    var price = options.price;
    this.setData({
      price:price
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

  },
  goBack: function(){
    wx.navigateBack({
      delta: 2,
    })
  }
})