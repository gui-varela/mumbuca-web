import { RadioGroup, RadioGroupItem } from '@radix-ui/react-radio-group'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 0;

  form {
    background-color: ${(props) => props.theme.white};
    border-radius: 10px;
    padding: 2rem 3rem;
    margin: 7rem 2rem;
    min-width: 600px;
    max-width: 1120px;

    h1 {
      font-size: 1.5rem;
      margin-top: 1rem;
      text-align: center;
    }

    .divider {
      padding: 1rem 0 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .line {
        background-color: ${(props) => props.theme['red-500']};
        height: 1px;
        width: 80px;
        margin: 0 1rem;
      }
    }

    h2,
    p,
    span {
      font-size: 1rem;
    }

    h2 {
      font-weight: 700;
      margin: 2rem 0 1rem;

      span {
        color: ${(props) => props.theme['red-500']};
      }
    }

    button[type='submit'] {
      margin-top: 3rem;
      background-color: ${(props) => props.theme['red-500']};
      color: ${(props) => props.theme.white};
      font-weight: 600;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 50px;
    }
  }
`
export const Agency = styled(RadioGroup)`
  display: flex;
`

export const AgencyButton = styled(RadioGroupItem)`
  padding: 0.5rem 0.7rem;
  margin-right: 1rem;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme['gray-300']};
  border-radius: 50px;
  color: ${(props) => props.theme['gray-400']};

  &[data-state='checked'] {
    color: ${(props) => props.theme['red-500']};
    background-color: ${(props) => props.theme['red-300']};
    border: 0.1rem solid transparent;
  }

  &[data-state='unchecked'] {
    background-color: white;
    border: 0.1rem solid ${(props) => props.theme['gray-200']};

    &:hover {
      background-color: ${(props) => props.theme['red-100']};
    }
  }
`
