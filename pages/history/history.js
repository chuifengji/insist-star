const App = getApp();
Page({
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },  



  /**
   * 页面的初始数据
   */
  data: {
 
    historys: [],
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    height: 'App.globalData.height',
    navtop: 'App.globalData.navtop',




  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {
    this.setData({
      height: App.globalData.height,
      navtop: App.globalData.navtop
    })
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });

   

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
var historys=wx.getStorageSync('historys')
console.log(historys)
    this.setData({
      historys:historys
    })
console.log(historys)
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

  back: function (e) {
    wx.navigateTo({
      url: '/pages/index/index',

    })


  }

})