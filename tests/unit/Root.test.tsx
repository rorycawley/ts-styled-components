import React from 'react'
import { render, screen } from '@testing-library/react'

import Root from 'components/Root'

describe('<Root>', () => {
  it('renders the component', () => {
    // Arrange
    const component = <Root />

    // Act
    render(component)

    // Assert
    expect(screen.getByTestId('root')).toBeInTheDocument()
  })
})
