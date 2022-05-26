import React from 'react'
import styled from '@emotion/styled'
import BiaoHotGrid from '../../components/Grid/BiaoHotGrid'

export default function HotSoaring() {
  return (
    <>
      {/* 热门标签 */}
      <FlexDiv>
        <div>热门标签</div>
      </FlexDiv>
      {/* 热门标签的标签 */}
      <BiaoHotGrid />
    </>
  )
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
  margin-top: 1.2rem;
  font-size: 1rem;
`
