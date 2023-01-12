import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 6rem;
    max-width: 1120px;

    h1 {
      font-size: 1.6rem;
      margin: 2rem 0 1rem;

      span {
        color: ${(props) => props.theme['red-700']};
      }
    }

    p {
      margin-bottom: 1rem;
    }
  }
`

export const ButtonArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-gap: 1rem;
  grid-row-gap: 2rem;
  margin-top: 2rem;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1rem;
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['gray-500']};
    font-weight: 600;
    border: 2px solid ${(props) => props.theme['gray-300']};
    border-radius: 10px;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      margin-bottom: 0.5rem;
      margin-left: 1rem;
      margin-right: 1rem;
    }

    svg {
      color: ${(props) => props.theme['red-700']};
      margin-bottom: 0.5rem;
    }
  }

  .fila {
    grid-column: span 2;
    padding: 1.4rem;
    background-color: ${(props) => props.theme['red-700']};
    color: ${(props) => props.theme.white};
    border: none;

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin: 0;
      svg {
        margin: 0 1rem;
        color: ${(props) => props.theme.white};
      }
    }
  }
`
