import * as type from '../types/photoTypes'

const defaultState = {
    data: null,
    fetching: false,
    message: null
}

const initialState = {
    photo: {...defaultState}
}

const photoReducer = (state = initialState, action) => {
    switch(action.type) {
        case type.GET_PHOTO_REQUEST:
            return { ...state, photo: { ...state.photo, fetching: true } }
        case type.GET_PHOTO_SUCCESS:
            return { ...state, photo: { ...state.photo, data: action.payload, fetching: false } }
        case type.GET_PHOTO_FAILURE:
            return { ...state, photo: { ...state.photo, fetching: false, message: action.message } }
        default:
            return state
    }
}

export default photoReducer