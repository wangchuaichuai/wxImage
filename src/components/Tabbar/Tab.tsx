import React, { FunctionComponent } from 'react'
import { Badge, TabBar } from 'antd-mobile'
import styled from '@emotion/styled'

import Inconfont from '../../components/Iconfont/iconfont'
import { useNavigate } from 'react-router-dom'

const Tab = () => {
  const tabs = [
    {
      key: '',
      title: '首页',
      icon: (isShow: boolean) =>
        !isShow ? (
          <Inconfont.Home></Inconfont.Home>
        ) : (
          <Inconfont.HomeOpen></Inconfont.HomeOpen>
        ),
      badge: Badge.dot,
    },
    {
      key: '/todo',
      title: '分类',
      icon: (isShow: boolean) =>
        isShow ? (
          <Inconfont.List></Inconfont.List>
        ) : (
          <Inconfont.ListOpen></Inconfont.ListOpen>
        ),
      badge: '5',
    },
    {
      key: '/msg',
      title: '更多',
      icon: (isShow: boolean) =>
        !isShow ? <Inconfont.More /> : <Inconfont.Open />,
      badge: '99+',
    },
    {
      key: '/personal',
      title: '个人中心',
      icon: (isShow: boolean) =>
        !isShow ? <Inconfont.UserOpen /> : <Inconfont.User />,
    },
  ]
  let navigator = useNavigate()
  const goToLink = (url: string) => {
    navigator(url)
  }
  return (
    <TabDiv>
      <TabBarList onChange={(value) => goToLink(value)}>
        {tabs.map((item, index) => (
          <TabBarItem
            key={item.key}
            icon={item.icon}
            title={`${item.title}`}
          ></TabBarItem>
        ))}
      </TabBarList>
      {/* <HeadLeft>123</HeadLeft> */}
    </TabDiv>
  )
}
const TabBarItem = styled(TabBar.Item)`
  color: #474545 !important;
`
const TabDiv = styled.div`
  /* border-bottom: .1875rem;
    border-color: red;
    border-style: solid; */
`

const TabBarList = styled(TabBar)`
  .adm-tab-bar-item {
    color: var(--adm-color-light);
  }
  .adm-tab-bar-item-active {
    /* color: var(--adm-color-primary); */
  }

  bottom: 0;
  width: 100%;
  /* height: 120%; */
  /* border-radius: 0.3rem; */
  position: fixed;
  padding: 0.5rem 0;
  z-index: 999;
  /* margin: 5% 5%; */
  background: #2d355b;
  /* border-top: .625rem; */
  /* border-color: #262D4E; */
  box-shadow: 0 0 2rem #132B51;
  /* border-style: solid; */
  /* border-color: #2D355B; */
  /* animation: ani1 10s infinite alternate;
  @keyframes ani1 {
    from {
      background: #f5cece;
    }
    60%,
    70% {
      background: #e9e4a7;
    }
    to {
      background: #acf0c3;
    }
  } */
`

// const Headleft = styled.div`
//   color: red;
// `
export default function TabShow() {
  return (
    <>
      <Tab />
    </>
  )
}
