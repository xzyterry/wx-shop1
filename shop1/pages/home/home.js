// pages/home/home.js

import {
  getData
} from '../../service/home.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [{
      image: "../../assets/images/girl1.jpg"
    }, {
      image: "../../assets/images/girl2.jpg"
    }, {
      image: "../../assets/images/girl3.jpg"
    }, {
      image: "../../assets/images/girl4.jpg"
    }, ],
    recommands: [{
      title: "标题",
      image: "/assets/images/head.jpg",
    }, {
      title: "标题",
      image: "/assets/images/head.jpg",
    }, {
      title: "标题",
      image: "/assets/images/head.jpg",
    }, {
      title: "标题",
      image: "/assets/images/head.jpg",
    }, ],
   
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    getData().then(res => {

    })
  },
 
})