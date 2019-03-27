// components/introduce/introduce.js
var list = wx.getStorageSync('product').data;
Component({
  properties: {
    currentTab: {
      type: Number,
      value: 0
    },
    introList: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    img_url: 'https://mall-imgs.oss-cn-hangzhou.aliyuncs.com/product/',
    list: list
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
