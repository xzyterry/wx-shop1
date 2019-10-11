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
    list: [],
    delBtnWidth: 150 //删除按钮宽度单位（rpx）
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
  },

  touchS(e) {
    //判断是否只有一个触摸点
    if (e.touches.length == 1) {
      this.setData({
        //记录触摸起始位置的X坐标
        startX: e.touches[0].clientX
      });
    }
  },
  touchM: function (e) {

    var that = this
    if (e.touches.length == 1) {
      //记录触摸点位置的X坐标
      var moveX = e.touches[0].clientX;
      //计算手指起始点的X坐标与当前触摸点的X坐标的差值
      var disX = that.data.startX - moveX;
      //delBtnWidth 为右侧按钮区域的宽度
      var delBtnWidth = that.data.delBtnWidth;
      var txtStyle = "";
      if (disX == 0 || disX < 0) {//如果移动距离小于等于0，文本层位置不变
        txtStyle = "left:0rpx";
      } else if (disX > 0) {//移动距离大于0，文本层left值等于手指移动距离
        txtStyle = "left:-" + disX + "rpx";
        if (disX >= delBtnWidth) {
          //控制手指移动距离最大值为删除按钮的宽度
          txtStyle = "left:-" + delBtnWidth + "rpx";
        }
      }
      //获取手指触摸的是哪一个item
      var index = e.currentTarget.dataset.index;
      var list = that.data.list;
      //将拼接好的样式设置到当前item中
      list[index].txtStyle = txtStyle;
      //更新列表的状态
      this.setData({
        list: list
      });
      console.log(list[index].txtStyle)
    }
  },
})