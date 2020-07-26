import React from 'react'
import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { StyledLink } from 'components/atoms'

describe('<StyledLink>', () => {
  it('renders the Inactive StyledLink', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText } = render(
      <Router history={history}>
        <StyledLink to="/">Inactive StyledLink</StyledLink>{' '}
      </Router>
    )

    // Assert
    expect(screen.getByText(/Inactive StyledLink/)).toBeInTheDocument()
  })

  it('renders the StyledLink', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText } = render(
      <Router history={history}>
        <StyledLink to="/" isActive>
          Active StyledLink
        </StyledLink>
      </Router>
    )

    // Assert
    expect(screen.getByText(/Active StyledLink/)).toBeInTheDocument()
  })
})
