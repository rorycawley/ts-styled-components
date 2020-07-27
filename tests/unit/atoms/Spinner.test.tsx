import React from 'react'
import { render, screen } from '@testing-library/react'

import { Spinner } from 'components/atoms'

describe('<Spinner>', () => {
  it('renders the Spinner', () => {
    // Arrange
    const component = <Spinner data-testid="spinner" />

    // Act
    render(component)

    // Assert
    expect(screen.getByTestId(/spinner/)).toBeInTheDocument()
  })
})
