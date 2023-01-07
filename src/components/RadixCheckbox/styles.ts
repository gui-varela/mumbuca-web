import * as Checkbox from '@radix-ui/react-checkbox'
import styled from 'styled-components'

export const CheckboxDiv = styled(Checkbox.Root)`
  display: flex;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-right: 0.5rem;

  &[data-state='unchecked'] {
    background-color: white;
    border: 0.1rem solid ${(props) => props.theme['gray-200']};

    &:hover {
      background-color: ${(props) => props.theme['red-100']};
      border: none;
    }
  }

  &[data-state='checked'] {
    box-shadow: none;
    background-color: ${(props) => props.theme['red-300']};
    border: none;
  }

  .CheckboxIndicator {
    color: ${(props) => props.theme['red-500']};
    margin-top: 3px;
  }
`

export const Documents = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;

  input[type='text'] {
    width: 100%;
  }
`
