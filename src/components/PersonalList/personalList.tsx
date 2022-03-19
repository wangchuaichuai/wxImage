import { Card, Grid, Image, Modal } from 'antd-mobile'
import styled from '@emotion/styled'
import Iconfont from 'components/Iconfont/iconfont'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { IProps, IList, ICollect } from 'pages/Detail/UserDetail'

export default function PersonalList(props) {
  let arr: IProps = props.list
  const selector = useSelector((state: any) => state.userReducers)
  const url = useLocation().pathname
  const navigate = useNavigate()
  function toDetail(list:IList) {
    navigate('/detail', {
      state: {
        url: list.url,
        userinfo: list.userinfo,
        urlName: list.urlName,
      },
    })
  }
  let collect = ''
  if (url === '/personal') {
    collect = '收藏'
  } else {
    collect = 'ta的收藏'
  }
  function toMainPersonal(id: string | number) {
    navigate(`/userdetail/${id}`)
  }
  function AlMsg() {
    Modal.alert({
      content: '修改功能暂不开放哦~',
    })
  }
  if (url === '/personal') {
    return (
      <>
        <CardStyled>
          <DivFirst>
            <div>
              <DivSecond>label</DivSecond>
              <DivThird>{selector.userInfo.label}</DivThird>
            </div>
            <div>
              <DivSecond>like</DivSecond>
              <DivThird>{selector.userInfo.like}</DivThird>
            </div>
            <div>
              <DivSecond>comment</DivSecond>
              <DivThird>{selector.userInfo.comment}</DivThird>
            </div>
          </DivFirst>
        </CardStyled>
        <CollectStyle>
          <CollectDiv>{collect}</CollectDiv>
          <div onClick={AlMsg}>
            <Iconfont.Change />
          </div>
        </CollectStyle>
        <GridStyle columns={2} gap={0}>
          {selector.userInfo.collect.map((item: ICollect, index) => (
            <Grid.Item key={index}>
              <GridList>
                <FillImg
                  onClick={() => toDetail(item.data)}
                  lazy
                  fit="cover"
                  src={item.cover}
                ></FillImg>
                <ListDiv>
                  <CoverName onClick={() => toMainPersonal(item.userId)}>
                    <ListImg lazy src={item.headImg}></ListImg>
                    <NameDiv>{item.name}</NameDiv>
                  </CoverName>
                  <NumDiv>{item.up}</NumDiv>
                </ListDiv>
              </GridList>
            </Grid.Item>
          ))}
        </GridStyle>
      </>
    )
  } else {
    return (
      <>
        <CardStyled>
          <DivFirst>
            <div>
              <DivSecond>label</DivSecond>
              <DivThird>{arr.userInfo.label}</DivThird>
            </div>
            <div>
              <DivSecond>like</DivSecond>
              <DivThird>{arr.userInfo.like}</DivThird>
            </div>
            <div>
              <DivSecond>comment</DivSecond>
              <DivThird>{arr.userInfo.comment}</DivThird>
            </div>
          </DivFirst>
        </CardStyled>
        <CollectStyle>
          <CollectDiv>{collect}</CollectDiv>
          <div onClick={AlMsg}>
            <Iconfont.Change />
          </div>
        </CollectStyle>
        <GridStyle columns={2} gap={0}>
          {arr.userInfo.collect.map((item: ICollect, index) => (
            <Grid.Item key={index}>
              <GridList>
                <FillImg
                  onClick={() => toDetail(item.data)}
                  lazy
                  fit="cover"
                  src={item.cover}
                ></FillImg>
                <ListDiv>
                  <CoverName onClick={() => toMainPersonal(item.userId)}>
                    <ListImg lazy src={item.headImg}></ListImg>
                    <NameDiv>{item.name}</NameDiv>
                  </CoverName>
                  <NumDiv>{item.up}</NumDiv>
                </ListDiv>
              </GridList>
            </Grid.Item>
          ))}
        </GridStyle>
      </>
    )
  }
}
const GridList = styled.div`
  box-shadow: 0.1125rem 0.1125rem 2rem #29315a;
`
const GridStyle = styled(Grid)`
  justify-items: center;
  margin-top: 0.5rem;
`
// 头像和名字的布局
const CoverName = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
`
const ListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 9.375rem;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #6a71bf;
`
const FillImg = styled(Image)`
  width: 9.375rem;
  height: 9.375rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  margin-top: 2rem;
`
const NameDiv = styled.div`
  color: #dadcf0;
  margin-left: 0.5rem;
`
const NumDiv = styled.div`
  color: #cbb1cb;
  margin-right: 0.7rem;
`
const ListImg = styled(Image)`
  border-radius: 6.25rem;
  width: 1.5rem;
  margin: 0.2rem 0;
  height: 1.5rem;
`
const CollectStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: 0 auto;
`
const CollectDiv = styled.div`
  color: #fbfcfc;
  font-size: 1.5rem;
`
const DivFirst = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`
const DivSecond = styled.div`
  font-size: 1rem;
  color: #a0a3bb;
`
const DivThird = styled.div`
  color: #baa8ba;
  font-size: 1rem;
  margin-top: 0.5rem;
  text-shadow: 0 0 0.2rem #baa8ba;
`

const CardStyled = styled(Card)`
  border-radius: 0.5rem;
  width: 85%;
  margin: 3rem auto;
  background-image: linear-gradient(to top, #29397b 20%, #3f436b 90%);
  box-shadow: 0.1125rem 0.1125rem 1.725rem #232d56;
`
