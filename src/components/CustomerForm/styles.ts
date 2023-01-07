import styled from 'styled-components'

export const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;

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

  h3 {
    font-weight: 600;
    font-size: 0.8rem;
    margin: 0rem 0 1rem;
    color: ${(props) => props.theme['gray-600']};
  }

  input[type='text'] {
    padding: 0 0.5rem 0.5rem;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-600']};
    transition: 300ms;

    &:focus {
      transform: translateY(5px);
      border: none;
      border-bottom: 1px solid ${(props) => props.theme['red-500']};
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-300']};
    }
  }

  input[type='date'] {
    padding: 0 0.5rem 0.5rem;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['gray-500']};
    transition: 300ms;

    &:focus {
      transform: translateY(5px);
      border: none;
      border-bottom: 1px solid ${(props) => props.theme['red-500']};
    }

    &::placeholder {
      color: ${(props) => props.theme['gray-400']};
    }
  }
`

export const CheckboxDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
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
