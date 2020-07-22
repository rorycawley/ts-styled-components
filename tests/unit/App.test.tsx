import React from 'react'
import { render, screen } from '@testing-library/react'

import App from 'src/components/Root/App'

describe('<App>', () => {
  it('renders the component', () => {
    // Arrange
    const component = <App />

    // Act
    render(component)

    // Assert
    expect(screen.getByTestId('app')).toBeInTheDocument()
    expect(screen.getByText(/App/)).toBeInTheDocument()
  })
})
