// pages/shopIn_change/shopIn_change.js
var app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:"",
        storeId:"",
        Data:[],
        number:"",
        newUrl:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that=this;
        var url=app.url;
        var storeId=options.storeId;
        let detail=wx.getStorageSync('detail');
        this.setData({
            url:url,
            storeId:storeId,
        });
            wx.request({
                url:this.data.url+"shopstore/fixpage",
                method:"POST",
                data:{storeId:that.data.storeId},
                success:function (res) {
                    console.log(res.data);

                    var json=[];
                    json.push(res.data.data);
                    that.setData({
                        Data:json
                    })
                }
            })


    },
    //修改数量
    output:function (e) {
        var num=e.detail.value;
        this.setData({
            number:num
        })
        console.log(this.data.number);
    },
    //确认保存页面
    confirm:function (e) {
        let that=this;
        let detail=wx.getStorageSync('detail');
        if(detail=="restock"){
            this.setData({
                newUrl:"..shopIn_restockDetail/shopIn_restockDetail"
            })
        }else  if(detail=="take"){
            this.setData({
                newUrl:"..shopIn_takeDetail/shopIN_takeDetail"
            })
        }
            wx.request({
                url:that.data.url+"shopstore/shoufix",
                method:"POST",
                data:{
                    storeId:that.data.storeId,
                    goodsStock:that.data.number
                },
                success:function (res) {
                    console.log(res);
                    if(res.data.code==200){
                        wx.showModal({
                          title: '提示',
                          content: '商品修改成功',
                          showCancel:false,
                          success: res=>{
                              console.log("成功");
                                wx.navigateTo({
                                  url: that.data.newUrl
                                })
                          }
                        })
                    }else if(res.data.code==202||res.data.code==201){
                        wx.showModal({
                            title:"警告",
                            content:"修改失败,请重新修改",
                            showCancel:false,
                            success:function (res) {
                                // wx.navigateBack({
                                //     delta:1
                                // })
                            }
                        })
                    }
                }
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