import { Container, Agency, AgencyButton } from './styles'
import { Hexagon } from 'phosphor-react'
import { CustomerForm } from '../CustomerForm'

import { getAgencies, getCustomerTypes } from '../../services/api'
import { LoadingDialog } from '../LoadingDialog'
import { useEffect, useState } from 'react'

export function TriageForm() {
  const [agencies, setAgencies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const response = await getAgencies()
      setAgencies(response.data)
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return <LoadingDialog />
  }

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms))

  async function handleTitleNumber() {
    await delay(20)
    let counter = 0
    const titles = document.querySelectorAll('h2')

    while (counter < titles.length) {
      const titleNumberSpan = titles[counter].querySelector('span')
      if (titleNumberSpan) {
        titleNumberSpan.innerText = `${counter + 1}. `
      }

      counter++
    }
  }

  return (
    <Container
      onChange={() => {
        handleTitleNumber()
      }}
    >
      <form action="">
        <h1>Formulário de Triagem</h1>

        <div className="divider">
          <div className="line"></div>
          <Hexagon color="#E30613" />
          <div className="line"></div>
        </div>

        <CustomerForm />

        <h2>
          <span>2. </span>Agência
        </h2>
        <Agency>
          {agencies.map((agency) => (
            <AgencyButton key={agency.id} value={agency.name}>
              {agency.name}
            </AgencyButton>
          ))}
        </Agency>

        <button type="submit">REGISTRAR ATENDIMENTO</button>
      </form>
    </Container>
  )
}
