import { Component } from "react";
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.less'

export default class Index extends Component {
    state = {
        selected: 0,
        color: '#000000',
        selectedColor: '#DC143C',
        list: [
            {
                pagePath: "/pages/index/index",
                selectedIconPath: "../assets/tabbar_home_active.png",
                iconPath: "../assets/tabbar_home.png",
                text: "้ฆ้กต"
            },
            {
                pagePath: "/pages/profile/index",
                selectedIconPath: "../assets/tabbar_profile_active.png",
                iconPath: "../assets/tabbar_profile.png",
                text: "ๆ็"
            }
        ]
    }

    switchTab(index, url) {
        this.setSelected(index)
        Taro.switchTab({ url })
    }

    setSelected(idx) {
        this.setState({
            selected: idx
        })
    }

    render() {
        const { list, selected, color, selectedColor } = this.state

        return <CoverView className='tab-bar'>
            <CoverView className='tab-bar-border'></CoverView>
            {list.map((item, index) => {
                return (
                    <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
                        <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
                        <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
                    </CoverView>
                )
            })}
        </CoverView>
    }
}