/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

// import { Button } from 'components/atoms'
import { Toggle } from 'components/atoms'
import { GlobalStyles } from 'components/Root/App'

export default {
  component: Toggle,
  title: 'Design System/Atoms/Toggle',
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

export const componentData = {
  isActive: false,
}

export const actionsData = {
  onClick: action('onClick'),
}

export const Default = () => <Toggle {...componentData} {...actionsData} />

const toggleOffData = { ...componentData, isActive: true }
export const ToggleOff = () => <Toggle {...toggleOffData} {...actionsData} />
