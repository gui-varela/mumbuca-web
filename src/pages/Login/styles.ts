import styled from 'styled-components'

import bgImage from '../../assets/Hexagonos.svg'

export const Container = styled.div`
  justify-content: center;
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  height: 100vh;
  width: 100%;

  @media only screen and (max-width: 1200px) {
    & {
      background-image: linear-gradient(
          -45deg,
          #ffffff00,
          ${(props) => props.theme['gray-100']} 60%
        ),
        url(${bgImage});
      background-size: auto;
    }
  }
`

export const LoginContainer = styled.div`
  display: flex;
  padding-top: 8rem;
  flex-direction: column;
  margin-left: 25%;

  width: 300px;
  height: 100%;

  img {
    height: 4rem;
    margin-bottom: 6rem;
  }

  h1 {
    margin-bottom: 2rem;
  }

  form {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 3rem;
    background: #fff;
    box-shadow: 0 0 20px ${(props) => props.theme.lowShadow};

    label {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    input[type='text'],
    input[type='password'] {
      padding: 0.3rem 0.2rem;
      margin-bottom: 2rem;
      border: none;
      border-bottom: 1px solid ${(props) => props.theme['gray-300']};
      color: ${(props) => props.theme['gray-600']};
      transition: 300ms;

      &:focus {
        transform: translateY(5px);
        border: none;
        border-bottom: 1px solid ${(props) => props.theme['red-500']};
      }
    }

    button {
      padding: 0.5rem 0;
      margin: 0.5rem 0;
      color: ${(props) => props.theme.white};
      font-weight: bolder;
      background-color: ${(props) => props.theme['red-500']};
      border: none;
      border-radius: 50px;
    }

    a {
      color: ${(props) => props.theme['red-500']};
      align-self: center;
      margin-top: 0.5rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    & {
      margin: auto;
    }
  }
`
