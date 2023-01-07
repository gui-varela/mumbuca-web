import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
`

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  input[type='text'] {
    width: 100%;
  }
`

export const AddressData = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
  width: 100%;

  input[type='text'] {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme['red-300']};
  }

  p {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme['gray-300']};
    padding: 0 0.5rem 0.5rem;
    height: 1.8rem;
  }

  select {
    padding: 0.4rem;
    border: 1px solid ${(props) => props.theme['gray-300']};
    border-radius: 10px;
    font-size: 0.8rem;
    color: ${(props) => props.theme['gray-600']};

    &:focus {
      border: 1px solid ${(props) => props.theme['red-500']};
    }

    option {
      color: ${(props) => props.theme['gray-600']};
      font-size: 0.8rem;

      &:hover {
        background-color: ${(props) => props.theme['red-300']};
      }
    }
  }

  .logradouro {
    grid-column: span 2;
  }
`

export const AddressField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CheckboxDiv = styled.div`
  display: flex;
  margin: 2rem 0;

  .CheckboxRoot {
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
  }

  .CheckboxIndicator {
    color: ${(props) => props.theme['red-500']};
    margin-top: 3px;
  }
`
