import React from 'react'
import { render, screen } from '@testing-library/react'

import { Form } from 'components/molecules'

describe('<Form>', () => {
  it('renders the Form', () => {
    // Arrange
    const component = <Form id="my-form" />

    // Act
    const { container } = render(component)

    screen.debug()
    // Assert
    // TODO
    expect(container.querySelector('form[id="my-form"]')).not.toBeNull()
  })
})
