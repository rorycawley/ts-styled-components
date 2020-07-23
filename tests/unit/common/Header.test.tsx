import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import '@testing-library/jest-dom/extend-expect'

import { Header } from 'components/molecules'

describe('<Header>', () => {
  it('renders the Home page', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText, getByRole } = render(
      <Router history={history}>
        <Header />
      </Router>
    )

    // Assert
    expect(getByRole('navigation')).toBeInTheDocument()
    expect(getByRole('banner')).toBeInTheDocument()
    expect(getByRole('banner')).toHaveTextContent('Home')
    expect(getByRole('banner')).toHaveTextContent('Login')
  })
})
