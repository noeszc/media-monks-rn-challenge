import axios from 'axios'

const API_BASE_URL = 'https://my-json-server.typicode.com/noeszc/monks-photos'

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})

export default client
