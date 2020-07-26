import React from 'react'
import { render, screen } from '@testing-library/react'

import { Input } from 'components/atoms'

describe('<Input>', () => {
  it('renders the Input', () => {
    // Arrange
    const component = <Input />

    // Act
    render(component)

    // Assert
    // TODO
    // expect(screen.getByText(/Button Test/)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
