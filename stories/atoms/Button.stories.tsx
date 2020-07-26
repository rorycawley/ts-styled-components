/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

// import { Button } from 'components/atoms'
import { Button } from 'components/atoms'
import { GlobalStyle } from 'components/Root/App/GlobalStyle'

export default {
  component: Button,
  title: 'Design System/Atoms/Button',
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
  submit: false,
  disabled: false,
  secondary: false,
  large: false,
}

export const actionsData = {
  onClick: action('onClick'),
}

export const Default = () => (
  <Button {...componentData} {...actionsData}>
    Click me
  </Button>
)

const submitData = { ...componentData, submit: true }
export const Submit = () => (
  <Button {...submitData} {...actionsData}>
    Click me
  </Button>
)

const disabledData = { ...componentData, disabled: true }
export const Disabled = () => (
  <Button {...disabledData} {...actionsData}>
    Click me
  </Button>
)

const secondaryData = { ...componentData, secondary: true }
export const Secondary = () => (
  <Button {...secondaryData} {...actionsData}>
    Click me
  </Button>
)

const largeData = { ...componentData, large: true }
export const Large = () => (
  <Button {...largeData} {...actionsData}>
    Click me
  </Button>
)
