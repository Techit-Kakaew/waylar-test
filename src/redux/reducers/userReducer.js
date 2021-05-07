import * as type from '../types/userTypes'

const defaultState = {
  data: null,
  fetching: false,
  message: null
}

const initialState = {
  users: { ...defaultState }
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_USER_REQUEST:
      return { ...state, users: { ...state.users, fetching: true } }
    case type.GET_USER_SUCCESS:
      return { ...state, users: { ...state.users, data: action.payload, fetching: false } }
    case type.GET_USER_FAILURE:
      return { ...state, users: { ...state.users, fetching: false, message: action.message } }
    default:
      return state
  }
}

export default photoReducer
