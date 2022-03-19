import React from 'react'
import styled from '@emotion/styled'
import { Grid, Image } from 'antd-mobile'
import { useState } from 'react'
import { useEffect } from 'react'
import api from 'api/getData'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import * as action from 'store/actions/tabs_action/action'

export default function Classification() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let [gridList,setGridList] = useState([])
  useEffect( () => {
      ;(async function (){
        const { data:res } = await api.getMore()
        if (res.code === 200){
            setGridList(res.data)
        }
      })()
  }, [])
  function toResultList(name:string) {
    dispatch(action.changeName(name))
    dispatch(action.initKey())
    navigate('/resultList')
  }
  return (
    <>
      <FlexDiv>
        <div>壁纸分类</div>
      </FlexDiv>
      <GridStyled columns={2} gap={8}>
        {gridList.map((item, index) => (
          <Grid.Item key={index}>
            <ImageDiv
              fit="cover"
              lazy
              onClick={() => toResultList(item.title)}
              src={
                item.cover
                  ? item.cover
                  : 'https://img0.baidu.com/it/u=1435478154,1248443561&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
              }
            ></ImageDiv>
            <TitleDiv>{item.title}</TitleDiv>
          </Grid.Item>
        ))}
      </GridStyled>
    </>
  )
}
const TitleDiv = styled.div`
  position: absolute;
  margin-top: -1.5rem;
  margin-left: 0.5rem;
  color: #fff;
`
const ImageDiv = styled(Image)`
  width: 10.5rem;
  height: 5.25rem;
  position: relative;
  border-radius: 0.625rem;
  margin-top: 1rem;
  box-shadow: 0 0 0.8rem #1c2345;
`
const GridStyled = styled(Grid)`
  justify-items: center;
`
const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
  margin-top: 1.2rem;
  font-size: 1rem;
`
