import { AtButton } from "taro-ui";
import { Component } from "react";
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

import "taro-ui/dist/style/components/button.scss";
import './index.less'



export default class Index extends Component {
  pageCtx = Taro.getCurrentInstance().page;

  componentDidShow() {
    if (typeof Taro.getTabBar === 'function') {
      const tabbar = Taro.getTabBar(this.pageCtx);
      tabbar?.setSelected(0)
    }
  }

  render() {
    return <View className='index'>
      <Text>首页</Text>
      <AtButton type='primary'>是兄弟，你就来点击一下！</AtButton>
    </View>
  }
}