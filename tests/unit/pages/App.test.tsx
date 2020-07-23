import React from 'react'
import { render, screen, getByRole } from '@testing-library/react'
import { Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'

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
    const history = createMemoryHistory()
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    // Arrange
    // const component = <Home />

    // Act
    // render(component)

    // Assert
    expect(container.innerHTML).toMatch('Home')
    expect(container.innerHTML).toMatch('Login')

    // expect(screen.getAllByText(/Home/)).toBeInTheDocument()
  })

  it.skip('landing on a bad page shows 404 page', () => {
    const history = createMemoryHistory()
    history.push('/some/bad/route')
    const { container, getByRole } = render(
      <Router history={history}>
        <App />
      </Router>
    )
    screen.debug()
    expect(container.innerHTML).toHaveTextContent('404 Not Found')
  })

  // it('full app rendering/navigating', () => {
  //   const { container, getByText } = render(<App />, { wrapper: MemoryRouter })
  //   // verify page content for expected route
  //   expect(container.innerHTML).toHaveTextContent('Home')
  // })

  it.skip('landing on a bad page', () => {
    const { container } = renderWithRouter(<App />, {
      route: '/something-that-does-not-match',
    })
    expect(container.innerHTML).toMatch('404 Not Found')
  })
})
