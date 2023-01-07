import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${(props) => props.theme.lowShadow};
  width: 100%;
  height: 100vh;
`
