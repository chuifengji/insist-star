const App = getApp();
var timer = '';
var times = '';
var timem = '';
var timeh = '';
var timeflagh = '';
var timeflagm = '';
var timeflags = '';

 Page({

  /**
   * 页面的初始数据
   */
   data: {


    

    hours: '0' + 0,  
    minute: '0' + 0,   
    second: '0' + 0,
    flag:1  ,
     animatestrate1:'',
     height: 'App.globalData.height',
     navtop: 'App.globalData.navtop',
 stars:[],
 indexx:{
type:Number,
value:0 
 },
 jindu:{
   type: Number,
   value: 0 ,
   
 },
   bt1:0,
   bt2:0,
   et1:0,
   et2:0,
     bt1i: 0,
     bt2i: 0,
     et1i: 0,
     et2i: 0,
     disabledh: false,
     flagh: 1,
     flagm: 1,
     flags: 1,
     more:'',
     animatestrate1:'paused',
     animatestrate2: 'paused',
     animatestrate3: 'paused'



  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      height: App.globalData.height,
      navtop: App.globalData.navtop


    })

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    // var dayStyle = wx.getStorageSync('dayStyle');
    var that = this;
    var indexx = wx.getStorageSync('indexx');
    that.setData({
      indexx: indexx
    })
    var indexx = that.data.indexx;
    console.log(indexx);
    
    var stars = wx.getStorageSync('stars')
    var jindu=this.jindu;
    var btime = stars[indexx].btime;
    var more = stars[indexx].more;
    
    var arr1=btime.split(":")
    
    var etime = stars[indexx].etime;
  
    var arr2 = etime.split(":")
    console.log(parseInt(arr2[0]))
    // var bt1i = parseInt(arr1[0])
    // var bt2i = parseInt(arr1[1])
    // var et1i = parseInt(arr2[0])
    // var et2i = parseInt(arr2[1])
    
    
 
    jindu = parseInt(stars[indexx].days / stars[indexx].tianshu * 100)

    this.setData({
      stars: stars,
      indexx:indexx,
      jindu:jindu,
      more:more,
     bt1:arr1[0],
     bt2:arr1[1],
      et1: arr2[0],
      et2: arr2[1],
      bt1i: parseInt(arr1[0]),
      bt2i: parseInt(arr1[1]),
      et1i: parseInt(arr2[0]),
      et2i: parseInt(arr2[1]),
    }),
   
     
    
    



    // this.setData({
    //   dayStyle: dayStyle
    // })
    // console.log(dayStyle)
    // console.log(dayStyle[1])
    this.setData({
      animatestrate1: 'paused'
    })
    this.setData({
      animatestrate2: 'paused'
    })
    this.setData({
      animatestrate3: 'paused'
    })

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },



  start:function(e){
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    var hours = that.data.hours
    var flag=this.data.flag
    if(flag){
    timer=setInterval(function (e) {  
      second++
      if (second >= 60) {
        second = 0  
        minute++
        if (minute >= 60) {
          minute = 0  
          hours++
          if (hours < 10) {
            
            that.setData({
              hours: '0' + hours
            })
          } else {
            that.setData({
              hours: hours
            })
          }
        }
        if (minute < 10) {
       
          that.setData({
            minute: '0' + minute
          })
        } else {
          that.setData({
            minute: minute
          })
        }
      }
      if (second < 10) {
     
        that.setData({
          second: '0' + second
        })
      } else {
        that.setData({
          second: second
        })
      }
    }, 1000)
    this.setData({
      flag:0
    })
    }
  },
  
  stop:function(e){
    var flag=this.data.flag
    this.setData({
      flag:1
    })

    clearInterval(timer);
  },
  reset:function(e){
    var that=this;
    var flag = this.data.flag
    that.setData({
      hours: '0' + 0,
      minute: '0' + 0,
      second: '0' + 0,
      flag:1
    })
    clearInterval(timer);


  },
  animateb1:function(e){
    
    var flagh = this.data.flagh
    var that = this
    if (flagh == 1) {

      this.setData({
        animatestrate1: 'running',
      })


      timeh = setTimeout(function (e) {
        that.setData({
          animatestrate1: 'paused',
        })
      }, 800)


      this.setData({
        flagh: 0
      })


      timeflagh = setTimeout(function (e) {
        that.setData({
          flagh: 1,
        })
      }, 1200)

    }
  },
  animateb2: function (e) {

    var flagm = this.data.flagm
    var that = this
    if (flagm == 1) {

      this.setData({
        animatestrate2: 'running',
      })


      timem = setTimeout(function (e) {
        that.setData({
          animatestrate2: 'paused',
        })
      }, 800)


      this.setData({
        flagm: 0
      })


      timeflagm = setTimeout(function (e) {
        that.setData({
          flagm: 1,
        })
      }, 1200)

    }
   },
   animateb3: function (e) {

     var flags = this.data.flags
     var that = this
     if (flags == 1) {

       this.setData({
         animatestrate3: 'running',
       })


       times = setTimeout(function (e) {
         that.setData({
           animatestrate3: 'paused',
         })
       }, 800)


       this.setData({
         flags: 0
       })


       timeflags = setTimeout(function (e) {
         that.setData({
           flags: 1,
         })
       }, 1200)

     }
   },
   punchcard: function (e) {
     var stars = this.data.stars;
     var nowm = new Date();
     var timenow = nowm.getDate();
     var indexx=this.data.indexx;
     var jindu = this.jindu;
     var bt1i=this.data.bt1i;
     var bt2i = this.data.bt2i;
     var et1i = this.data.et1i;
     var et2i = this.data.et2i;
if(parseInt(nowm.getHours())>bt1i&&parseInt(nowm.getHours())<et1i)
{
  console.log(stars)
  if (stars[indexx].days == 0) {
    wx.showToast({
      title: '打卡成功',
    })
    stars[indexx].days = stars[indexx].days + 1;
    stars[indexx].remembertime = timenow;
    this.save();

  }
  else if (stars[indexx].days >= 1 && timenow != stars[indexx].remembertime) {
    wx.showToast({
      title: '打卡成功',
    })
    stars[indexx].days = stars[indexx].days + 1;
    stars[indexx].remembertime = timenow;
    this.save();


  }
  else {
    wx.showToast({
      title: '你今天已经打过',
      icon: 'none'
    })
  }
  var stars = wx.getStorageSync('stars');
  this.setData({
    stars: stars,
    status: 'ture',
  })


  jindu = parseInt(stars[indexx].days / stars[indexx].tianshu * 100)
  this.setData({

    jindu: jindu
  })
}
else if(bt1i==et1i)
{
  if (parseInt(nowm.getMinutes()) > bt2i && parseInt(nowm.getHours()) < et2i)
  {
    console.log(stars)
    if (stars[indexx].days == 0) {
      wx.showToast({
        title: '打卡成功',
      })
      stars[indexx].days = stars[indexx].days + 1;
      stars[indexx].remembertime = timenow;

      this.save();

    }
    else if (stars[indexx].days >= 1 && timenow != stars[indexx].remembertime) {
      wx.showToast({
        title: '打卡成功',
      })
      stars[indexx].days = stars[indexx].days + 1;
      stars[indexx].remembertime = timenow;
      this.save();


    }
    else {
      wx.showToast({
        title: '你今天已经打过',
        icon: 'none'
      })
    }
    var stars = wx.getStorageSync('stars');
    this.setData({
      stars: stars,
      status: 'ture',
    })


    jindu = parseInt(stars[indexx].days / stars[indexx].tianshu * 100)
    this.setData({

      jindu: jindu
    })
  }
  else {
    wx.showToast({
      title: '不在打卡时间段',
      icon: 'none'
    })
  }
}
else 
{
  wx.showToast({
    title: '不在打卡时间段',
    icon: 'none'
  })
}
    //  var index = e.currentTarget.dataset.index;
     // console.log(stars[index].days);
     // console.log(stars[index].name)
     // console.log(timenow);
     // console.log(stars[index].remembertime);


   },
   back: function (e) {
     wx.navigateBack(1)

   },
   save: function () {
     wx.setStorageSync('stars', this.data.stars);
   },
   onLoad: function (options) {
     this.setData({
       height: App.globalData.height,
       navtop: App.globalData.navtop


     })

   },
  
})
