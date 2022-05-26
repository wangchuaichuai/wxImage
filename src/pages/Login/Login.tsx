import {
  LeftOutline,
  UndoOutline,
  BellOutline,
  SearchOutline,
} from 'antd-mobile-icons'
import { Modal } from 'antd-mobile'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import api from '../../api/getData'
import * as action from '../../store/actions/user_action/action'
import { useEffect } from 'react'
import React from 'react'
require('./login.css')

export default function Login() {
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const selector = useSelector((state: any) => state.userReducers)
  let name = ''
  let pwd = ''
  const getName = (e: any) => {
    name = e.target.value
  }
  const getPwd = (e: any) => {
    pwd = e.target.value
  }
  useEffect(() => {
    console.log(selector.name)
  }, [selector.name])
  const toHome = async (name: String, pwd: String) => {
    if (selector.name !== name && selector.pwd !== pwd) {
      await dispatch(action.loading())
    }
    if (selector.token === '' || (name !== '' && pwd !== '')) {
      const { data: res } = await api.getDate(name, pwd)
      let uName = ''
      let uPwd = ''
      let token = {}
      let userInfo = {}
      if (res.code === 200) {
        uName = res.data.userName
        uPwd = res.data.userPwd
        token = res.data.token
        userInfo = res.data.userInfo
      }
      sessionStorage.setItem("data",JSON.stringify(res.data))
      await dispatch(action.Login(uName, uPwd, token,userInfo))
      await dispatch(action.Noloading())
      if (selector.isloading === false) {
        Modal.alert({
          content: `登录成功！欢迎${selector.name}`,
          onConfirm: () => {
            navigate('/')
          },
        })
      } else {
        Modal.alert({
          content: '密码错误',
        })
      }
    } else {
      Modal.alert({
        content: '您还没有登录哦',
      })
    }
  }
  return (
    <form className="form">
      <div className="segment">
        <h1 className="h1h">Sign in</h1>
      </div>
      <label className="label1">
        <input
          onChange={getName}
          className="textInput"
          type="text"
          placeholder="Email Address"
        />
      </label>
      <label className="label1">
        <input
          onChange={getPwd}
          className="pwdInput"
          type="password"
          placeholder="Password"
        />
      </label>
      <button className="red" type="button" onClick={() => toHome(name, pwd)}>
        <i className="icon ion-md-lock"></i> Log in
      </button>
      <div className="segment">
        <button className="unit" type="button">
          <LeftOutline />
        </button>
        <button className="unit" type="button">
          <UndoOutline />
        </button>
        <button className="unit" type="button">
          <BellOutline />
        </button>
      </div>
      <div className="input-group">
        <label className="label2">
          <input
            className="bottomInput"
            type="text"
            placeholder="Email Address"
          />
        </label>
        <button className="unit" type="button">
          <SearchOutline />
        </button>
      </div>
    </form>
  )
}
