import { CheckboxDiv, Container, RadioItem } from './styles'
import { Hexagon } from 'phosphor-react'
import { CustomerForm } from '../CustomerForm'
import * as z from 'zod'

import {
  getAgencies,
  getAttendanceTypes,
  getForwardings,
} from '../../services/api'
import { LoadingDialog } from '../LoadingDialog'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@radix-ui/react-radio-group'
import { RadixCheckbox } from '../RadixCheckbox'

const triageFormSchema = z.object({
  forwarding: z.string(),
  agency: z.string(),
})

type triageFormInputs = z.infer<typeof triageFormSchema>

export function TriageForm() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<triageFormInputs>({
    resolver: zodResolver(triageFormSchema),
  })

  async function handleTriageInfo(data: triageFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log(data)
  }

  const [agencies, setAgencies] = useState([])
  const [forwardings, setForwardings] = useState([])
  const [attendanceTypes, setAttendanceTypes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const allAgencies = await getAgencies()
      setAgencies(allAgencies.data)

      const allForwardings = await getForwardings()
      setForwardings(allForwardings.data)

      const allAttendanceTypes = await getAttendanceTypes()
      setAttendanceTypes(allAttendanceTypes.data)

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
      <form onSubmit={handleSubmit(handleTriageInfo)}>
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
        <Controller
          control={control}
          name="agency"
          render={({ field }) => {
            return (
              <RadioGroup onValueChange={field.onChange} value={field.value}>
                {agencies.map((agency) => (
                  <RadioItem key={agency.id} value={agency.name}>
                    {agency.name}
                  </RadioItem>
                ))}
              </RadioGroup>
            )
          }}
        />
        <h2>
          <span>3. </span>Tipo de Atendimento
        </h2>
        <div role={'group'}>
          {attendanceTypes.map((attendanceType) => (
            <CheckboxDiv key={attendanceType.id}>
              <RadixCheckbox
                id={attendanceType.id}
                label={attendanceType.name}
              ></RadixCheckbox>
            </CheckboxDiv>
          ))}
        </div>

        <h2>
          <span>4. </span>Encaminhamento
        </h2>
        <Controller
          control={control}
          name="forwarding"
          render={({ field }) => {
            return (
              <RadioGroup onValueChange={field.onChange}>
                {forwardings.map((forwarding) => (
                  <RadioItem key={forwarding.id} value={forwarding.name}>
                    {forwarding.name}
                  </RadioItem>
                ))}
              </RadioGroup>
            )
          }}
        />
        <button type="submit" disabled={isSubmitting}>
          <Hexagon />
          REGISTRAR
        </button>
      </form>
    </Container>
  )
}
