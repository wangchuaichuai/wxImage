import { CapsuleTabs, Toast } from 'antd-mobile'
import OfficialGridList from 'components/Grid/OfficialGridList'
import styled from '@emotion/styled'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { ITabs } from 'store/reducers/tabsReducers'
import { changeName } from 'store/actions/tabs_action/action'

export default function SelectTabsList() {
  const url = useLocation().pathname
  let selector: ITabs = useSelector((state: any) => state.tabsReducers)
  let dispatch = useDispatch()
  // loading操作
  const loadingState = (loading: boolean) => {
    if (loading === true) {
      Toast.show({
        icon: 'loading',
        content: '等人家加载完嘛...',
        duration: 0,
        maskClickable: false,
      })
    } else {
      Toast.clear()
    }
  }

  async function changeList(name: string) {
    loadingState(true)
    dispatch(changeName(name))
    loadingState(false)
  }

  if (url === '/resultList') {
    return (
      <>
        <CapsuleTabStyle
          defaultActiveKey={selector.tabsName}
          onChange={(key) => changeList(key)}
        >
          <CapsuleTabs.Tab destroyOnClose={false} title="最新" key="最新">
            <OfficialGridListStyle type={'最新'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="精选" key="精选">
            <OfficialGridListStyle type={'精选'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="小姐姐" key="小姐姐">
            <OfficialGridListStyle type={'小姐姐'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab
            destroyOnClose={false}
            title="动漫卡通"
            key="动漫卡通"
          >
            <OfficialGridListStyle type={'动漫卡通'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab
            destroyOnClose={false}
            title="生灵万物"
            key="生灵万物"
          >
            <OfficialGridListStyle type={'生灵万物'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="小清新" key="小清新">
            <OfficialGridListStyle type={'小清新'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="风景" key="风景">
            <OfficialGridListStyle type={'风景'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="星空" key="星空">
            <OfficialGridListStyle type={'星空'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="游戏" key="游戏">
            <OfficialGridListStyle type={'游戏'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab
            destroyOnClose={false}
            title="主打颜色"
            key="主打颜色"
          >
            <OfficialGridListStyle type={'主打颜色'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab
            destroyOnClose={false}
            title="激情四射"
            key="激情四射"
          >
            <OfficialGridListStyle type={'激情四射'} />
          </CapsuleTabs.Tab>
        </CapsuleTabStyle>
      </>
    )
  } else {
    return (
      <>
        <CapsuleTabStyle
          defaultActiveKey={selector.tabsName}
          onChange={(key) => changeList(key)}
        >
          <CapsuleTabs.Tab destroyOnClose={false} title="最新" key="最新">
            <OfficialGridListStyle type={'最新'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="精选" key="精选">
            <OfficialGridListStyle type={'精选'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="小姐姐" key="小姐姐">
            <OfficialGridListStyle type={'小姐姐'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab
            destroyOnClose={false}
            title="动漫卡通"
            key="动漫卡通"
          >
            <OfficialGridListStyle type={'动漫卡通'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab
            destroyOnClose={false}
            title="生灵万物"
            key="生灵万物"
          >
            <OfficialGridListStyle type={'生灵万物'} />
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab destroyOnClose={false} title="小清新" key="小清新">
            <OfficialGridListStyle type={'小清新'} />
          </CapsuleTabs.Tab>
        </CapsuleTabStyle>
      </>
    )
  }
}

const CapsuleTabStyle = styled(CapsuleTabs)`
  font-size: 0.875rem;
  .adm-capsule-tabs-header {
    border-bottom: none;
  }
  .adm-scroll-mask-left {
    background: linear-gradient(to right, #3a3d6b, rgba(255, 255, 255, 0));
  }
  .adm-scroll-mask-right {
    background: linear-gradient(to left, #3a3d6b, rgba(255, 255, 255, 0));
  }
`
const OfficialGridListStyle = styled(OfficialGridList)`
  width: 100%;
  margin: 0 6%;
`
