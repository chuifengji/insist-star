const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: [],
    star: '',
    
    historys:[],
    bottomoff3:'',
    status: true,
    height: 'App.globalData.height',
    navtop: 'App.globalData.navtop',
    dayStyle: [[
      { month: 'current', day: new Date().getDate() - 2, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate() - 1, color: 'white', background: '#AAD4F5' },
    ], [
      { month: 'current', day: new Date().getDate() - 3, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate() - 1, color: 'white', background: '#AAD4F5' },
    ], [
      { month: 'current', day: new Date().getDate() - 3, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate() - 1, color: 'white', background: '#AAD4F5' },
    ], [
      { month: 'current', day: new Date().getDate() - 3, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate() - 1, color: 'white', background: '#AAD4F5' },
    ], [
      { month: 'current', day: new Date().getDate() - 3, color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#AAD4F5' },
      { month: 'current', day: new Date().getDate() - 1, color: 'white', background: '#AAD4F5' },
    ]],
 




  },

  /**
   * 生命周期函数--监听页面加载
   */
  save: function () {
    wx.setStorageSync('stars', this.data.stars);
  },
  onLoad: function(options) {
    this.setData({
      height: App.globalData.height,
      navtop: App.globalData.navtop
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
var that=this;
    var stars = wx.getStorageSync('stars');
    var dayStyle = wx.getStorageSync('dayStyle');
  var day2=0;
  var j=0
  var num=0
  var now=new Date();
  //  var enddate=now.getDate();
    var  endmonth= now.getMonth();
  //   var    endyear=now.getFullYear();
  console.log(endmonth)
    this.setData({
      stars:stars
    })
    // console.log(stars);
    var a=stars.length;
    var b=a*84;
    
    this.setData({
      bottomoff3:b
    })
    wx.setStorage({
      key: 'bottomoff3',
      data: 'bottomoff3',
      
    })
    wx.setStorageSync('dayStyle', dayStyle[0]);
    switch (now.getMonth()) {
      case 1:
        num = 0;
        break;
      case 2:
        num = 31;
        break;
      case 3:
        num = 59;
        break;
      case 4:
        num = 90;
        break;
      case 5:
        num = 120;
        break;
      case 6:
        num = 151;
        break;
      case 7:
        num = 181;
        break;
      case 8:
        num = 212;
        break;
      case 9:
        num = 243;
        break;
      case 10:
        num = 273;
        break;
      case 11:
        num = 304;
        break;
      case 12:
        num = 334;
        break;
    }
    day2 = num + now.getDate();
    console.log(stars)
    console.log(stars.length)


        for (var i = 0; i < a; i++) {

          // console.log(day2)
          if (stars[i].edate == day2) {

            wx.showToast({
              title: '已到达日期',
            })
            if (wx.getStorageSync('historys')) {
              var historys = wx.getStorageSync('historys');
            }
            else {
              var historys = that.data.historys;
            }
            if (parseInt(stars[i].tianshu * 8 / 10) <= stars[i].day) {
              var history = {
                data: stars[i],
                statu: "有效坚持",
                enddate: now.getDate(),
                endmonth: now.getMonth()+1,
                endyear: now.getFullYear(),
              }
              historys.unshift(history);
     
              stars.splice(j, 1)[0];
       
              that.setData({
                stars: stars,
                historys: historys,
                // status: 'ture',
              });
              wx.setStorage({
                key: 'historys',
                data: historys,

              })
              wx.setStorage({
                key: 'stars',
                data: stars,

              })
              console.log(historys)
              console.log(stars)
            }
            else {
              var history = {
                data: stars[i],
                statu: "无效坚持",
                endtime: now
              }
              historys.unshift(history);
              stars.splice(i, 1)[0];
              that.setData({
                stars: stars,
                historys: historys,
                // status: 'ture',
              });
              wx.setStorage({
                key: 'historys',
                data: historys,

              })
              wx.setStorage({
                key: 'stars',
                data: stars,

              })
              wx.setStorage({
                key: 'bottomoff3',
                data: 'bottomoff3',
              })
             
            }
          }
 
        }


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {



  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }, 
  onItemRemove: function (e) {
    var that=this;
    wx.showModal({
      title: '放弃坚持',
      content: '真的就这样放弃了吗？',
      cancelText: "NO！",//默认是“取消”
      cancelColor: '#1d953f',//取消文字的颜色
      confirmText: "无奈放弃",//默认是“确定”
      confirmColor: '#999d9c',//确定文字的颜色
     
      success(res) {
        if (res.confirm) {
          var stars = that.data.stars;
          var a = stars.length;
          var b = a * 84;
          that.setData({
            bottomoff3: b
          }),
            wx.setStorage({
              key: 'bottomoff3',
              data: 'bottomoff3',
            })
          var index = e.target.dataset.index;
          var stars = that.data.stars;
          if (wx.getStorageSync('historys')) {
            var historys = wx.getStorageSync('historys');
          }
          else {
            var historys = that.data.historys;
          }
          // console.log(stars[index]);
          var history = {
            data: stars[index],
            statu: "放弃",
          }
          historys.unshift(history);
          stars.splice(index, 1);
          var stars = that.data.stars;
          var a = stars.length;
          var b = a * 84;
          that.setData({
            stars: stars,
            historys: historys,
            status: 'ture',
            bottomoff3: b
          });
          wx.setStorageSync('historys', historys);
          that.save();
        
            wx.setStorage({
              key: 'bottomoff3',
              data: 'bottomoff3',
            })
      

        } else if (res.cancel) {
          console.log('用户点击取消')
          that.setData({
            status: 'ture',
          })
        }
      }
    })
  
   

    
    
  },

  f3: function (event) {
    wx.navigateTo({
      url: '/pages/history/history',
    })
  },
  back:function(e){
    wx.navigateBack(1)

  },
  f4:function(event){
    var stars = this.data.stars;
    var a = stars.length;
    var b = a * 84;
    
    this.setData({
      bottomoff3: b

    }),
      wx.setStorage({
        key: 'bottomoff3',
        data: 'bottomoff3',

      })
  },

  punchcard: function (e) {

    var index = e.currentTarget.dataset.index;
    this.setData({
      index: index
    })
    var indexx = this.data.index;
    wx.setStorageSync('indexx', indexx)
    console.log(indexx)
    wx.navigateTo({
      url: '/pages/timer1/timer1',
      success: function (res) {

      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }





})
