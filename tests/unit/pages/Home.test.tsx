import React from 'react'
import { render, screen } from '@testing-library/react'

import { Home } from 'components/pages'

describe('<Home>', () => {
  it('renders the Home page', () => {
    // Arrange
    const component = <Home />

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Home/)).toBeInTheDocument()
  })
})
