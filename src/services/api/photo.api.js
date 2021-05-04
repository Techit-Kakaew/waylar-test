import { httpClient } from '../HttpClient'

export const getPhoto = () => httpClient({
    method: 'GET',
    url: 'photos'
})