import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/themes'
import { Home } from 'components/pages'

describe('<Home>', () => {
  it('renders the Home page', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Router history={history}>
          <Home />
        </Router>
      </ThemeProvider>
    )

    // Assert
    expect(container.innerHTML).toMatch('Home')
  })
})
