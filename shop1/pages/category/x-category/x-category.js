// pages/category/x-category/x-category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories: {
      type: Array,
      value: [{
        cname: "分类1"
      }, {
        cname: "分类2"
      }, {
        cname: "分类3"
      }, {
        cname: "分类4"
      }, {
        cname: "分类1"
      }, {
        cname: "分类2"
      }, {
        cname: "分类3"
      }, {
        cname: "分类4"
      }, {
        cname: "分类1"
      }, {
        cname: "分类2"
      }, {
        cname: "分类3"
      }, {
        cname: "分类4"
      }, {
        cname: "分类1"
      }, {
        cname: "分类2"
      }, {
        cname: "分类3"
      }, {
        cname: "分类4"
      }, {
        cname: "分类1"
      }, {
        cname: "分类2"
      }, {
        cname: "分类3"
      }, {
        cname: "分类4"
      }, ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(e) {
      // 1.获取当前分类坐标
      const currentIndex = e.currentTarget.dataset.index;
      this.setData({
        currentIndex
      });

      // 2.分类传递给content,触发请求
      this.triggerEvent('contentFlush', {
        currentIndex
      }, {})
    }
  }
})