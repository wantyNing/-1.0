const app = getApp();
const link = require('../../../utils/example.js')
Page({
  data: {
    tab: 0,
    fold: false,
    toView: 't1'
  },

  onLoad: function (options) {
    this.inputData();
  },
  creatCircle: function () {
    var list = this.data.coupon;
    // var i = 2;
    for (var i = 0; i < list.length; i++) {
      var cxt_arc = wx.createCanvasContext('canvan' + String(i));//创建并返回绘图上下文context对象。
      cxt_arc.setLineWidth(2);
      cxt_arc.setStrokeStyle('#f3bab8');
      cxt_arc.setLineCap('round')
      cxt_arc.beginPath();//开始一个新的路径
      cxt_arc.arc(36, 30, 28, 0.25 * Math.PI, Math.PI * 0.75, true);//设置一个原点(106,106)，半径为100的圆的路径到当前路径
      cxt_arc.stroke();//对当前路径进行描边

      cxt_arc.setLineWidth(4);
      cxt_arc.setStrokeStyle('#dd433a');
      cxt_arc.setLineCap('round')
      cxt_arc.beginPath();//开始一个新的路径
      cxt_arc.arc(36, 30, 28, Math.PI * 0.25 - 2 * Math.PI * 0.75 * (1 - list[i].num), Math.PI * 0.75, true);
      cxt_arc.stroke();//对当前路径进行描边
      cxt_arc.draw()
    }
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  inputData: function () {
    var discountList = link.getDiscount();
    var coupon = link.getCoupon();
    this.setData({
      discountList: discountList,
      list: coupon,
      coupon: coupon
    })
    this.creatCircle();
  },
  changetab: function ({ currentTarget: { dataset: { type: type } } }) {
    var list = this.data.list;
    var coupon = [];
    if (type == 0)
      coupon = list;
    else {
      for (var i = 0; i < list.length; i++) {
        if (list[i].cupId == type)
          coupon.push(list[i]);
      }
    }
    this.setData({
      tab: type,
      toView: this.data.discountList[type].id,
      coupon: coupon
    })
    this.creatCircle();
  },
  changeFold: function () {
    this.setData({
      fold: !this.data.fold
    })
  },
  getCoupon: function ({ currentTarget: { dataset: { index: index } } }) {
    var coupon = this.data.coupon;
    var list = this.data.list;
    coupon[index].state = 0;
    var id = coupon[index].goodId;
    for (var i = 0; i < list.length; i++) {
      if (list[i].goodId == id) {
        list[i].state = 0;
        break;
      }
    }
    this.setData({
      coupon: coupon,
      list: list
    })
  },
  gotoSearch: function({currentTarget:{dataset:{text:text}}}){
    wx.navigateTo({
      url: '../search/index?name=' + text,
    })
  }
})