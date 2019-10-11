// pages/cart/cc/x-cart-item/x-cart-item.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    },
    index: {
      type: Number
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

    onCheckClick(e) {
      // 1.查找 
      const item = app.globalData.cartList.find(item => item.pid == this.properties.item.pid)
      item.isChecked = !item.isChecked

      // 2.获取index
      const index = e.currentTarget.dataset.index

      // 3.通过全局回调修改checkbox
      app.changeGoodState(index, item)
    },
  }
})