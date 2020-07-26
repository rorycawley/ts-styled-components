import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

import App from 'components/Root/App'
import { GlobalStyle } from 'components/Root/App/GlobalStyle'

export default {
  component: App,
  title: 'App',
  decorators: [
    (storyFn: () => ReactNode) => (
      <div>
        <GlobalStyle />
        {storyFn()}
      </div>
    ),
  ],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => <App />
