// import original module declarations
import 'styled-components'

// // and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    id: string
    borderRadius: string

    colors: {
      primary: string
      secondary: string
    }

    setTheme?: () => void
  }
}
