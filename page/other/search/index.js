const example = require('../../../utils/example.js');
const app = getApp();
Page({
  data: {
    result: [],
    name : '',
    hotlist:[],
    img_url: app.globalData.img_url,
    isSearch: false,
    choiceflag1: true,
    choiceflag2: true,
    goodsList: '',
    tab: 0
  },
  onLoad: function(res){
    if(res.name){
      this.setData({
        name: res.name
      })
      this.getGoods();
    }
  },
  onShow: function(){
    wx.setNavigationBarTitle({
      title: '搜索'
    })
    var hotlist = ['手机','女鞋','男装','男鞋',
     '连衣裙','手表','女鞋','零食','T恤'];
     this.setData({
       hotlist: hotlist,
       doubleList: true
     })
  },
  loadGoods: function(){
    var goods = ['男装', '男装外套', '男装羽绒服', '男装裤子', '男装毛衣', '男装T恤长袖','男装打底衫','男装卫衣', '女装', '女装外套', '女装连衣裙', '女装上衣','女装空调衫','女装打底衫','女装套装','女装冬衣','小米','小米8'];
    return goods;
  },
  searchGoods: function(e){
    var name = e.detail.value;
    var result = new Array();
    var goods = this.loadGoods();
    if (name != '') {
      for (var i = 0; i < goods.length; i++) {
        var good = goods[i];
        if (good.indexOf(name) > -1) {
          result.push(good);
        }
      }
    }
    this.setData({
      result: result,
      name: name
    })
  },
  resetSearch: function(){
    var result = new Array();
    this.setData({
      result: result,
      name: ''
    })
  },
  appear: function(){
    this.setData({
      isSearch: false
    })
  },
  changeS: function(){
    var list = this.data.hotlist;
    var len = list.length;
    for (var i = 0; i < len; i++) {
      var end = len - 1;
      var index = (Math.random() * (end + 1)) >> 0;
      var t = list[end];
      list[end] = list[index];
      list[index] = t;
    }
    this.setData({
      hotlist: list
    })
  },
  changeShow: function(){
    this.setData({
      doubleList: !this.data.doubleList
    })
  },
  composite: function({currentTarget:{dataset:{item: item}}}){
    if(item==0){
      this.setData({
        choiceflag1: !this.data.choiceflag1,
        choiceflag2: true
      })
    }
    else if(item==1){
      this.setData({
        choiceflag1: true,
        choiceflag2: true,
        tab: item
      })
    }
    else{
      this.setData({
        choiceflag1: true,
        choiceflag2: !this.data.choiceflag2
      })
    }
  },
  setValue: function(e){
    var name = e.currentTarget.dataset.gid;
    this.setData({
      name: name
    })
    this.getGoods();
  },
  getGoods: function(){
    if(this.data.name){
      console.log(this.data.name);
      this.setData({
        isSearch: !this.data.isSearch,
        goodsList: example.searchlist()
      })
    }
  },
  godetail: function ({ currentTarget: { dataset: { id: index } } }){
    console.log(index);
    wx.navigateTo({
      url: '/page/other/productdetail/index?id=' + index,
    });
  }
})