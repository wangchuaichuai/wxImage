import React, { FC } from 'react'
import { SearchBar } from 'antd-mobile'
import styled from '@emotion/styled'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SearchComponent() {
  let navigate = useNavigate()
  let locationUrl = useLocation()
  const toSearch = () => {
    navigate('/search')
  }
  function getSearch() {
    navigate('/result')
  }
  if (locationUrl.pathname === '/search') {
    return (
      <>
        <div>```</div>
        <SearchCom onSearch={getSearch} placeholder="搜索你想要的壁纸" />
      </>
    )
  } else {
    return (
      <BgDiv>
        <SearchStyle onFocus={toSearch} placeholder="搜索你想要的壁纸" />
      </BgDiv>
    )
  }
}
const SearchCom = styled(SearchBar)`
  width: 90%;
  border-radius: 3.25rem;
  margin: 5rem auto;
`
const SearchStyle = styled(SearchBar)`
  --height: 1.25rem;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 0.3125rem;
  /* padding-bottom: 1rem; */
  padding-top: 0.3125rem;
  --border-radius: 1.5rem;
  font-family: 'Times New Roman', Times, serif;
  --background: #fff;
`
const BgDiv = styled.div`
  height: 2.5rem;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
`
