import { createContext, useState, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { api, createSession } from '../services/api'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    const formattedToken = token ? token.replace(/["]/g, '') : null

    if (recoveredUser && token) {
      setUser(JSON.parse(recoveredUser))
      api.defaults.headers.Authorization = `Bearer ${formattedToken}`
    }

    delay(1000)

    setLoading(false)
  }, [])

  const login = async (username: string, password: string) => {
    const response = await createSession(username, password)

    const loggedUser = response.data.userReturn.user
    const token = response.data.session.token

    api.defaults.headers.Authorization = `Bearer ${token}`

    localStorage.setItem('user', JSON.stringify(loggedUser))
    localStorage.setItem('token', JSON.stringify(token))

    setUser(loggedUser)
    navigate('/triagem')
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    api.defaults.headers.Authorization = null

    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
