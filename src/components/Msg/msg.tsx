import React from 'react'
import styled from '@emotion/styled'
import { Empty, Image, Modal } from 'antd-mobile'
import { QuestionCircleOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router'
import Bubble from '../../components/Bubble/bubble'
import { useEffect } from 'react'
import api from '../../api/getData'
import { useState } from 'react'

interface IProp {
    title: string
    url: string
    cover: string
}
export default function Msg() {
  let navigate = useNavigate()
  let [arr, setArr] = useState<Array<IProp>>([])
  useEffect(() => {
    ;(async function () {
      const { data: res } = await api.getTogether()
      if (res.code === 200) {
        setArr(res.data)
      }
    })()
  })
  if (arr.length === 0) {
    return (
      <>
        {/* 层叠阴影 */}
        <div>
          {/* <BlackDDiv />
          <BlackDiv /> */}
          <DDIV>
            {/* 关联操作 */}
            <EmptyStyle
              style={{ padding: '64px 0' }}
              image={
                <QuestionCircleOutline
                  style={{
                    color: 'var(--adm-color-light)',
                    fontSize: 48,
                  }}
                />
              }
              description="暂无关联应用"
            />
            <Bubble.Common />
          </DDIV>
        </div>
      </>
    )
  } else {
    return (
      <>
        {/* 层叠阴影 */}
        <div>
          {/* <BlackDDiv />
          <BlackDiv /> */}
          <DDIV>
            <DDDiv />
            {/* 关联操作 */}
            {arr.map((item, index) => (
              <div key={index} onClick={() => {
                  Modal.alert({
                      content: item.title,
                      onConfirm: () => {
                          window.location.href = item.url
                      }
                  })
              }}>
                <ImageDiv key={index} fit="cover" src={item.cover}></ImageDiv>
              </div>
            ))}
            <Bubble.Common />
            <KongDiv></KongDiv>
          </DDIV>
        </div>
      </>
    )
  }
}
const DDDiv = styled.div`
  padding-top: 0.825rem;
`
const EmptyStyle = styled(Empty)`
  background-color: #3a3d6b;
  margin-bottom: 1rem;
`
const ImageDiv = styled(Image)`
  width: 18.75rem;
  height: 12.5rem;
  border-radius: 0.9375rem;
  /* padding-top: 2.25rem; */
  margin: 1rem auto;
`

const KongDiv = styled.div`
  width: 100%;
  height: 5.25rem;
`

const DDIV = styled.div`
  width: 100%;
  border-radius: 0.25rem;
  background-color: #2d355b;
  color: #cccccc;
  height: 100%;
  margin-top: -1.5rem;
`
