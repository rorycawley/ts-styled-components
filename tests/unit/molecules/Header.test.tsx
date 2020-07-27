import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from 'src/themes'
import { Header } from 'components/molecules'

describe('<Header>', () => {
  it('renders the Home page', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText, getByRole } = render(
      <ThemeProvider theme={lightTheme}>
        <Router history={history}>
          <Header />
        </Router>
      </ThemeProvider>
    )

    // Assert
    // TODO update this, add new test
    // expect(getByRole('navigation')).toBeInTheDocument()
    expect(getByRole('banner')).toBeInTheDocument()
    expect(getByRole('banner')).toHaveTextContent('Home')
    expect(getByRole('banner')).toHaveTextContent('Login')
  })
})
