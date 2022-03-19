import React, { useState } from 'react'
import { Grid, Modal } from 'antd-mobile'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router'

export default function BangList() {
  const navigate = useNavigate()
  let dataList = [
    {
      title: '热搜榜',
      url: '',
      text: 'Hot Search',
      color: '#e2e19d',
      color2: '#fa9c7f',
    },
    {
      title: '飙升榜',
      url: '',
      text: 'Soaring List',
      color: '#f8a88f',
      color2: '#5adbe4',
    },
    {
      title: '收藏榜',
      url: '',
      text: 'Collection List',
      color: '#5adbe4',
      color2: '#98e495',
    },
  ]
  function toBang() {
    Modal.alert({
      content: '排行榜相关内容暂不开放',
    })
  }
  return (
    <>
      <Grid columns={3} gap={8}>
        {/* 热门图片 */}
        {dataList.map((item, index) => (
          <Grid.Item key={index}>
            <TextDiv onClick={toBang} color={item.color} color2={item.color2}>
              <DivStylee>{item.title}</DivStylee>
              <DivStyle>{item.text}</DivStyle>
            </TextDiv>
          </Grid.Item>
        ))}
      </Grid>
    </>
  )
}
const DivStyle = styled.div`
  margin-top: 0.625rem;
  font-size: 0.75rem;
`
const DivStylee = styled.div`
  padding-top: 0.625rem;
  font-size: 0.75rem;
`
const TextDiv = styled.div<{
  color?: string
  color2?: string
}>`
  text-align: center !important;
  height: 4rem;
  width: 80%;
  margin: 20% 10%;
  color: #ffffff;
  border-radius: 0.625rem;
  background: linear-gradient(
    to right,
    ${(props) => (props.color ? props.color : '#e68e8e')} 20%,
    ${(props) => (props.color2 ? props.color2 : '#e68e8e')} 90%
  );
`
