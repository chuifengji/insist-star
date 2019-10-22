
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day: 0,
    height: 'App.globalData.height',
    navtop: 'App.globalData.navtop',
    flag:0,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: {},
    hasUserInfo: false,
   
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      height: app.globalData.height,
      navtop: app.globalData.navtop
      

    })
   console.log(this.data.height)
    console.log(this.data.navtop)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

    var that = this
    var firstday = wx.getStorageSync('firstday')
    
    if (!firstday) {
      var first = new Date();

      var num = 0;
      var firstday = 0;
      switch (first.getMonth() + 1) {
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
      firstday = num + first.getDate();
      console.log(firstday);
      wx.setStorage({
        key: 'firstday',
        data: firstday,
      })


    } 
    else {
var now=new Date();
      var num = 0;
      var nowday=0;
      switch (now.getMonth() + 1) {
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
      nowday = num + now.getDate()+0;
      var day = nowday - firstday;
      this.setData({
        day:day
      })

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
  f1: function(event) {
    wx.navigateTo({
      url: '/pages/mainstar/mainstar',
    })
  },
  f2: function(event) {
    wx.navigateTo({
      url: '/pages/warehouse/warehouse',
    })
  },
 
  _error:function(e){
    var flag = this.data.flag
    this.setData({
      flag: 1
    })
    wx.showToast({
      title: '同意可获得更好的体验哦',
      icon:'none'
    })
    
  },
  getUserInfo: function (e) {
    var flag = this.data.flag
    this.setData({
      flag: 1
    })

    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }

})