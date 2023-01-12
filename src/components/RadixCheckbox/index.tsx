import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { CheckboxDiv } from './styles'

interface ICheckboxProps {
  checked?: boolean
  label: string
  id: string
}

export const RadixCheckbox = ({ checked, label, id }: ICheckboxProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <CheckboxDiv id={id} className="CheckboxRoot" checked={checked}>
        <Checkbox.Indicator className="CheckboxIndicator">
          <Check size={16} weight="bold" />
        </Checkbox.Indicator>
      </CheckboxDiv>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
