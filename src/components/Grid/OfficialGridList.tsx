import React, { useEffect, useState } from 'react'
import { Grid, Image, InfiniteScroll, DotLoading } from 'antd-mobile'
import styled from '@emotion/styled'
import api from '../../api/getData'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../store/actions/tabs_action/action'
import { IState } from '../../components/Hot/hot'
import { useNavigate } from 'react-router'

let title = ''

export default React.memo(function OfficialGridList(props: any) {
  console.log('我被render执行了', props.type)
  let navigate = useNavigate()
  const [dataList, setData] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)
  let count = useSelector((state: any) => state.tabsReducers.key)
  let dispatch = useDispatch()
  let type = props.type
  //   let count = props.count

  async function moreLoad(type: string) {
    if (type === '最新') {
      const { data: res } = await api.getNewList(1, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '精选') {
      const { data: res } = await api.getNewList(2, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '小姐姐') {
      const { data: res } = await api.getNewList(3, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '动漫卡通') {
      const { data: res } = await api.getNewList(4, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '生灵万物') {
      const { data: res } = await api.getNewList(5, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '小清新') {
      const { data: res } = await api.getNewList(6, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '风景') {
      const { data: res } = await api.getNewList(7, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '星空') {
      const { data: res } = await api.getNewList(8, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '游戏') {
      const { data: res } = await api.getNewList(9, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '激情四射') {
      const { data: res } = await api.getNewList(10, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '主打颜色') {
      const { data: res } = await api.getNewList(11, count)
      dispatch(action.changeKey(count + 1))
      return res.data ? res.data : []
    } else if (type === '搜索') {
      let res: ReturnType<any> = []
      const { data: res1 } = await api.getNewList(1, count)
      const { data: res2 } = await api.getNewList(2, count)
      const { data: res3 } = await api.getNewList(3, count)
      const { data: res4 } = await api.getNewList(4, count)
      const { data: res5 } = await api.getNewList(5, count)
      const { data: res6 } = await api.getNewList(6, count)
      if (res1.code === 200) {
        res = [...res, ...res1.data]
      }
      if (res2.code === 200) {
        res = [...res, ...res2.data]
      }
      if (res3.code === 200) {
        res = [...res, ...res3.data]
      }
      if (res4.code === 200) {
        res = [...res, ...res4.data]
      }
      if (res5.code === 200) {
        res = [...res, ...res5.data]
      }
      if (res6.code === 200) {
        res = [...res, ...res6.data]
      }
      dispatch(action.changeKey(count + 1))
      return res
    } else {
      return []
    }
  }

  async function loadMore() {
    if (title !== type) {
      title = type
      dispatch(action.initKey())
    } else {
      const append = await moreLoad(type)
      await setData((val) => [...val, ...append])
      if (append.length === 0) {
        setHasMore(false)
        dispatch(action.initKey())
      }
    }
  }

  const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
    return (
      <>
        {hasMore ? (
          <>
            <span>Loading</span>
            <DotLoading />
          </>
        ) : (
          <span>--- 人家也是有底线的 ---</span>
        )}
      </>
    )
  }
  function toImg(list: IState) {
    navigate('/detail', {
      state: {
        url: list.url,
        userinfo: list.userinfo,
        urlName: list.urlName,
      },
    })
  }

  return (
    <>
      <Grid columns={3} gap={8}>
        {/* 热门图片 */}
        {dataList.map((item: any, index: any) => (
          <Grid.Item key={index}>
            <ListImage
              key={index}
              onClick={() => toImg(item)}
              fit="fill"
              src={item.url}
            />
          </Grid.Item>
        ))}
      </Grid>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <InfiniteScrollContent hasMore={hasMore} />
      </InfiniteScroll>
    </>
  )
})

const ListImage = styled(Image)`
  --width: 6.25rem;
  margin: 0.5rem 0.425rem;
  --height: 11.2rem;
  border-radius: 1.3rem;
`
