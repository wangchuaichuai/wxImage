import React from 'react'
import { NavBar, Image, Toast } from 'antd-mobile'
import NavStyle from './styles'
import SearchComponent from '../Search/SearchComponent'
import { TravelOutline } from 'antd-mobile-icons'
import { useLocation } from 'react-router'
import styled from '@emotion/styled'
import Iconfont from 'components/Iconfont/iconfont'
import { useDispatch, useSelector } from 'react-redux'
import * as action from 'store/actions/tabs_action/action'

export default function Navbar() {
  let dispatch = useDispatch()
  const back = () => {
    dispatch(action.initKey())
    window.history.back()
  }
  let selector = useSelector((state: any) => state.userReducers)
  let url = useLocation().pathname
  if (url === '/' || url === '/msg' || url === '/todo') {
    return (
      <HeadSearch>
        <SearchComponent />
        <Svg />
      </HeadSearch>
    )
  } else if (url === '/personal') {
    return (
      //   <HeadSearch>
      <K>
        <div>
          <NameDiv>{selector.name}</NameDiv>
          <NumDiv>{selector.userInfo.userP}</NumDiv>
        </div>
        <ImageDiv src={selector.userInfo.userCover} />

        <ICLink
          onClick={() => {
            Toast.show({
              content: 'Hello World',
            })
          }}
        >
          <Iconfont.Link />
        </ICLink>
      </K>
    )
  } else if (url === '/search') {
    return (
      <>
        <HeadSearchResult>
          <SearchNav onBack={back}>搜索</SearchNav>
        </HeadSearchResult>
        {/* <SearchComponent></SearchComponent> */}
      </>
    )
  } else if (url === '/result') {
    return (
      <>
        <HeadSearchResult>
          <SearchNav onBack={back}>搜索结果</SearchNav>
        </HeadSearchResult>
      </>
    )
  } else if (url === '/resultList') {
    return (
      <>
        <HeadSearchResult>
          <SearchNav onBack={back}>分类</SearchNav>
        </HeadSearchResult>
      </>
    )
  } else {
    return <></>
  }
}
const SearchNav = styled(NavBar)`
  color: #fff;
  font-size: 0.625rem !important;
  /* position: fixed;
  top: 0;
  margin-bottom: 2rem; */
`
const ICLink = styled.div`
  position: fixed;
  right: 0.625rem;
  top: 1.625rem;
`
const NameDiv = styled.div`
  font-size: 2rem;
  margin-left: 2rem;
  color: #fff;
  margin-bottom: 0.2rem;
`
const NumDiv = styled.div`
  font-size: 0.7rem;
  margin-left: 2rem;
  margin-top: 0.5rem;
  color: #9094a8;
`
const ImageDiv = styled(Image)`
  border-radius: 6.25rem;
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
`
// 设置搜索和结果页的导航栏
const HeadSearchResult = styled.div`
  position: fixed;
  background-color: #2d355b;
  box-shadow: 0 0 2rem #132b51;
  width: 100%;
  z-index: 99;
`
const HeadSearch = styled.div`
  align-items: center;
  padding-top: 2rem;
  position: fixed;
  height: 2rem;
  /* background-image: linear-gradient(to left, #e68e8e 0%, #539e9e 90%); */
  background-color: #2d355b;
  box-shadow: 0 0 2rem #132b51;
  /* border-radius: 0.4rem; */
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  z-index: 99;
  align-items: center;
`
const K = styled.div`
  height: 2.5rem;
  padding-top: 3.625rem;
  display: flex;
  justify-content: space-between;
`
const Svg = styled(TravelOutline)`
  font-size: 1.25rem;
  color: #ffffff;
  margin-right: 0.625rem;
`
