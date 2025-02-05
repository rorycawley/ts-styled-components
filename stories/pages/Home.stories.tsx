/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

import { Home } from 'components/pages'
import { GlobalStyles } from 'components/Root/App'

export default {
  component: Home,
  title: 'Design System/Pages/Home',
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

export const Default = () => <Home />
