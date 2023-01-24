import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: Interpolation<ThemeProps<DefaultTheme>>
      primary: string
      secondary: string
    }
  }
}
