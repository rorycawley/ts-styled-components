/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from 'react'
import { action } from '@storybook/addon-actions'

import { Header } from 'components/molecules'
import { GlobalStyle } from 'components/Root/App/GlobalStyle'

export default {
  component: Header,
  title: 'Design System/Molecules/Header',
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

export const Default = () => <Header />
