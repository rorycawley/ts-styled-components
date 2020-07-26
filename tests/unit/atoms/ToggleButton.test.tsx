import React from 'react'
import { render, screen } from '@testing-library/react'

import { ToggleButton } from 'components/atoms'

describe('<ToggleButton>', () => {
  it('renders the ToggleButton with Show', () => {
    // Arrange
    const component = <ToggleButton>Show</ToggleButton>

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Show/)).toBeInTheDocument()
  })

  it('renders the ToggleButton with Hide', () => {
    // Arrange
    const component = <ToggleButton>Hide</ToggleButton>

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Hide/)).toBeInTheDocument()
  })
})
