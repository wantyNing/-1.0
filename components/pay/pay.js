Component({
  properties: {
    isShowPopup: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scan() {
      var that = this;
      wx.showToast({
        icon: 'loading',
        duration: 10000
      })
      setTimeout(function () {
        wx.hideToast();
        that.setData({
          isShowPopup: false
        })
        that.triggerEvent('finishPay')
      }, 2000)
    },
    back() {
      this.triggerEvent('back')
      this.setData({
        isShowPopup: false
      })
    }
  }
})
