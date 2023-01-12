import { useContext } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'

import { Triage } from './pages/Triage'
import { Login } from './pages/Login'
import { AuthProvider, AuthContext } from './contexts/auth'
import { LoadingDialog } from './components/LoadingDialog'
import { Home } from './pages/Home'

export const AppRoutes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext)

    if (loading) {
      return (
        <>
          <LoadingDialog />
          <div>CARREGANDO...</div>
          <Login />
        </>
      )
    }

    if (!authenticated) {
      return <Navigate to="/login" />
    }

    return children
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/triagem"
            element={
              <Private>
                <Triage />
              </Private>
            }
          />
          <Route
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
