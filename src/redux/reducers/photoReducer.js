import * as type from '../types/photoTypes'

const defaultState = {
  data: null,
  fetching: false,
  message: null
}

const initialState = {
  photo: { ...defaultState },
  album: { ...defaultState },
  albumPhoto: { ...defaultState },
  currentAlbum: 1,
  albumFiltered: null
}

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PHOTO_REQUEST:
      return { ...state, photo: { ...state.photo, fetching: true } }
    case type.GET_PHOTO_SUCCESS:
      return { ...state, photo: { ...state.photo, data: action.payload, fetching: false } }
    case type.GET_PHOTO_FAILURE:
      return { ...state, photo: { ...state.photo, fetching: false, message: action.message } }
    case type.GET_ALBUM_REQUEST:
      return { ...state, album: { ...state.album, fetching: true } }
    case type.GET_ALBUM_SUCCESS:
      return { ...state, album: { ...state.album, data: action.payload, fetching: false } }
    case type.GET_ALBUM_FAILURE:
      return { ...state, album: { ...state.album, fetching: false, message: action.message } }
    case type.GET_ALBUM_PHOTO_BY_ID_REQUEST:
      return { ...state, albumPhoto: { ...state.albumPhoto, fetching: true } }
    case type.GET_ALBUM_PHOTO_BY_ID_SUCCESS:
      return { ...state, albumPhoto: { ...state.albumPhoto, data: action.payload, fetching: false } }
    case type.GET_ALBUM_PHOTO_BY_ID_FAILURE:
      return { ...state, albumPhoto: { ...state.albumPhoto, fetching: false, message: action.message } }
    case type.SET_CURRENT_ALBUM:
      return { ...state, currentAlbum: action.payload }
    case type.SET_ALBUM_FILTERED:
      return { ...state, albumFiltered: action.payload }
    default:
      return state
  }
}

export default photoReducer
