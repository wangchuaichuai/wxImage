import React from 'react'
import { Grid, Button } from 'antd-mobile'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useEffect } from 'react'
import api from 'api/getData'

export default function BiaoHotGrid() {
  let [tabs, setTabs] = useState([])
  useEffect(() => {
    ;(async function getBiao() {
      const { data: res } = await api.getBiao()
      if (res.code === 200) {
        setTabs(res.data)
      }
    })()
  }, [])
  return (
    <BiaoHotDiv>
      <Grid columns={5} gap={0}>
        {tabs.map((item, index) => (
          <GridDiv key={index}>
            <Grid.Item key={index}>
              <ButtonStyle>{item}</ButtonStyle>
            </Grid.Item>
          </GridDiv>
        ))}
      </Grid>
    </BiaoHotDiv>
  )
}
const GridDiv = styled.div`
  display: flex;
  align-items: center;
`
const ButtonStyle = styled(Button)`
  --border-radius: 1.625rem;
  width: 4.25rem;
  font-size: 0.775rem;
  margin: 0.625rem auto;
  --background-color: #556095;
  text-shadow: none;
  box-shadow: none;
  :active {
    box-shadow: none;
  }
  :hover {
    box-shadow: none;
  }
  --border-width: none;
  --text-color: #d7a7b6;
`
const BiaoHotDiv = styled.div`
  width: 90%;
  margin: 0 5%;
`
