import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { Login } from 'components/pages'

describe('<Login>', () => {
  it('renders the Home page', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    )

    // Assert
    expect(container.innerHTML).toMatch('Login')
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
  })
})
