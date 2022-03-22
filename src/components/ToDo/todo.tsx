import React from 'react'
import styled from '@emotion/styled'
import BangList from 'components/Grid/BangList'
import HotSoaring from 'components/Hot/hotSoaring'
import Classification from 'components/Classification/classification'
import Bubble from 'components/Bubble/bubble'
import EchartsComp from 'components/Echarts/EchartsComp'

export default function Todo() {
  return (
    <>
      {/* 层叠阴影 */}
      <div>
        {/* <BlackDDiv />
        <BlackDiv /> */}
        <DDIV>
          {/* 头部榜单 */}
          <BangList />
          <EchartsComponentStyle />
          {/* 热门标签 */}
          <HotSoaring />

          {/* 壁纸分类 */}
          <Classification />
          <Bubble.Common />
          <KongDiv></KongDiv>
        </DDIV>
      </div>
    </>
  )
}
const EchartsComponentStyle = styled(EchartsComp)`
  width: 90%;
  height: 100%;
  margin: 1rem auto;
`
const KongDiv = styled.div`
  width: 100%;
  height: 5.25rem;
`

const DDIV = styled.div`
  width: 100%;
  background-color: #2d355b;
  color: #cccccc;
  border-radius: 0.25rem;
  height: 100%;
  margin-top: -1.5rem;
`
