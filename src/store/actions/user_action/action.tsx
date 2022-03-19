import * as action_type from './action_type'

export const Login = (name: String, pwd: String, token: Object, userInfo: Object) => {
  return {
    type: action_type.LOGIN_IN,
    payload: {
      name: name,
      login:true,
      pwd: pwd,
      token: token,
      userInfo: userInfo,
    },
  }
}
export const loading = () => {
  return {
    type: action_type.LOGIN_LOADING,
    payload: {
      isloading: true,
    },
  }
}
export const Noloading = () => {
  return {
    type: action_type.LOGIN_NOLOAD,
    payload: {
      isloading: false,
    },
  }
}
export const logout = () => {
  return {
    type: action_type.LOGIN_OUT,
    payload: {
      name: '',
      pwd: '',
      login: false,
      isloading: true,
    },
  }
}
