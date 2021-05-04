import * as type from '../types/photoTypes'
import * as api from 'services/api/photo.api'

export const getPhoto = () => async dispatch => {
    try {
        dispatch({
            type: type.GET_PHOTO_REQUEST
        })
        const { data } = await api.getPhoto()
        dispatch({
            type: type.GET_PHOTO_SUCCESS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: type.GET_PHOTO_FAILURE,
            message: err
        })
    }
}