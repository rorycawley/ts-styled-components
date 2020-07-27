import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/themes'
import { Spinner } from 'components/atoms'

describe('<Spinner>', () => {
  it('renders the Spinner', () => {
    // Arrange
    const component = (
      <ThemeProvider theme={lightTheme}>
        <Spinner data-testid="spinner" />
      </ThemeProvider>
    )

    // Act
    render(component)

    // Assert
    expect(screen.getByTestId(/spinner/)).toBeInTheDocument()
  })
})
