import { HeaderContainer, HeaderContent } from './styles'

import { useContext } from 'react'

import { AuthContext } from '../../contexts/auth'

import logoImg from '../../assets/logo-banco-mumbuca.svg'
import { SignOut, ArrowLeft } from 'phosphor-react'

export function Header() {
  const { logout } = useContext(AuthContext)

  const handleLogout = () => {
    logout()
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="goBack">
          <ArrowLeft weight="bold" />
          <p>Triagem</p>
        </div>
        <img src={logoImg} alt="" />
        <div onClick={handleLogout} className="signOut">
          <p>sair</p>
          <SignOut weight="bold" />
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
