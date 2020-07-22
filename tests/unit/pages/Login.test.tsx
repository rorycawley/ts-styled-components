import React from 'react'
import { render, screen } from '@testing-library/react'

import { Login } from 'components/pages'

describe('<Login>', () => {
  it('renders the Login page', () => {
    // Arrange
    const component = <Login />

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Login/)).toBeInTheDocument()
  })
})
