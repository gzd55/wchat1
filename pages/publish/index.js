// pages/publish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
imagelist:["/static/defaulthead.jpg","/static/love.jpg","/static/tabbar/QQ截图20220512222302.png"]

  },
  addimage:function(e){
    var that=this
    wx.chooseImage({
      count:23,
      sizeType:['original', 'compressed'],
      // sourceType:['album', 'camera'],
      // sourceType:['camera'],
      success:function(res){
        console.log(res)
        // var newlist=that.data.imagelist.concat(res.   tempFilePaths)
        that.setData({//如果直接修改data内容不能改变页面，如果要改变页面必须setdata（）
          // imagelist:res.tempFilePaths
          imagelist:that.data.imagelist.concat(res.   tempFilePaths)//列表添加元素可以使用push类似append
          // imagelist: newlist
        })
     
      },
      fail:function(res){

      },
      complete:function(res){}
    })
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

  }
})