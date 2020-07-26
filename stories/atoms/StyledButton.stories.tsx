/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, { ReactNode } from 'react'
import { action } from '@storybook/addon-actions'

import { StyledLink } from 'components/atoms'
import { GlobalStyle } from 'components/Root/App/GlobalStyle'

export default {
  component: StyledLink,
  title: 'Design System/Atoms/StyledLink',
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

export const Default = () => <StyledLink to="/">Inactive StyledLink</StyledLink>
export const Active = () => (
  <StyledLink isActive to="/">
    Active StyledLink
  </StyledLink>
)
