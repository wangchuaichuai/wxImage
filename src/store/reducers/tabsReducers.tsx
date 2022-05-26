import * as action_type from '../../store/actions/tabs_action/action_type'

export interface ITabs {
  tabsName: string
  key: number
}

const initDefault: ITabs = {
  tabsName: '最新',
  key: 1,
}

function changeName(state = initDefault, action: any) {
  switch (action.type) {
    case action_type.CHANGE_TABS_NAME: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case action_type.CHANGE_KEY: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case action_type.INIT_KEY: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state
  }
}

export default changeName
