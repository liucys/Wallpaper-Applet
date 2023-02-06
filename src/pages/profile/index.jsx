import { Component } from "react";
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.less';

export default class Profile extends Component {
    pageCtx = Taro.getCurrentInstance().page;

    componentDidShow() {

        if (typeof Taro.getTabBar === 'function') {
            const tabbar = Taro.getTabBar(this.pageCtx);
            tabbar?.setSelected(1)
        }

    }

    render() {
        return <View className='profile-con'>
            <Text>个人中心</Text>
        </View>
    }
}