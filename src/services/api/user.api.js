import { httpClient } from '../HttpClient'

export const getUser = () => httpClient({
  method: 'GET',
  url: 'users'
})