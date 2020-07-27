/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { useState } from '@storybook/addons'
import { action } from '@storybook/addon-actions'

// import { Button } from 'components/atoms'
import { Form } from 'components/molecules'
import { GlobalStyle } from 'components/Root/App'
import { Input } from 'components/atoms'

export default {
  component: Form,
  title: 'Design System/molecules/Form',
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
  return (
    <Form>
      <Input {...actionsData} />
    </Form>
  )
}
