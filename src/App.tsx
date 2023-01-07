import { ThemeProvider } from 'styled-components'

import { AppRoutes } from './AppRoutes'

import { GlobalStyle } from './styles/global'

import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export { App }
