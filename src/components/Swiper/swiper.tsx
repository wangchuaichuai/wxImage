import React, { ReactElement, useState } from 'react'
import { Swiper, Image } from 'antd-mobile'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import api from 'api/getData'

export default function SwiperComponent() {
  let [swipe, setSwipe] = useState([])
  // 获取轮播图数据
  useEffect(() => {
    ;(async function getSwipeList() {
      const { data: res } = await api.getSwipe()
      if (res.code === 200) {
        setSwipe(res.data)
      }
    })()
  }, [])
  const items = swipe.map((item, index) => (
    <Swiper.Item key={index}>
      <Header>
        <Image src={item} alt="" />
      </Header>
    </Swiper.Item>
  ))
  return (
    <>
      <SwiperR autoplay loop>
        {items}
      </SwiperR>
    </>
  )
}
const Header = styled.div<{
  color?: string
}>`
  background: ${(props) => (props.color ? props.color : '#000000')};
  height: 9.375rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  user-select: none;
`
const SwiperR = styled(Swiper)`
  border-radius: 0.625rem;
`
