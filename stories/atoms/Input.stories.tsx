/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { useState } from '@storybook/addons'
import { action } from '@storybook/addon-actions'

// import { Button } from 'components/atoms'
import { Input } from 'components/atoms'
import { GlobalStyle } from 'components/Root/App'

export default {
  component: Input,
  title: 'Design System/Atoms/Input',
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

export const componentData = {}

export const actionsData = {
  onChange: action('onChange'),
}

export const Default = () => {
  return <Input {...actionsData} />
}
