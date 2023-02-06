export default defineAppConfig({
  pages: [
    "pages/index/index", 
    "pages/profile/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#DC143C",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        selectedIconPath: "assets/tabbar_home_active.png",
        iconPath: "assets/tabbar_home.png",
        text: "首页",
      },
      {
        pagePath: "pages/profile/index",
        selectedIconPath: "assets/tabbar_profile_active.png",
        iconPath: "assets/tabbar_profile.png",
        text: "我的",
      },
    ],
  },
});
