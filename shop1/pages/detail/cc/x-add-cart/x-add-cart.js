// pages/detail/cc/x-add-cart/x-add-cart.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    pid: Number
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
    
    addCart(e){
      console.log(e.currentTarget.dataset.pid)
    }
  }
})
