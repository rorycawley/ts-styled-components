/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { useState } from '@storybook/addons'
import { action } from '@storybook/addon-actions'

// import { Button } from 'components/atoms'
import { PasswordInput } from 'components/atoms'
import { GlobalStyles } from 'components/Root/App'

export default {
  component: PasswordInput,
  title: 'Design System/Atoms/PasswordInput',
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
  onChange: action('onChange'),
}

export const Default = () => {
  return <PasswordInput {...actionsData} />
}
