import React from 'react'
import { RightOutline } from 'antd-mobile-icons'
import styled from '@emotion/styled'
import { Image } from 'antd-mobile'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../api/getData'
import { useNavigate } from 'react-router'
// 热门推荐壁纸

export interface IState {
  userinfo?: IInfo
  url: string
  urlName?: string
}
interface IInfo {
  // 中文名
  name: string
  time: string
  // 英文名
  cover: string
  img: string
}
export default function Hot() {
  let [list, setList] = useState<Array<IState>>([
    {
      url: '',
      urlName: '',
      userinfo: {
        name: '',
        time: '',
        cover: '',
        img: '',
      },
    },
  ])
  const toHotMore = () => {
    navigator('/resultList')
  }
  const navigator = useNavigate()
  function toImg(list: IState) {
    navigator('/detail', {
      state: {
        url: list.url,
        userinfo: list.userinfo,
        urlName: list.urlName,
      },
    })
  }
  useEffect(() => {
    ;(async function () {
      const { data: res } = await api.getHotList()
      if (res.code === 200) {
        setList(res.data)
      }
    })()
  }, [])
  return (
    <>
      {/* 热门标题和更多按钮 */}
      <FlexDiv>
        <div>热门推荐</div>
        <RightDiv onClick={toHotMore}>
          更多
          <RightOutline />
        </RightDiv>
      </FlexDiv>
      <HotDiv>
        {/* 热门图片 */}
        <ListDiv>
          {list.map((item, index) => (
            <ListImage
              onClick={() => toImg(item)}
              lazy
              key={index}
              fit="cover"
              src={item.url}
            />
          ))}
        </ListDiv>
      </HotDiv>
    </>
  )
}
const HotDiv = styled.div`
  overflow-y: hidden;
  overflow-x: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`
const ListDiv = styled.div`
  display: flex;
  width: fit-content;
`
const ListImage = styled(Image)`
  --width: 6.25rem;
  margin: 1rem 0.625rem;
  --height: 11.2rem;
  border-radius: 1.3rem;
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
const RightDiv = styled.div`
  color: #888888;
  font-size: 0.7rem;
`
