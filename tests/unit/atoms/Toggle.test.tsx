/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { lightTheme, darkTheme } from 'src/themes'
import { ThemeProvider } from 'styled-components'

import { Toggle } from 'components/atoms'

describe('<Toggle>', () => {
  const f = () => {}

  it('renders the button', () => {
    // Arrange
    const component = (
      <ThemeProvider theme={lightTheme}>
        <Toggle onToggle={f} />
      </ThemeProvider>
    )

    // Act
    render(component)

    // Assert
    expect(screen.getByTestId(/toggle/)).toBeInTheDocument()
  })
})
