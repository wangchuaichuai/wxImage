import { BrowserRouter as Router, useRoutes, Navigate } from 'react-router-dom'
import Index from 'components/Index/Index'
import ToDo from 'components/ToDo/todo'
import Msg from 'components/Msg/msg'
import Personal from 'components/Personal/personal'
import SearchPage from 'pages/Search/searchPage'
import ImgDetail from 'pages/Detail/ImgDetail'
import UserDetail from 'pages/Detail/UserDetail'
import Login from 'pages/Login/Login'
import SearchResult from 'pages/Search/searchResult'
import { lazy } from 'react'
const Home = lazy( () => import('pages/Home/home'))

const RouteList = () => {
  const routes = useRoutes([
    //   index首页
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '',
          
          element: <Index />,
        },
        {
          path: 'todo',
          element: <ToDo />,
        },
        {
          path: 'msg',
          element: <Msg />,
        },
        {
          path: 'personal',
          element: <Personal />,
        },
      ],
    },
    // 登录页
    {
      path: 'login',
      element: <Login />,
    },
    // 搜索页
    {
      path: '/search',
      element: <SearchPage />,
    },
    // 图片详情页
    {
      path: '/detail',
      element: <ImgDetail />,
    },
    //用户页面
    {
      path: '/userdetail/:id',
      element: <UserDetail />,
    },
    // 默认定向到index
    {
      path: '*',
      element: <Navigate to="/" />,
    },
    // 搜索结果页
    {
      path: '/result',
      element: <SearchResult />,
    },
    {
      path: '/resultList',
      element: <SearchResult />,
    },
  ])
  return routes
}

function App() {
  return (
    <div className="App">
      <Router>
        <RouteList />
      </Router>
      {/* <TabShow /> */}
    </div>
  )
}

export default App
