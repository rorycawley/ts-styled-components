import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

import { Login } from 'components/pages'
import { GlobalStyles } from 'components/Root/App'

export default {
  component: Login,
  title: 'Design System/Pages/Login',
  decorators: [
    (storyFn: () => ReactNode) => (
      <div>
        <GlobalStyles />
        {storyFn()}
      </div>
    ),
  ],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
}

export const Default = () => <Login />
