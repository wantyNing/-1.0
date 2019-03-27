// pages/class/class.js
const app = getApp();
const link = require('../../utils/example.js')
Page({
  data: {
    navLeftItems: [],  // 左侧导航
    navRightItems: [], // 右侧产品
    curIndex: 0,
    img_url: app.globalData.img_url
  },
  onLoad: function (options) {
    var img = this.data.img_url;
    // 显示loading
   // link.showLoading()
   var that = this;
    // 请求分类数据
    // link.ajax({ url: `${app.globalData.api_url}/api/profiles/productions` }, function({ data: res }){
    //   that.setData({
    //     navLeftItems: res.navLeftItems,
    //     navRightItems: res.navRightItems
    //   })

    //   // 隐藏loading
    //   // link.hideLoading()
    // })
    var leftItem = ['手机数码','男装女装','家居家纺','户外运动','汽车用品','灯光照明',
      '玩具乐器', '鞋靴箱包', '美容健康', '珠宝饰品', '母婴童装'];
    var rightItem = link.classfily();
    this.setData({
      navLeftItems: leftItem,
      navRightItems: rightItem
    })
  },
  onShow: function(){
  },
  // 改变tab栏
  currentTabs({ currentTarget: { dataset: { index: item } } }) {
    this.setData({
      curIndex: item
    })
  },
  // 去往列表页
  gotoProductDetail({ currentTarget: { dataset: { product: name } } }) {
    this.search({"text":name});
  },
  search: function (res){
    if(res.text){
      wx.navigateTo({
        url: '../other/search/index?name='+res.text,
      })
    }
    else{
      wx.navigateTo({
        url: '../other/search/index',
      })
    }
  }
})