import React from 'react'
import styled from '@emotion/styled'
import { RightOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import * as action from 'store/actions/tabs_action/action'

export default function Official() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toHotMore = () => {
    dispatch(action.initKey())
    navigate('/resultList')
  }
  return (
    <>
      {/* 官方推荐标题和更多按钮 */}
      <FlexDiv>
        <div>官方推荐</div>
        <RightDiv onClick={toHotMore}>
          更多
          <RightOutline />
        </RightDiv>
      </FlexDiv>
    </>
  )
}

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
  margin-top: 1.2rem;
  font-size: 1rem;
`
const RightDiv = styled.div`
  color: #888888;
  font-size: 0.7rem;
`
