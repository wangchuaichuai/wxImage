import React from 'react'
import Tab from '../../components/Tabbar/Tab'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../../components/Nav/Navbar'
import styled from '@emotion/styled'

export default function Home() {
  const  url = useLocation()
  if (url.pathname !== '/personal') {
    return (
      <>
        <Bg>
          <NavBarStyle />
        </Bg>
        <Tab />
        <Outlet />
      </>
    )
  } else {
    return (
      <>
        <Bg1>
          <NavBarStyle />
        </Bg1>
        <Tab />
        <Outlet />
      </>
    )
  }
}

const Bg = styled.div`
  /* background-image: linear-gradient(to left, #e68e8e 0%, #539e9e 90%); */
  background-color: #2D355B;
  height: 7.25rem;
  width: 100%;
`
const Bg1 = styled.div`
  background-color: #2d355b;
  height: 7.25rem;
  width: 100%;
`
const NavBarStyle = styled(Navbar)`
  width: 100%;
  height: 6.25rem;
  /* background-color: black; */
`
