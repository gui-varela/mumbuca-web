import { HeaderContainer, HeaderContent } from './styles'

import { useContext, useEffect, useState } from 'react'

import { AuthContext } from '../../contexts/auth'

import logoImg from '../../assets/logo-banco-mumbuca.svg'
import { SignOut, ArrowLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)

  const [currentURL, setCurrentURL] = useState('')
  const [pageName, setPageName] = useState('')

  useEffect(() => {
    const recoveredCurrentURL = document.URL

    if (recoveredCurrentURL) {
      setCurrentURL(recoveredCurrentURL)
    }

    console.log(recoveredCurrentURL)

    const urlWhithoutHttp = currentURL.replace('http://', '')
    const separetedStrings = urlWhithoutHttp.split('/')
    const page = separetedStrings[1]

    console.log(page)

    if (page) {
      const pagege =
        page.toString()[0].toUpperCase() + page.toString().substring(1)
      setPageName(pagege)
    } else {
      setPageName('Home')
    }
  }, [currentURL])

  const goBack = () => {
    window.history.back()
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="goBack" onClick={() => goBack()}>
          {pageName === 'Home' ? (
            <p></p>
          ) : (
            <>
              <ArrowLeft weight="bold" />
              <p>{pageName}</p>
            </>
          )}
        </div>
        <img onClick={() => navigate('/')} src={logoImg} alt="" />
        <div onClick={handleLogout} className="signOut">
          <p>sair</p>
          <SignOut weight="bold" />
        </div>
      </HeaderContent>
    </HeaderContainer>
  )
}
