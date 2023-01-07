import { Container, LoginContainer } from './styles'
import { useState, useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

import logoImg from '../../assets/logo-banco-mumbuca.svg'

export function Login() {
  const { login } = useContext(AuthContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    login(username, password)
  }

  return (
    <Container>
      <LoginContainer>
        <img src={logoImg} alt="" srcSet="" />
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">usuário</label>
          <input
            type="text"
            name="username"
            id=""
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label htmlFor="username">senha</label>
          <input
            type="password"
            name="username"
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button>ENTRAR</button>
          <a href="http://">Esqueci minha senha</a>
        </form>
      </LoginContainer>
    </Container>
  )
}
