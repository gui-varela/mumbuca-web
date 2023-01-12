import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { AuthContext } from '../../contexts/auth'
import { Container, ButtonArea } from './styles'
import { IdentificationCard, Headset, ArrowFatLinesRight } from 'phosphor-react'

export function Home() {
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)

  return (
    <Container>
      <Header />
      <main>
        <h1>
          Olá, <span>{user.username}</span>!
        </h1>
        <p>Escolha o serviço que deseja realizar</p>
        <ButtonArea>
          <button onClick={() => navigate('/triagem')}>
            <div>
              <IdentificationCard size={36} weight="fill" />
              Iniciar Triagem
            </div>
          </button>
          <button>
            <div>
              <Headset size={34} weight="fill" />
              Iniciar Atendimento
            </div>
          </button>
          <button className="fila"  onClick={() => navigate('/fila')}>
            <div>
              Fila de Atendimento
              <ArrowFatLinesRight size={20} weight="fill" />
            </div>
          </button>
        </ButtonArea>
      </main>
    </Container>
  )
}
