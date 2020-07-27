import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/themes'

import { Login } from 'components/pages'

describe('<Login>', () => {
  it('renders the Home page', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Router history={history}>
          <Login />
        </Router>
      </ThemeProvider>
    )

    // Assert
    expect(container.innerHTML).toMatch('Login')
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })
})
