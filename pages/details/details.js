// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number:1,
    money:128,
    total:128
  },
  add(){
    let number=this.data.number
    if(number>9)return
    this.setData({
      number:number+1
    })
    let number1 = this.data.number
    let total = this.data.money * number1
    this.setData({
      total: total
    })
  },
  reduce(){
    let number = this.data.number
    if (number>1) {
      this.setData({number: number - 1})
    }
    let number1 = this.data.number
    let total = this.data.money * number1
    this.setData({
      total: total
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