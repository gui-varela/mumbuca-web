import { useState, useEffect } from 'react'
import { Documents, CustomerInfo, CheckboxDiv, CpfInput } from './styles'
import { CheckCircle, MagnifyingGlass, XCircle } from 'phosphor-react'

import { getCustomerTypes, getCustomerByCPF } from '../../services/api'

import { RadixCheckbox } from '../RadixCheckbox'
import { LoadingDialog } from '../LoadingDialog'

export function CustomerForm() {
  const [checked, setChecked] = useState(false)
  const [cpf, setCPF] = useState('')
  const [customerTypes, setCustomerTypes] = useState([])
  const [loading, setLoading] = useState(true)
  const [customerInfo, setCustomerInfo] = useState('')

  const errorMessage = 'Digite o CPF corretamente.'

  useEffect(() => {
    ;(async () => {
      const response = await getCustomerTypes()
      setCustomerTypes(response.data)
      setLoading(false)
    })()
  }, [])

  const handleCustomer = async () => {
    console.log(cpf)
    if (cpf) {
      try {
        const customer = await getCustomerByCPF(cpf)
        console.log(customer)
        if (customer) {
          setCustomerInfo(`${customer.data.name} (CPF: ${customer.data.cpf})`)
        }
      } catch {
        setCustomerInfo(errorMessage)
      }
    } else {
      setCustomerInfo(errorMessage)
    }
  }

  const handleCustomerContent = () => {
    if (customerInfo === '') {
      return <></>
    }

    if (customerInfo === errorMessage) {
      return (
        <p className="customerError">
          <XCircle weight="bold" size={20} />
          {customerInfo}
        </p>
      )
    }

    return (
      <p className="customerInfo">
        <CheckCircle weight="bold" size={20} />
        {customerInfo}
      </p>
    )
  }

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
                <RadixCheckbox name></RadixCheckbox>
                <label>{customerType.name}</label>
              </CheckboxDiv>
            ))}
          </div>
        </CustomerInfo>
      )
    } else {
      return (
        <CustomerInfo>
          <div className="CPFSearch">
            <CpfInput>
              <h2>
                <span>1. </span>Cliente
              </h2>
              <input
                onChange={(e) => setCPF(e.target.value)}
                placeholder="CPF ou Nome"
                type="text"
                name=""
                id=""
              />
            </CpfInput>
            <button type="button" onClick={handleCustomer}>
              <MagnifyingGlass size={20} weight="bold" />
              Buscar
            </button>
          </div>
          <div className="customer">{handleCustomerContent()}</div>
        </CustomerInfo>
      )
    }
  }

  return (
    <>
      <CheckboxDiv
        onClick={() => {
          setChecked(!checked)
          setCustomerInfo('')
        }}
      >
        <RadixCheckbox label="Novo cliente" id="novoCliente"></RadixCheckbox>
      </CheckboxDiv>

      {handleRendering(!checked)}
    </>
  )
}
