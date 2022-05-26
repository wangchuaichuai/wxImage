import styled from '@emotion/styled'
import { Button } from 'antd-mobile'
import Navbar from '../../components/Nav/Navbar'
import SearchComponent from '../../components/Search/SearchComponent'
import React from 'react'


export default function searchPage() {
  const arr = ['女生', '动漫', '节日', '酷车', '原神']
  return (
    <>
      <Navbar />

      {/* 猜你想搜 */}
      <TextStyle>
        <SearchComponent></SearchComponent>
        <TextStyled>猜你想搜</TextStyled>
        <ButtonList>
          {arr.map((item, index) => (
            <ButtonStyle key={index}>{item}</ButtonStyle>
          ))}
        </ButtonList>
      </TextStyle>
    </>
  )
}
const TextStyled = styled.div`
  margin: 0 1rem;
`
const TextStyle = styled.div`
  color: #fff;
  width: 100%;
`
const ButtonList = styled.div`
  width: 100%;
  margin: 0 auto;
`
const ButtonStyle = styled(Button)`
  --border-radius: 1.625rem;
  width: 4.25rem;
  font-size: 0.775rem;
  margin: 0.625rem 0.2rem;
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
