import { useState, useEffect } from 'react'
import { Documents, CustomerInfo, CheckboxDiv } from './styles'

import { getCustomerTypes } from '../../services/api'

import { RadixCheckbox } from '../RadixCheckbox'
import { LoadingDialog } from '../LoadingDialog'

export function CustomerForm() {
  const [checked, setChecked] = useState(false)
  const [customerTypes, setCustomerTypes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const response = await getCustomerTypes()
      setCustomerTypes(response.data)
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return <LoadingDialog />
  }

  function handleRendering(checked: boolean) {
    if (!checked) {
      return (
        <CustomerInfo>
          <h2>
            <span>1. </span>Nome
          </h2>
          <input type="text" name="" id="" />

          <Documents>
            <div className="CPF">
              <h2>
                <span>2. </span>CPF
              </h2>
              <input type="text" name="" id="" />
            </div>
            <div className="identidade">
              <h2>
                <span>3. </span>Identidade
              </h2>
              <input type="text" name="" id="" />
            </div>
          </Documents>

          <h2>
            <span>4. </span>E-mail
          </h2>
          <input type="text" name="" id="" />

          <h2>
            <span>5. </span>Data de nascimento
          </h2>
          <input type="date" name="" id="" />

          <h2>
            <span>3. </span>Tipo de cliente
          </h2>

          <div>
            {customerTypes.map((customerType) => (
              <CheckboxDiv key={customerType.id}>
                <RadixCheckbox></RadixCheckbox>
                <label>{customerType.name}</label>
              </CheckboxDiv>
            ))}
          </div>
        </CustomerInfo>
      )
    } else {
      return (
        <CustomerInfo>
          <div className="CPF">
            <h2>
              <span>1. </span>Cliente
            </h2>
            <input placeholder="CPF ou Nome" type="text" name="" id="" />
          </div>
        </CustomerInfo>
      )
    }
  }

  return (
    <>
      <CheckboxDiv onClick={() => setChecked(!checked)}>
        <RadixCheckbox data-state={checked}></RadixCheckbox>
        <label>Novo cliente</label>
      </CheckboxDiv>

      {handleRendering(!checked)}
    </>
  )
}
