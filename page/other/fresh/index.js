var example = require('../../../utils/example.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
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

  init: function () {
    var paper = [
      { brandId: 1, goodId: 1, desc: '限小米手机满200使用，可叠加普通优惠券使用', value: 20, state: 1, text: '一个月' },
      { brandId: 1, goodId: 2, desc: '限荣耀V10 8+128GB版可用', value: 10, state: 1, text: '两个月' },
      { brandId: 2, goodId: 3, desc: '限森马服饰满100可用，不可叠加普通优惠券', value: 60, state: 1, text: '一个月' },
      { brandId: 2, goodId: 4, desc: '全场满1000可用，可叠加普通优惠券', value: 300, state: 1, text: '一个月' },
    ];
    var hot_goods = wx.getStorageSync('productList');
    console.log(hot_goods);
    this.setData({
      paper: paper,
      hot_goods: hot_goods
    })
  },
  getcoupon: function(res){
    var index = res.currentTarget.dataset.index;
    var paper = this.data.paper;
    paper[index].state = 2;
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 1500
    })
    this.setData({
      paper:paper
    })
  },
  gotoSearch: function(){
    wx.navigateTo({
      url: '/page/other/search/index?name='+'小米8'
    })
  }
})