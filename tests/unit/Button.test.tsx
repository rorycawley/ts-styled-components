import React from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from 'components/common'

describe('<Button>', () => {
  it('renders the component', () => {
    // Arrange
    const component = <Button>Button Test</Button>

    // Act
    render(component)

    // Assert
    expect(screen.getByText(/Button Test/)).toBeInTheDocument()
  })
})
