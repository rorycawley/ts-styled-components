import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from 'components/common'

describe('<Button>', () => {
  it('renders the button', () => {
    // Arrange
    const component = <Button>Button Test</Button>

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test/)).toBeInTheDocument()
  })

  it('renders the a disabled button', () => {
    // Arrange
    const component = <Button disabled>Button Test Disabled</Button>

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test Disabled/)).toBeDisabled()
  })

  it('renders the a secondary button', () => {
    // Arrange
    const component = <Button secondary>Button Test Secondary</Button>

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test Secondary/)).toBeInTheDocument()
  })
})
