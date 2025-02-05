/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

// import { Button } from 'components/atoms'
import { MobileMenuIcon } from 'components/atoms'
import { GlobalStyles } from 'components/Root/App'

export default {
  component: MobileMenuIcon,
  title: 'Design System/Atoms/MobileMenuIcon',
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

export const actionsData = {
  onClick: action('onClick'),
}

export const Default = () => (
  <MobileMenuIcon {...componentData} {...actionsData}>
    <div />
    <div />
    <div />
  </MobileMenuIcon>
)
