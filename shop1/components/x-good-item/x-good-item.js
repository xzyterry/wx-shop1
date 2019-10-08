// components/x-good-item/x-good-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsitem: {
      type: Object,
      value: {}
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
    itemClick(e) {
      const pid = this.data.goodsitem.pid

      wx.navigateTo({
        url: '/pages/detail/detail?pid=' + pid,
      })
    }
  }
})
