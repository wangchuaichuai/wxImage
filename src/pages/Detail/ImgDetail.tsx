import styled from '@emotion/styled'
import Iconfont from '../../components/Iconfont/iconfont'
import { Button, Rate, FloatingPanel, Image } from 'antd-mobile'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import * as action from '../../store/actions/tabs_action/action'
import axios from 'axios'
// import fs from 'fs'
// import useDownloader from 'react-use-downloader'
import React from 'react'
// var fs = require('fs')
interface IState {
  userinfo: IInfo
  url: string
  urlName: string
}
interface IInfo {
  // 中文名
  name: string
  time: string
  // 英文名
  cover: string
  img: string
}
export default function ImgDetail() {
  //   let { download } = useDownloader()
  let dispatch = useDispatch()
  window.scrollTo(0, 0)
  const Back = () => {
    dispatch(action.initKey())
    window.history.back()
  }
  let { state: Istate }: { state: any } = useLocation()
  let local: IState = Istate

  const anchors = [50, window.innerHeight * 0.4]

  const DownLoadImg = (url: string, e: React.MouseEvent) => {
    // 获取远端图片
    axios({
      method: 'get',
      url: url,
      responseType: 'blob',
      params: {},
    })
      .then((res) => {
        console.log(res)
        let blob = new Blob([res.data])
        let _url = URL.createObjectURL(blob)
        let a = document.createElement('a')
        a.setAttribute('download', `${new Date()}_img.png`)
        a.setAttribute('href', _url)
        a.click()
      })
      .catch((err) => {
        console.log('err出错', err)
      })
    // }).then(function (response) {
    //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    // })
  }
  function getIt(name: string) {
    // https://www.shijuepi.com/uploads/allimg/200821/1-200R1141258.jpg
    let src = 'https://www.shijuepi.com/uploads/allimg/200821/1-200R1141258.jpg'
    let canvas = document.createElement('canvas')
    let image = document.createElement('img')
    image.setAttribute('crossOrigin', 'anonymous')
    image.onload = function (e) {
      canvas.width = image.width
      canvas.height = image.height
      let context = canvas.getContext('2d')
      if (context !== null) {
        context.drawImage(image, 0, 0, image.width, image.height)
      }
      //   if (canvas !== null) {
      //     canvas
      //       .getContext('2d')
      //       .drawImage(image, 0, 0, image.width, image.height)
      //     //   const url = canvas.toDataURL('image/png')
      //     canvas.toBlob((blob) => {
      //       let link = document.createElement('a')
      //       link.href = window.URL.createObjectURL(blob)
      //       link.download = 'fileName'
      //       link.click()
      //     })
      //   }
    }
    image.src = src
  }

  return (
    <Body url={local.url}>
      <CardBack onClick={Back}>
        <BackDiv>
          <Iconfont.Back />
        </BackDiv>
      </CardBack>
      <Card anchors={anchors}>
        <CardHead>
          <div>
            <WorkStyle>{local.urlName}</WorkStyle>
            <NameStyle>{local.userinfo.name}</NameStyle>
            <div>{local.userinfo.cover}</div>
            <TimeStyle>{local.userinfo.time}</TimeStyle>
          </div>
          <ImageStyle src={local.userinfo.img} />
        </CardHead>
        <Rate allowHalf defaultValue={5} />

        <Card_Button_Div>
          <ButtonSmall>
            <Iconfont.Star />
          </ButtonSmall>
          {/* <a href={local.url} download> */}
          <ButtonBig onClick={(e) => DownLoadImg(local.url, e)}>
            Get it !
          </ButtonBig>
          {/* </a> */}
        </Card_Button_Div>
      </Card>
    </Body>
  )
}
// card中上半部分的布局
const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
// 头像的大小设置
const ImageStyle = styled(Image)`
  width: 5.125rem;
  height: 5.125rem;
  border-radius: 6.25rem;
`
// time style
const TimeStyle = styled.div`
  margin-bottom: 2rem;
`
// card中作品名字的样式
const WorkStyle = styled.div`
  font-size: x-large;
`
// card中名字的样式
const NameStyle = styled.div`
  font-size: large;
`
const Card_Button_Div = styled.div`
  display: flex;
  align-items: flex-start;
`
const ButtonSmall = styled(Button)`
  --background-color: #f77f60;
  --border-radius: 6.25rem;
  --border-width: none;
  color: #f7fefa;
  width: 3.625rem;
  font-size: 32;
  margin-top: 1rem;
  margin-left: 0.5rem;
  height: 3.225rem;
  box-shadow: 0 0 0.5rem #f2b5a8;
`
const ButtonBig = styled(Button)`
  --background-color: #f77f60;
  --border-radius: 6.25rem;
  --border-width: none;
  color: #f7fefa;
  width: 14.25rem;
  margin-left: 1.5rem;
  margin-right: 0.5rem;
  margin-top: 1rem;
  font-size: 1.25rem;
  text-shadow: 0 0 0.2rem #f7fefa;
  height: 3.225rem;
  box-shadow: 0 0 0.5rem #f2b5a8;
`
const BackDiv = styled.div`
  margin: auto;
`
const Body = styled.div<{
  url: string
}>`
  background-image: url(${(props) => (props.url ? props.url : '')});
  display: flex;
  background-position: center;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-repeat: no-repeat;
  background-size: cover;
`

const Card = styled(FloatingPanel)`
  /* 设置布局 */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 设置card大小 */
  width: 100%;
  flex-direction: column;
  height: 15.5rem;
  /* 设置阴影 */
  box-shadow: 1.25rem 1.25rem 3.125rem rgba(0, 0, 0, 0.5);
  /* 设置圆角 */
  border-top-left-radius: 0.9375rem;
  border-top-right-radius: 0.9375rem;

  /* 设置上边界和左边界亮，达到层次感 */
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* 设置背景样式 */
  background: rgba(255, 255, 255, 0.1);
  /* 透过card元素模糊化 */
  backdrop-filter: blur(0.425rem);
`
const CardBack = styled.div`
  /* 设置布局 */
  position: relative;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* 设置card大小 */
  width: 2.25rem;
  height: 2.5rem;
  margin-left: 1.3125rem;
  margin-top: 1.3125rem;
  /* 设置阴影 */
  box-shadow: 1.25rem 1.25rem 3.125rem rgba(0, 0, 0, 0.5);
  /* 设置圆角 */
  border-radius: 0.9375rem;
  /* 设置上边界和左边界亮，达到层次感 */
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  /* 设置背景样式 */
  background: rgba(255, 255, 255, 0.1);
  /* 透过card元素模糊化 */
  backdrop-filter: blur(0.425rem);
`
