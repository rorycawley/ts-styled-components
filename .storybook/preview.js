import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { theme } from 'components/Root/App/theme'
import { themeDark } from 'components/Root/App/theme.dark'
import StoryRouter from 'storybook-react-router'
import { ThemeProvider } from 'styled-components'
import { createBrowserHistory } from 'history'

// const themes = [theme, themeDark]
// addDecorator(withThemesProvider(themes))

addDecorator(StoryRouter())
