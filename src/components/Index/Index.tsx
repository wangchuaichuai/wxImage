import React from 'react'
import styled from '@emotion/styled'
import Swiper from '../Swiper/swiper'
import GridList from '../Grid/GridList'
import Hot from 'components/Hot/hot'
import Official from 'components/Official/official'
import SelectTabsList from 'components/SelectList/selectTabsList'
import { Modal } from 'antd-mobile'
import Bubble from 'components/Bubble/bubble'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import * as action from 'store/actions/user_action/action'

export default function Index() {
  const dispatch = useDispatch()
  if (sessionStorage.getItem('data')) {
    let local = JSON.parse(sessionStorage.getItem('data'))
    console.log(local)
    dispatch(action.Login(local.uName, local.uPwd, local.token, local.userInfo))
  }
  const login = useSelector((state: any) => state.userReducers.login)
  const navigate = useNavigate()
  if (login === true) {
    return (
      <>
        {/* 层叠阴影 */}
        {/* <BlackDDiv /> */}
        {/* <BlackDiv /> */}
        {/* <KongDivStyle /> */}
        <DDIV>
          {/* 轮播图 */}
          <SwiperDivStyle>
            <Swiper></Swiper>
          </SwiperDivStyle>
          {/* 分类九宫格 */}
          <GridList />
          {/* 热门推荐 */}
          <Hot />
          {/* 官方推荐 */}
          <Official />
          {/* 官方推荐下的选择列表 */}
          <SelectTabsList />
          <Bubble.Common />
          <KongDiv></KongDiv>
        </DDIV>
      </>
    )
  } else {
    Modal.alert({
      content: '您还没有登录哦',
      onConfirm: () => {
        navigate('/login')
      },
    })
    return <></>
  }
}
const KongDiv = styled.div`
  width: 100%;
  height: 3.25rem;
`

// const BlackDDiv = styled.div`
//   /* background: linear-gradient(to left, #4f4fe9 0%, cyan 90%); */
//   /* background: linear-gradient(to right, #e68e8e 0%, #539e9e 80%); */
//   background: linear-gradient(to right, #afc8ec 20%, #cda9d3 90%);
//   width: 80%;
//   height: 1.875rem;
//   position: relative;
//   margin-top: 0.75rem;
//   border-radius: 1.25rem;
//   margin-left: 10%;
//   z-index: 1;
// `

// const BlackDiv = styled.div`
//   background: linear-gradient(to right, #a9ebbf 20%, #97d8e4 90%);
//   width: 90%;
//   height: 1.875rem;
//   position: relative;
//   margin-top: -1.55rem;
//   border-radius: 1.25rem;
//   margin-left: 5%;
//   z-index: 2;
// `
// const KongDivStyle = styled.div`
//   width: 100%;
//   height: 3.25rem;
// `
const SwiperDivStyle = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 0.625rem;
`
const DDIV = styled.div`
  /* z-index: 99; */
  /* position: absolute; */
  width: 100%;
  background-color: #2d355b;
  border-radius: 0.25rem;
  height: 100%;
  z-index: 2;
  color: #cccccc;
  margin-top: -1.5rem;
  /* opacity: 0.1; */
`
