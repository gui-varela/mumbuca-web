import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { AddressData, AddressField, Container, CheckboxDiv } from './styles'
import neighborhoods from '../../assets/bairros-list.json'

interface AddressResponse {
  cep: string
  logradouro?: string
  complemento?: string
  bairro?: string
  localidade?: string
  uf?: string
  ibge?: string
  gia?: string
  ddd?: string
  siafi?: string
}

export function AddressForm() {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<AddressResponse>()
  const [checked, setChecked] = useState(true)

  async function loadAddress(cep: string) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)

    if (response) {
      const data = await response.json()
      setAddress(data)
    }
  }

  function handleInputText(type?: string) {
    if (!address) {
      return <p></p>
    }
    if (!type) {
      return <input type="text" name="" id="" />
    }
    return <p>{type}</p>
  }

  function handleRendering(checked: boolean) {
    if (checked) {
      return (
        <AddressData>
          <AddressField className="uf">
            <h3>Estado</h3>
            <p>RJ</p>
          </AddressField>

          <AddressField className="cidade">
            <h3>Cidade</h3>
            <p>Maricá</p>
          </AddressField>

          <AddressField className="bairro">
            <h3>Bairro</h3>
            <select name="" id="">
              {neighborhoods.bairros.map((neighborhood) => (
                <option value={neighborhood} key={neighborhood}>
                  {neighborhood}
                </option>
              ))}
            </select>
          </AddressField>

          <AddressField className="none"></AddressField>

          <AddressField className="logradouro">
            <h3>Logradouro</h3>
            {handleInputText(address?.logradouro)}
          </AddressField>

          <AddressField className="numero">
            <h3>Número</h3>
            <input type="text" name="" id="" />
          </AddressField>

          <AddressField className="complemento">
            <h3>Complemento</h3>
            <input type="text" name="" id="" />
          </AddressField>
        </AddressData>
      )
    } else {
      return (
        <AddressData>
          <AddressField className="cep">
            <h3>CEP</h3>
            <input
              type="text"
              name=""
              id="cep"
              value={cep}
              onChange={(ev) => setCep(ev.target.value)}
            />
          </AddressField>

          <AddressField className="uf">
            <h3>Estado</h3>
            <p>{address?.uf}</p>
          </AddressField>

          <AddressField className="cidade">
            <h3>Cidade</h3>
            <p>{address?.localidade}</p>
          </AddressField>

          <AddressField className="bairro">
            <h3>Bairro</h3>
            {handleInputText(address?.bairro)}
          </AddressField>

          <AddressField className="logradouro">
            <h3>Logradouro</h3>
            {handleInputText(address?.logradouro)}
          </AddressField>

          <AddressField className="numero">
            <h3>Número</h3>
            <input type="text" name="" id="" />
          </AddressField>

          <AddressField className="complemento">
            <h3>Complemento</h3>
            <input type="text" name="" id="" />
          </AddressField>
        </AddressData>
      )
    }
  }

  useEffect(() => {
    if (cep.length === 8) {
      loadAddress(cep)
    }
  }, [cep])

  return (
    <Container>
      <h2>
        <span>6. </span>Endereço
      </h2>

      <CheckboxDiv>
        <Checkbox.Root
          onClick={() => {
            setChecked(!checked)
          }}
          checked={checked}
          className="CheckboxRoot"
        >
          <Checkbox.Indicator className="CheckboxIndicator">
            <Check size={16} weight="bold" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span>Morador de Maricá</span>
      </CheckboxDiv>

      {handleRendering(checked)}
    </Container>
  )
}
