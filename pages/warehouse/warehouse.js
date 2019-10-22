const App = getApp();
Page({


  /**
   * 页面的初始数据
   */
  data: {
    arrayy: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030'],

    indexy: 0,
    arraym: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',],
  
    indexm: 0,
    arrayd1: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    indexd1: 0,
    arrayd2: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31'],
    indexd2:0,
    arrayd3: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28'],
    indexd3: 0,
    arrayd4: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29'],
    indexd4: 0,
    indexdmaster:0,
    name: '',
    // endtime: '',
    begintimeY: '',
    begintimeM: '',
    begintimeR: '',
    endtime:'',
    rot:'',
    e:'',
    speed:"",
    remembertime:'',
    days:'0',
    more:'',
    btime:"00:00",
    etime:"24:00",
    animatestrate:'',
    height: 'App.globalData.height',
    navtop: 'App.globalData.navtop',
    TabCur: 1,
    scrollLeft: 0,
    lots:[],
    result:'',
    lot:'',
    content:'',
    first:1,
   

  },
  //  点击时间组件确定事件  
  bindbTimeChange: function (e) {
    console.log(e)
    this.setData({
      btime: e.detail.value
    })
  },
  bindeTimeChange: function (e) {
    console.log(e)
    this.setData({
      etime: e.detail.value
    })
  },
  bindyearChange: function (e) {
var indexy=this.data.indexy;
    this.setData({
      indexy: e.detail.value
    })
    console.log(indexy);
  },
  bindday3Change: function (e) {
    console.log(e)
    this.setData({
      indexd3: e.detail.value,
      indexdmaster: parseInt(e.detail.value),
    })
  },
  bindday4Change: function (e) {
    console.log(e)
    this.setData({
      indexd4: e.detail.value,
      indexdmaster: parseInt(e.detail.value),
    })
  },
  bindday1Change: function (e) {
    console.log(e)
    this.setData({
      indexd1: e.detail.value,
      indexdmaster: parseInt(e.detail.value),
    })
  },
  bindday2Change: function (e) {
    console.log(e)
    this.setData({
      indexd2: e.detail.value,
      indexdmaster: parseInt(e.detail.value),
    })
   
  },
  bindmonthChange: function (e) {
    console.log(e)
    
    this.setData({
      indexm: e.detail.value,
      indexd1:0,
      indexd2: 0,
      indexd3: 0,
      indexd4: 0,
    })
    
  },
  //  点击日期组件确定事件  
 
  inputname:function(e){

    this.setData({ name: e.detail.value });
  }, 
  inputandtime: function (e) {
   
    this.setData({ endtime: e.detail.value.trim() });
  },
  inputmore:function(e){
    this.setData({
      more: e.detail.value.trim()
    });
   
  },
  inputlot:function(e){
    
    this.setData({
      content: e.detail.value.trim(),
    })
   
  

  },
  insert: function () {


    var stars = wx.getStorageSync('stars') || [];
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    this.setData({ begintimeY: year, begintimeM: month, begintimeR: date })
    var rot = 0;
    var btime = this.data.btime;
    var etime = this.data.etime;
    // console.log(btime);
    //     console.log(etime);
    var edate = 0;
    var emonthindex = parseInt(this.data.indexm);
    var edayindex = parseInt(this.data.indexdmaster) + 1;
    var eyear = parseInt(this.data.arrayy[this.data.indexy]);
    var emonth = parseInt(this.data.arraym[this.data.indexm]);
    console.log(eyear);


    var num = 0;
    var day1 = 0;
    var day2 = 0;
    var tianshu = 0;

    this.setData({ days: 0 });
    this.setData({ remembertime: date });

    switch (emonthindex) {
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
    day1 = num + edayindex;
    this.setData({
      edate: day1,
    })
    

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
    tianshu = day1 - day2;

    console.log(day2);
    console.log(tianshu);
    this.setData({
      tianshu: tianshu,
    })


    do {
      rot = (Math.random() * 300 + 60)
    } while (rot > 90 && rot < 160 || rot >200 && rot < 270 )

    if (this.data.name.replace(/(^\s*)|(\s*$)/g, '') == '') {
      wx.showToast({
        title: '输入不可以为空',
        icon: 'none'

      })

    }
    else if (stars.length > 4) {
      wx.showToast({
        title: '目标不可以太多啦',
        icon: 'none'


      })
    }
    else {
      var star = {
        name: this.data.name,
        more: this.data.more,
        dates: this.data.dates,
        times: this.data.times,
        begintimeY: this.data.begintimeY,
        begintimeM: this.data.begintimeM,
        begintimeR: this.data.begintimeR,
        indexy:this.data.indexy,
        indexm:this.data.indexm,
        
        rot: rot,
        remembertime: this.data.begintimeR,
        days: this.data.days,
        r: Math.random() * 200 + 500,
        speed: Math.random() * 2 + 1,
        tianshu: this.data.tianshu,
        edate: this.data.edate,
        btime: btime,
        etime: etime,
        eyear:eyear,
        emonth:emonth,
        indexdmaster: this.data.indexdmaster+1,
        
      };

      stars.push(star);
      wx.setStorage({
        key: 'stars',
        data: stars,
      })
      this.setData({
        animatestrate: 'running',
        more: ''
      })
      var val = setTimeout(yanshi
        , 2000)

    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      height: App.globalData.height,
      navtop: App.globalData.navtop
    })
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    this.setData({
      indexm:month,
      indexdmaster:date,
      indexd1:date,
      indexd2:date,
      indexd3:date,
      indexd4:date,
    })
 


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
   
    this.setData({
      animatestrate: 'paused'
    })

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
  f5:function(e){
    wx.navigateTo({
      url: '/pages/lot/lot',
    })
  },

  back: function (e) {
    
    wx.navigateBack(1)
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  addlot:function(e){
    var lots = this.data.lots;
    if(lots.length<9){
    if (!this.data.content || !this.data.content.trim()) return;

    var content=this.data.content;
    
   lots.push({
     content:content
   })
    this.setData({
    
      lots: lots,
      content:'',
      lot:''
      
    });
    }
    else{
      wx.showToast({
        title: '不可以再添加了噢',
        icon: 'none',
   
      })
      
    }
  },
  lot:function(e){
    
    var lots = this.data.lots;
    if(lots.length==0)
    {
      wx.showToast({
        title: '请先输入',
        icon:'none'
      })
      return
    }
    var that =this;
    var length=lots.length;
    var index = Math.floor(Math.random() * 1000 % length);
    var lot = lots[index];
    var result=this.data.result;
    that.setData({
      result: lots[index].content
    })
    console.log(lots[index].content);
    console.log(result);
  },
  delete:function(e){
    var that=this;
    var index = e.target.dataset.index;
    console.log(index);
    var lots=that.data.lots;
    lots.splice(index, 1);
    that.setData({
      lots:lots
    })


  },
         

        
  
   

})
function yanshi() {
  wx.redirectTo({
    url: '/pages/mainstar/mainstar',
  })
  var first=wx.getStorageSync('first')
  if(first){
    wx.showToast({
      title: '侧滑事件可进行打卡删除操作',
      icon:'none',
      duration: 3000
    })
    wx.setStorageSync('first', 0)
  }
  
  


}

