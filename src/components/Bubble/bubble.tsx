import React from 'react'
import { FloatingBubble } from 'antd-mobile'
import { UpOutline, EyeInvisibleOutline } from 'antd-mobile-icons'
import styled from '@emotion/styled'
import { scrollTo } from 'scroll-js'

function Common() {
  const onClick = () => {
    // window.scrollTo({
    //   behavior: 'smooth',
    //   top: 0,
    // })
    scrollTo(window, { top: 0 })
  }
  return (
    <>
      <FloatingBubbleStyled axis="xy" magnetic="x" onClick={onClick}>
        <UpOutline fontSize={20} />
      </FloatingBubbleStyled>
    </>
  )
}

function Detail() {
  return (
    <>
      <FloatingBubbleStyled axis="xy" magnetic="x">
        <EyeInvisibleOutline fontSize={20} />
      </FloatingBubbleStyled>
    </>
  )
}

const FloatingBubbleStyled = styled(FloatingBubble)`
  --initial-position-bottom: 5rem;
  --initial-position-right: 1.5rem;
  --edge-distance: 1.5rem;
`
export default {
  Common,
  Detail,
}
