/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

import { Spinner } from 'components/atoms'
import { GlobalStyles } from 'components/Root/App'

export default {
  component: Spinner,
  title: 'Design System/Atoms/Spinner',
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

export const componentData = {}

export const actionsData = {}

export const Default = () => <Spinner {...componentData} {...actionsData} />
