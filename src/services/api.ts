import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
})

export const createSession = async (username: string, password: string) => {
  return await api.post('/sessions', { username, password })
}

export const getCustomerTypes = async () => {
  return await api.get('/customer-type')
}

export const getAgencies = async () => {
  return await api.get('/agency')
}
