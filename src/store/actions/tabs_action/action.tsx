import * as action_type from './action_type'

export const changeName = (name: string) => {
  return {
    type: action_type.CHANGE_TABS_NAME,
    payload: {
      tabsName: name,
    },
  }
}

export const changeKey = (key) => {
  return {
    type: action_type.CHANGE_KEY,
    payload: {
      key: key,
    },
  }
}

export const initKey = () => {
  return {
    type: action_type.INIT_KEY,
    payload: {
      key: 1,
    },
  }
}
