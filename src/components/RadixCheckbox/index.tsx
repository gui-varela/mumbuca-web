import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { CheckboxDiv } from './styles'

export function RadixCheckbox() {
  return (
    <CheckboxDiv className="CheckboxRoot">
      <Checkbox.Indicator className="CheckboxIndicator">
        <Check size={16} weight="bold" />
      </Checkbox.Indicator>
    </CheckboxDiv>
  )
}
