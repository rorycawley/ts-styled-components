import React from 'react'
import { render, screen } from '@testing-library/react'

import { PasswordInput } from 'components/atoms'

describe('<PasswordInput>', () => {
  it('renders the Input', () => {
    // Arrange
    const component = <PasswordInput />

    // Act
    render(component)

    // Assert
    // TODO
    // expect(screen.getByText(/Button Test/)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
