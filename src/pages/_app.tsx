import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/styles/globalstyles'
import { theme } from '../components/styles/theme'
import Layaut from '../components/layaut'
import { Provider } from 'react-redux'
import { store } from '../store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layaut>
          <Component {...pageProps} />
        </Layaut>
      </ThemeProvider>
      </Provider>
    </>
  )
}
