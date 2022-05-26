import { BrowserRouter as Router, useRoutes, Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import React from 'react'

import Index from '../src/components/Index/Index'
import ToDo from '../src/components/ToDo/todo'
import Msg from '../src/components/Msg/msg'
import Personal from '../src/components/Personal/personal'
import SearchPage from '../src/pages/Search/searchPage'
import ImgDetail from '../src/pages/Detail/ImgDetail'
import UserDetail from '../src/pages/Detail/UserDetail'
import Login from '../src/pages/Login/Login'
import SearchResult from '../src/pages/Search/searchResult'
const Home = lazy(() => import('../src/pages/Home/home'))

const RouteList = () => {
  const routes = useRoutes([
    //   index首页
    {
      path: '/',
      element: (
        <Suspense fallback={<div>loading</div>}>
          <Home />
        </Suspense>
      ),
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
