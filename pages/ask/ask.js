// pages/ask/ask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quote: false
  },
  handleMakePhoneCall: function(e){
    wx.makePhoneCall({
      phoneNumber: e.target.dataset.phone
    })
  },
  handleFilter:function(e){
    wx.navigateTo({
      url: '/pages/brand/brand',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  handleDetail:function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  handleCancelQuote: function(){
    this.setData({
      quote: false
    })
  },
  handleQuote:function(){
    this.setData({
      quote: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})