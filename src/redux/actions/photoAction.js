import * as type from '../types/photoTypes'
import * as api from 'services/api/photo.api'

export const getPhoto = () => async (dispatch) => {
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

export const getAlbum = () => async (dispatch) => {
  try {
    dispatch({
      type: type.GET_ALBUM_REQUEST
    })
    const { data } = await api.getAlbum()
    dispatch({
      type: type.GET_ALBUM_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: type.GET_ALBUM_FAILURE,
      message: err
    })
  }
}

export const getAlbumPhotoById = (albumId) => async (dispatch) => {
  try {
    dispatch({
      type: type.GET_ALBUM_PHOTO_BY_ID_REQUEST
    })
    const { data } = await api.getAlbumPhotoById(albumId)
    dispatch({
      type: type.GET_ALBUM_PHOTO_BY_ID_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: type.GET_ALBUM_PHOTO_BY_ID_FAILURE,
      message: err
    })
  }
}

export const nextAlbum = () => (dispatch, getState) => {
  const numberOfAlbum = getState().photoReducer.album.data?.length
  let currentAlbum = getState().photoReducer.currentAlbum
  if(currentAlbum < numberOfAlbum) {
    currentAlbum += 1 
  }
  dispatch({
    type: type.SET_CURRENT_ALBUM,
    payload: currentAlbum
  })
}

export const prevAlbum = () => (dispatch, getState) => {
  const numberOfAlbum = getState().photoReducer.album?.length
  let currentAlbum = getState().photoReducer.currentAlbum
  if(currentAlbum > numberOfAlbum) {
    currentAlbum -= 1
  }
  dispatch({
    type: type.SET_CURRENT_ALBUM,
    payload: currentAlbum
  })
}