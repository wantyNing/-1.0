const app = getApp();
const link = require('../../../utils/example.js')
Page({
  data: {
    goodsNum: 3,
    api_url: app.globalData.prod + '/product/list',
    totalMoney: '0.00',
    totalCount: 0,
    selectAll: false,
    isEdit: false,
    img_url: app.globalData.img_url
  },
  onLoad: function (options) {
  },
  findlist: function () {
    // wx.showToast({
    //   title: '加载中',
    //   icon: 'loading',
    //   duration: 10000
    // });
    var that = this;
    this.getGoods(function (buylist) {
      wx.setStorageSync('bought', buylist);
      buylist.forEach(item => { item.select = false });
      that.setData({
        buylist: buylist,
        goodsNum: buylist.length
      });
      that.data.buylist.length > 0 ?
        wx.setTabBarBadge({ index: 2, text: String(that.data.buylist.length) }) :
        wx.removeTabBarBadge({ index: 2 });
    });
  },
  getGoods: function (cb) {
    var url = this.data.api_url;
    // wx.request({
    //   url: url,
    //   method: "get",
    //   success: function(res){
    //     typeof cb == "function" && cb(res.data);
    //     console.log(res.data);
    //     wx.hideToast();
    //  },
    //   fail: function(){
    //     typeof cb == "function"&&cb(null);
    //     wx.hideToast();
    //   }
    // })
    // wx.removeStorageSync('bought');
    var bought = wx.getStorageSync('bought');
    if (bought)
      typeof cb == "function" && cb(bought);
    else
      // typeof cb == "function" && cb(link.buycar());
      typeof cb == "function" && cb([]);
  },
  reset: function () {
    var totalMoney = Number(this.data.totalMoney),
      totalCount = this.data.totalCount,
      buylist = this.data.buylist,
      totalMoney = 0;
    totalCount = 0;
    for (var i = 0; i < buylist.length; i++) {
      if (buylist[i].select) {
        totalMoney += Number(buylist[i].price * buylist[i].total);
        totalCount++;
      }
    }
    this.setData({
      buylist,
      totalCount,
      totalMoney: String(totalMoney.toFixed(2))
    });
  },
  edit: function () {
    this.reset();
    this.setData({
      isEdit: !this.data.isEdit
    })
  },
  gotoProducrDetail: function ({ currentTarget: { dataset: { id } } }) {
    wx.navigateTo({
      url: '/page/other/productdetail/index?id=' + id,
    });
  },
  selectProduct: function ({ currentTarget: { dataset: { index } } }) {
    var totalMoney = Number(this.data.totalMoney),
      totalCount = this.data.totalCount,
      buylist = this.data.buylist,
      selectAll = this.data.selectAll;
    buylist[index].select = !buylist[index].select;
    if (buylist[index].select) {
      totalMoney += Number(buylist[index].price * buylist[index].total);
      totalCount++;
    } else {
      totalMoney -= Number(buylist[index].price * buylist[index].total);
      totalCount--;
      selectAll = false;
    }
    this.setData({
      buylist,
      totalCount,
      selectAll,
      totalMoney: String(totalMoney.toFixed(2))
    });
  },
  selectAll() {
    const buylist = this.data.buylist
    let totalMoney = 0 // 合计初始化为0
    let totalCount = 0 // 结算个数初始化为0
    let selectAll = this.data.selectAll

    selectAll = !selectAll // 全选按钮置反

    buylist.forEach(cart => {
      // 设置选中或不选中状态 每个商品的选中状态和全选按钮一致
      cart.select = selectAll
      // 计算总金额和商品个数
      if (cart.select) { // 如果选中计算
        totalMoney += Number(cart.price) * cart.total
        totalCount++
      } else {// 全不选中置为0
        totalMoney = 0
        totalCount = 0
      }

    })
    // 更新data
    this.setData({
      buylist,
      totalMoney: String(totalMoney.toFixed(2)),
      totalCount,
      selectAll
    })
  },
  getCartCount({ currentTarget: { dataset: { index } }, detail }) {
    this.data.buylist[index].total = detail;
    this.setData({
      buylist: this.data.buylist
    })
  },
  addNums({ currentTarget: { dataset: { index } } }) {
    let totalMoney = Number(this.data.totalMoney),
      buylist = this.data.buylist;
    if (buylist[index].select) {
      totalMoney += Number(buylist[index].price);
    }
    this.setData({
      buylist,
      totalMoney: String(totalMoney.toFixed(2))
    })
  },
  subNums({ currentTarget: { dataset: { index } } }) {
    let totalMoney = Number(this.data.totalMoney),
      buylist = this.data.buylist;
    if (buylist[index].select) {
      totalMoney -= Number(buylist[index].price);
    }
    this.setData({
      buylist,
      totalMoney: String(totalMoney.toFixed(2))
    })
  },
  settle: function () {
    var list = [],
      buylist = this.data.buylist;
    for (var i = buylist.length - 1; i >= 0; i--) {
      if (buylist[i].select) {
        list.push(buylist[i]);
        buylist.splice(i, 1);
      }
    }
    wx.setStorageSync('buy', list);
    wx.setStorageSync('bought_copy', buylist);
    if (list.length > 0) {
      wx.navigateTo({
        url: '/page/other/buy/buy'
      })
    }
  },
  del: function () {
    var buylist = this.data.buylist;
    let totalMoney = Number(this.data.totalMoney);
    let totalCount = this.data.totalCount;
    for (var i = buylist.length - 1; i >= 0; i--) {
      if (buylist[i].select) {
        totalMoney -= Number(buylist[i].price * buylist[i].total);
        totalCount--;
        buylist.splice(i, 1);
      }
    }
    wx.showModal({
      title: '提示',
      content: '删除成功',
    })
    wx.setStorageSync('bought', buylist);
    this.setData({
      buylist: buylist,
      totalCount: totalCount,
      totalMoney: String(totalMoney.toFixed)
    })
    buylist.length > 0 ?
      wx.setTabBarBadge({
        index: 2,
        text: String(buylist.length)
      }) : wx.removeTabBarBadge({
        index: 2,
      })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.findlist();
    this.setData({
      totalCount: 0,
      totalMoney: '0.00',
      selectAll: false,
      isEdit: false
    })
  }
})