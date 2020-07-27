import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/themes'

import { Button } from 'components/atoms'

describe('<Button>', () => {
  it('renders the button', () => {
    // Arrange
    const component = (
      <ThemeProvider theme={lightTheme}>
        <Button>Button Test</Button>
      </ThemeProvider>
    )

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test/)).toBeInTheDocument()
  })

  it('renders the a disabled button', () => {
    // Arrange
    const component = (
      <ThemeProvider theme={lightTheme}>
        <Button disabled>Button Test Disabled</Button>{' '}
      </ThemeProvider>
    )

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test Disabled/)).toBeDisabled()
  })

  it('renders the a secondary button', () => {
    // Arrange
    const component = (
      <ThemeProvider theme={lightTheme}>
        <Button secondary>Button Test Secondary</Button>{' '}
      </ThemeProvider>
    )

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test Secondary/)).toBeInTheDocument()
  })

  it('renders the a large button', () => {
    // Arrange
    const component = (
      <ThemeProvider theme={lightTheme}>
        <Button large>Button Test Large</Button>{' '}
      </ThemeProvider>
    )

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test Large/)).toBeInTheDocument()
  })
})
