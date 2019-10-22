// component/planet/plante.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // oxindex:{
    //   type:String,
    //   value:""
    // },
    rotate:{
      type:String,
      value:""
    },
    r:{
      type:Number,
      value:""
    },
    speed:{
      type:Number,
      value:''
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData: {},
    r:"",
    rotate:"1,1,1,170deg",
    speed:"1"
  },

  /**
   * 组件的方法列表
   */
  methods: {
  },
  ready:function(){
    
    var animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })

    
    var speed=this.data.speed;
    this.animation = animation

    // animation.scale(2, 2).rotate(45).step()

    this.setData({
      animationData: animation.export()
    })
    var n = 0;
    // var oyindex = 5;
    // var oxindex = 4;

    //连续动画需要添加定时器,所传参数每次+1就行
    setInterval(function() {
      // animation.translateY(-60).step()
      n = n + speed;

      this.animation.rotate(n).step()
      // if ((n / 180) % 2 == 1) {
      //   oyindex--
      //   oxindex++

      // }
      // else if ((n / 180) % 2 == 0) {
      //   oyindex++
      //   oxindex--
      // }

      this.setData({
        animationData: this.animation.export(),
        // oyindex: oyindex,
        // oxindex: oxindex
      })
    }.bind(this), 30)
  }
  
  

})
