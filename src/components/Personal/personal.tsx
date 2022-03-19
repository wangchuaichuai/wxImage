import React from 'react'
import styled from '@emotion/styled'
import Bubble from 'components/Bubble/bubble'
import PersonalList from 'components/PersonalList/personalList'
export default function Personal() {
  return (
    <>
      {/* 层叠阴影 */}
      <div>
        {/* <BlackDDiv />
        <BlackDiv /> */}
        <DDIV>
          <DDDiv />
          {/* 登录 */}
          <PersonalList />
          <KongDiv></KongDiv>
          <Bubble.Common />
        </DDIV>
      </div>
    </>
  )
}
const KongDiv = styled.div`
  width: 100%;
  height: 6.25rem;
`
const DDDiv = styled.div`
  padding-top: 0.825rem;
`
const DDIV = styled.div`
  width: 100%;
  border-radius: 0.25rem;
  height: 100%;
  background-color: #2D355B;
  color: #cccccc;
  margin-top: -1.5rem;
`
