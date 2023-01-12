import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
})

export const createSession = async (username: string, password: string) => {
  return await api.post('/sessions', { username, password })
}

// export const createTriage = async ()

export const getCustomerByCPF = async (cpf: string) => {
  return await api.get(`/customer?cpf=${cpf}`)
}

export const getCustomerTypes = async () => {
  return await api.get('/customer-type')
}

export const getAttendanceTypes = async () => {
  return await api.get('/attendance-type')
}

export const getAgencies = async () => {
  return await api.get('/agency')
}

export const getForwardings = async () => {
  return await api.get('/forwarding')
}

export const getQueueByAgency = async (id: string) => {
  return await api.get(`/triage?agency=${id}`)
}
