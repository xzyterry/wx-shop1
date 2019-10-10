// pages/cart/cart.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelectAll: false,
    totalPrice: 0,
    totalCount: 0,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1.加载数据全局购物车列表 更新当前列表 
    this.setData({
      list: app.globalData.cartList
    })

    // 2.设置更新当前列表的 全局回调函数
    app.addCartCallback = () => {
      this.setData({
        list: app.globalData.cartList
      })
      this.countData()
    }

    // 3.设置某个商品的全局回调函数
    app.changeGoodState = (index, goods) => {
      this.setData({
        [`list[${index}]`]: goods
      })

      // 2.修改全部选中的状态
      const selectAll = !this.data.list.find(item => !item.isChecked)
      this.setData({
        isSelectAll: selectAll
      })
      this.countData()
    }

  },
  onShow() {
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.list.length})`,
    })
  },
  
  // 点击全选按钮
  onSelectAll() {
    this.data.list.forEach(item => {
      item.isChecked = !this.data.isSelectAll;
    })
    this.setData({
      list: this.data.list
    })
    this.setData({
      isSelectAll: !this.data.isSelectAll
    })

    this.countData()
  },

  // 重新计算总计和数量
  countData() {
    let totalPrice = 0;
    let totalCount = 0;

    // 遍历数据 统计选中的个数以及总计
    for (let item of this.data.list) {
      if (item.isChecked) {
        totalCount++
        totalPrice += item.price * item.count
      }
    }

    // setData
    this.setData({
      totalCount,
      totalPrice
    })
  }

})