/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode, useState, ChangeEvent } from 'react'
import { action } from '@storybook/addon-actions'

// import { Button } from 'components/atoms'
import { ToggleButton } from 'components/atoms'
import { GlobalStyle } from 'components/Root/App/GlobalStyle'

export default {
  component: ToggleButton,
  title: 'Design System/Atoms/ToggleButton',
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

export const componentData = {
  showPassword: false,
}

export const actionsData = {
  onClick: action('onClick'),
}

export const Default = () => {
  return (
    <ToggleButton {...componentData} {...actionsData}>
      {componentData.showPassword ? 'Hide' : 'Show'}
    </ToggleButton>
  )
}

const showPasswordData = { ...componentData, showPassword: true }
export const ShowPassword = () => {
  return (
    <ToggleButton {...showPasswordData} {...actionsData}>
      {showPasswordData.showPassword ? 'Hide' : 'Show'}
    </ToggleButton>
  )
}
