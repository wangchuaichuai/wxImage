import styled from '@emotion/styled'
import Bubble from '../../components/Bubble/bubble'
import PersonalList from '../../components/PersonalList/personalList'
import { Image } from 'antd-mobile'
import Iconfont from '../../components/Iconfont/iconfont'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import api from '../../api/getData'
import { useState } from 'react'
import React from 'react'

export interface IProps {
  userName: string
  userInfo: IUserInfo
}
interface IUserInfo {
  label: string | number
  like: string | number
  id: string | number
  userP: string
  userCover: string
  comment: string | number
  collect: Array<ICollect>
}
export interface ICollect {
  cover: string
  name: string
  userId: string | number
  up: string | number
  headImg: string
  data: IList
}
export interface IList {
  url: string
  urlName: string
  userinfo: IInfo
}
interface IInfo {
  name: string
  time: string
  cover: string
  img: string
}

export default function UserDetail() {
  const Back = () => {
    window.history.back()
  }
  let [arr, setArr] = useState<IProps>({
    userName: '',
    userInfo: {
      label: '',
      like: '',
      userP: '',
      id: '',
      userCover: '',
      comment: '',
      collect: [
        {
          cover: '',
          name: '',
          userId: '',
          up: '',
          headImg: '',
          data: {
            url: '',
            urlName: '',
            userinfo: {
              name: '',
              time: '',
              cover: '',
              img: '',
            },
          },
        },
      ],
    },
  })
  let userInfo = useParams()
  useEffect(() => {
    ;(async function () {
      const { data: res } = await api.getUser(userInfo.id)
      if (res.code === 200) {
        setArr(res.data)
      }
    })()
  }, [userInfo.id])
  return (
    <>
      <Bg>
        <CardFloat>
          <CardBack onClick={Back}>
            <BackDiv>
              <Iconfont.Back />
            </BackDiv>
          </CardBack>
        </CardFloat>
        <K>
          <div>
            <NameDiv>{arr.userName}</NameDiv>
            <NumDiv>{arr.userInfo.userP}</NumDiv>
          </div>
          <ImageDiv src={arr.userInfo.userCover} />
        </K>
      </Bg>
      {/* ???????????? */}
      <div>
        {/* <BlackDDiv />
        <BlackDiv /> */}
        <DDIV>
          <DDDiv />
          {/* ?????? */}
          <PersonalList list={arr} />
          <KongDiv></KongDiv>
          <Bubble.Common />
        </DDIV>
      </div>
    </>
  )
}
const CardFloat = styled.div`
  position: absolute;
`
// ???????????????
const CardBack = styled.div`
  /* ???????????? */
  position: relative;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* ??????card?????? */
  width: 2.25rem;
  height: 2.5rem;
  margin-left: 1.3125rem;
  margin-top: 1.3125rem;
  /* ???????????? */
  box-shadow: 1.25rem 1.25rem 3.125rem rgba(0, 0, 0, 0.5);
  /* ???????????? */
  border-radius: 0.9375rem;
  /* ???????????????????????????????????????????????? */
  border-top: 0.5px solid rgba(255, 255, 255, 0.5);
  border-left: 0.5px solid rgba(255, 255, 255, 0.5);
  /* ?????????????????? */
  background: rgba(255, 255, 255, 0.1);
  /* ??????card??????????????? */
  backdrop-filter: blur(0.425rem);
`
const BackDiv = styled.div`
  margin: auto;
`
const Bg = styled.div`
  /* background-image: linear-gradient(to left, #e68e8e 0%, #539e9e 90%); */
  background-color: #2d355b;
  height: 7.25rem;
  width: 100%;
`
const KongDiv = styled.div`
  width: 100%;
  height: 6.25rem;
`
const DDDiv = styled.div`
  padding-top: 0.825rem;
`
const DDIV = styled.div`
  width: 100%;
  /* border-radius: 0.25rem; */
  height: 100%;
  background-color: #2d355b;
  color: #cccccc;
  margin-top: -1.5rem;
`
const NameDiv = styled.div`
  font-size: 2rem;
  margin-left: 2rem;
  color: #fff;
  margin-bottom: 0.2rem;
  text-shadow: 0 0 0.3rem #fff;
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

const K = styled.div`
  height: 2.5rem;
  padding-top: 3.625rem;
  display: flex;
  justify-content: space-between;
`
