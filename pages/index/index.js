// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  click:function(e){
    console.log("我被点了");
    console.log(e);
    var nid=e.currentTarget.dataset.nid
    console.log(nid);
    wx.navigateTo({
      url: '/pages/redirect/index?id='+nid,
    })
  },
  click1:function(e){
    console.log(e)
    var id=e.currentTarget.dataset.id
    console.log("id="+id)
    var name=e.currentTarget.dataset.name
    console.log(name)
    wx.navigateTo({
      url: '/pages/redirect/index?id='+id,
    })
  }
})