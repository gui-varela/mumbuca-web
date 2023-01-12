import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-100']};
  padding: 1rem 2rem;
  box-shadow: 0 0 20px #85858550;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.8rem;
    cursor: pointer;
  }

  .signOut {
    display: flex;
    align-items: center;
    justify-content: end;
    cursor: pointer;
    width: 10rem;

    p {
      text-decoration: none;
      color: ${(props) => props.theme['red-500']};
      font-weight: 600;
      margin-right: 0.5rem;
    }

    svg {
      color: ${(props) => props.theme['red-500']};
    }
  }

  .goBack {
    display: flex;
    align-items: center;
    width: 10rem;
    cursor: pointer;

    p {
      font-size: 1rem;
      font-weight: 600;
    }

    svg {
      margin-right: 0.8rem;
      color: ${(props) => props.theme['red-500']};

    }
  }
`
