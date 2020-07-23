import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "@testing-library/jest-dom/extend-expect";

import { Login } from "components/pages";

describe("<Login>", () => {
  it("renders the Home page", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <Login />
      </Router>
    );
    // Arrange
    // const component = <Home />

    // Act
    // render(component)

    // Assert
    expect(container.innerHTML).toMatch("Login");

    // expect(screen.getAllByText(/Login/)).toBeInTheDocument()
  });
});
