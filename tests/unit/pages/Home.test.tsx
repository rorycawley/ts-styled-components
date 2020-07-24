import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import { Home } from 'components/pages'

describe('<Home>', () => {
  it('renders the Home page', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText } = render(
      <Router history={history}>
        <Home />
      </Router>
    )

    // Assert
    expect(container.innerHTML).toMatch('Home')
  })
})
