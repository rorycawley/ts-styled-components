import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { lightTheme, darkTheme } from 'src/themes'

import StoryRouter from 'storybook-react-router'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'

// const themes = [lightTheme, darkTheme]
// addDecorator(withThemesProvider(themes))
// Using StoryFn as component instead of invoking it
addDecorator(StoryFn => (
  <ThemeProvider theme={themeBasic}>
    <StoryFn />
  </ThemeProvider>
))

addDecorator(StoryRouter())
