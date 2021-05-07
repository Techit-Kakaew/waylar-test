import * as type from '../types/userTypes'
import * as api from 'services/api/user.api'

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: type.GET_USER_REQUEST
    })
    const { data } = await api.getUser()
    dispatch({
      type: type.GET_USER_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: type.GET_USER_FAILURE,
      message: err
    })
  }
}