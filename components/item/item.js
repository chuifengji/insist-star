// component/item/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
name:{
  type:String,
  value:''
},
indexy:{
  type:String,
  value:''
},
    indexm: {
      type: String,
      value: ''
    },
    indexdmaster: {
      type: String,
      value: ''
    },
    times: {
      type: String,
      value: ''
    },
    begintimeY: {
      type: String,
      value: ''
    },
    begintimeM: {
      type: String,
      value: ''
    },
    begintimeR: {
      type: String,
      value: ''
    },
    days:{
      type:String,
      value:''
    },
    status:{
      type:Boolean,
      value:'',
    },
    index:{
type:Number,
value:0
    }
  
  },

  /**
   * 组件的初始数据
   */
  data: {
    status: true,
    stars: [],
 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    save: function () {
      wx.setStorageSync('stars', this.data.stars);
    },
    touchS(e) {
      // 获得起始坐标
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
    },
    touchM(e) {
      // 获得当前坐标
      this.currentX = e.touches[0].clientX;
      this.currentY = e.touches[0].clientY;
      const x = this.startX - this.currentX; //横向移动距离
      const y = Math.abs(this.startY - this.currentY); //纵向移动距离，若向左移动有点倾斜也可以接受
      if (x > 6 && y < 110) {
        //向左滑是显示删除
        this.setData({
          status: false
        })
      } else if (x < -6 && y < 110) {
        //向右滑
        this.setData({
          status: true
        })

      }
      



      

    },
    removestar: function () {
      this.triggerEvent('itemremove');
    },
    aaa: function () {
      this.triggerEvent('daka')

    }
  }
})
