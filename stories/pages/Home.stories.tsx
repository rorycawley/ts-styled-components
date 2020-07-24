/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import { action } from '@storybook/addon-actions'

import { Home } from 'components/pages'
import { GlobalStyle } from 'components/Root/App/GlobalStyle'

export default {
  component: Home,
  title: 'Home',
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

export const Default = () => <Home />
