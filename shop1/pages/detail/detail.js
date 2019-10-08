// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid:0,
    product: {
      images: [{
        image: "http://tuchong.pstatp.com/2661362/f/380215094.jpg"
      }, {
        image: "http://tuchong.pstatp.com/2661362/f/486841973.jpg"
      }, {
        image: "http://tuchong.pstatp.com/2661362/f/365403471.jpg"
      }, {
        image: "http://tuchong.pstatp.com/2661362/f/587636127.jpg"
      }, ],
      title: "2018年最新款",
      price: 300
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.pid)
    this.setData({
      pid: options.pid
    })
  },
  
})