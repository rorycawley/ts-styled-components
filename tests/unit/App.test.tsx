/* eslint-disable @typescript-eslint/ban-types */
import React from 'react'
import { render, screen, getByRole } from '@testing-library/react'
import { Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'

import App from 'components/Root/App'

// test utils file
function renderWithRouter(
  ui: JSX.Element,
  { route: string = '/', history = createMemoryHistory({ initialEntries: ['/'] }) } = {}
) {
  const Wrapper: React.ComponentClass<{}, any> | React.FunctionComponent<{}> | undefined = (props: {
    children?: React.ReactNode
  }) => <Router history={history}>{props.children}</Router>
  return {
    ...render(ui, { wrapper: Wrapper }),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

describe('<App>', () => {
  it('renders the App page', () => {
    // Arrange
    const history = createMemoryHistory()

    // Act
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    )

    // Assert
    expect(container.innerHTML).toMatch('Home')
    expect(container.innerHTML).toMatch('Login')
  })

  it.skip('landing on a bad page shows 404 page', () => {
    // Arrange
    const history = createMemoryHistory()
    history.push('/some/bad/route')

    // Act
    const { container, getByRole } = render(
      <Router history={history}>
        <App />
      </Router>
    )

    // Assert
    expect(container.innerHTML).toHaveTextContent('404 Not Found')
  })

  it.skip('landing on a bad page', () => {
    // Arrange
    // Act
    const { container } = renderWithRouter(<App />, {
      route: '/something-that-does-not-match',
    })

    // Assert
    expect(container.innerHTML).toMatch('404 Not Found')
  })
})
