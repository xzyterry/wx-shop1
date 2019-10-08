// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  contentFlush(e) {
    // 1.获取分类
    const currentIndex = e.detail.currentIndex;

    // 2.请求数据
    console.log("send: " + currentIndex);
  }
})