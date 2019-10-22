// component/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    
    content: {
      type: String,
      value: '',
    },
    id: {
      type: Number,
      value: 0
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    lots:[]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
      


    delete: function () {
      this.triggerEvent('lotdelete');
    },



    
    
  }
})
