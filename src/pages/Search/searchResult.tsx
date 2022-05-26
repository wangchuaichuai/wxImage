import styled from '@emotion/styled'
import OfficialGridList from '../../components/Grid/OfficialGridList'
import Navbar from '../../components/Nav/Navbar'
import SelectTabsList from '../../components/SelectList/selectTabsList'
import { useLocation } from 'react-router'
import Bubble from '../../components/Bubble/bubble'
import React from 'react'

export default function SearchResult() {
  let url = useLocation().pathname
  if (url === '/result') {
    return (
      <>
        <Navbar />
        <Kongbai></Kongbai>
        <OfficialGridList type={'搜索'} />
        <Bubble.Common />
      </>
    )
  } else if (url === '/resultList') {
    return (
      <>
        <Navbar />
        <Kongbai></Kongbai>
        <SelectTabsList />
        <Bubble.Common />
      </>
    )
  } else {
    return <></>
  }
}
const Kongbai = styled.div`
  padding-top: 4rem;
`
