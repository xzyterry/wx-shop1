// components/x-tab-control/x-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: [{
        title: "分类1"
      }, {
        title: "分类2"
      }, {
        title: "分类3"
      }, ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onItemClick(e) {
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      console.log(this.data.currentIndex)
    }
  }
})