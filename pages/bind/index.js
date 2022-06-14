// pages/bind/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
message:"爱你爱你",
name:"",
imageurl:"/static/defaulthead.jpg",
locapath:"请选择位置"
  },
  getlocation:function(e){
    var that = this
    console.log(e)
    console.log(this.data.locapath)
    
    wx.chooseLocation({
      success:function(res){
    
        console.log(res)
        console.log(res.address)
        that.setData({locapath:res.address})
      }
    })
  },
  changedata:function(e){
console.log(e)
console.log(this.data.message)
// 只是改了后端
// this.data.message="是的是的"
this.setData({message:"真的是的"})
},
getname:function(e){
  // wx.openSetting({
  //   withSubscriptions: false,
  // })
  var this2=this
  console.log("getname")
  wx.getUserInfo({//调用微信接口，获取用户信息
    success:function(res){//调用成功
      console.log("success",res)
      console.log(res.userInfo.nickName)
      this2.setData({name:res.userInfo.nickName,
        imageurl:res.userInfo.avatarUrl
      })
      //获取头像
      // this2.setData({imageurl:res.userInfo.avatarUrl})
    },
    fail:function(res){//调用失败
      console.log("fail",res)
    }
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