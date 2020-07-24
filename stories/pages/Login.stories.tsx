import React from 'react'
import { action } from '@storybook/addon-actions'

import { Login } from 'components/pages'
import { GlobalStyle } from 'components/Root/App/GlobalStyle'

export default {
  component: Login,
  title: 'Login',
  decorators: [
    (storyFn: () => React.ReactNode) => (
      <div>
        <GlobalStyle />
        {storyFn()}
      </div>
    ),
  ],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => <Login />
