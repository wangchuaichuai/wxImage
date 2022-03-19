import * as action_type from '../actions/user_action/action_type'

interface IState {
  login: Boolean
  isloading: Boolean
  name?: String
  pwd?: String
  token?: String
  userInfo?: Object
}

const defaultState: IState = {
  login: false,
  isloading: false,
  name: '',
  pwd: '',
  token: '',
  userInfo: {},
}
function imageReducers(state = defaultState, action: any) {
  switch (action.type) {
    case action_type.LOGIN_IN:
      return {
        ...state,
        ...action.payload,
      }
    case action_type.LOGIN_OUT:
      return {
        ...state,
        ...action.payload,
      }
    case action_type.LOGIN_LOADING:
      return {
        ...state,
        ...action.payload,
      }
    case action_type.LOGIN_NOLOAD:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default imageReducers
