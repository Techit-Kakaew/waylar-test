import axios from "axios"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
})

api.interceptors.request.use(
  (config) => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    }
    return config
  },
  (response) => {
    return response
  }
)
export const httpClient = api
