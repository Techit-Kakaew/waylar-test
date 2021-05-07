import { httpClient } from '../HttpClient'

export const getPhoto = () => httpClient({
  method: 'GET',
  url: 'photos'
})

export const getAlbum = () => httpClient({
  method: 'GET',
  url: 'albums'
})

export const getAlbumPhotoById = (albumId) => httpClient({
  method: 'GET',
  url: `albums/${albumId}/photos`
})