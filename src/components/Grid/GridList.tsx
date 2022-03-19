import React from 'react'
import { Grid, Image } from 'antd-mobile'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import api from 'api/getData'
import { useState } from 'react'
const image = require('../../assets/1.jfif')

export default function GridList() {
  let [grid, setGrid] = useState([])
  const clickGridItem = (title: string) => {
    console.log(`我点击了${title}`)
  }
  useEffect(() => {
    ;(async function getGrid() {
      const { data: res } = await api.getGrid()
      if (res.code === 200) {
        setGrid(res.data)
      }
    })()
  }, [])
  return (
    <GridDiv columns={4} gap={20}>
      {grid.map((item) => (
        <Grid.Item onClick={(e) => clickGridItem(item.title)} key={item.id}>
          <ImageDiv color={item.color} src={item.url ? item.url : image} />
          <div>{item.title}</div>
        </Grid.Item>
      ))}
    </GridDiv>
  )
}

const GridDiv = styled(Grid)`
  margin-top: 1.25rem;
  justify-items: center;
  font-size: 0.875rem;
`
const ImageDiv = styled(Image)<{
  color: string
}>`
  width: 3rem;
  height: 3rem;
  border-radius: 6.25rem;
  margin-bottom: 0.625rem;
  margin-left: 0.3125rem;
  box-shadow: 0.1125rem 0.1125rem 0.225rem
    ${(props) => (props.color ? props.color : 'black')};
`
