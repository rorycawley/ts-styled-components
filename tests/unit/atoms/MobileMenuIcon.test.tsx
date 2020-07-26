import React from 'react'
import { render, screen } from '@testing-library/react'

import { MobileMenuIcon } from 'components/atoms'

describe('<MobileMenuIcon>', () => {
  it('renders the MobileMenuIcon', () => {
    // Arrange
    const component = (
      <MobileMenuIcon>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </MobileMenuIcon>
    )

    // Act
    const { container } = render(component)

    // Assert

    expect(screen.getByText(/one/)).toBeInTheDocument()
    expect(screen.getByText(/two/)).toBeInTheDocument()
    expect(screen.getByText(/three/)).toBeInTheDocument()
  })
})
