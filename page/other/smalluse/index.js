var app = getApp();
const example = require('../../../utils/example.js');

Page({
  data: {
    img_url: app.globalData.img_url,
    tab: 0,
    style:0
  },
  onLoad: function (options) {
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
    var list = example.prolist();
    var promo = example.promotion();
    this.setData({
      list: list,
      promo: promo
    })
  },
  changetab: function ({ currentTarget: { dataset: {tab: tab} } }){
    var promo = example.promotion();
    var newpromo = [];
    if (tab == 0)
      newpromo = promo;
    else {
      for (var i = 0; i < promo.length; i++) {
        if (promo[i].id == tab)
          newpromo.push(promo[i]);
      }
    }
    this.setData({
      tab: tab,
      style: 0,
      promo: newpromo,
      beifen: newpromo
    })

  },
  changestyle: function({ currentTarget: { dataset: { id: id } } }){
    var beifen = this.data.beifen;
    var newpro = [];
    if(id==0)
      newpro=beifen;
    else{
      for(var i=0;i<beifen.length;i++){
        if(beifen[i].simple==id)
          newpro.push(beifen[i]);
      }
    }
    this.setData({
      style: id,
      promo: newpro
    })
  },
  gotoSearch: function(){
    
  }
})