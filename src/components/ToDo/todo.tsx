import React from 'react'
import styled from '@emotion/styled'
import BangList from 'components/Grid/BangList'
import HotSoaring from 'components/Hot/hotSoaring'
import Classification from 'components/Classification/classification'
import Bubble from 'components/Bubble/bubble'

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
const KongDiv = styled.div`
  width: 100%;
  height: 5.25rem;
`

const DDIV = styled.div`
  width: 100%;
  background-color: #2D355B;
  color: #cccccc;
  border-radius: 0.25rem;
  height: 100%;
  margin-top: -1.5rem;
`
