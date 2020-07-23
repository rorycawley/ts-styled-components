import React from "react";
import { render, screen } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import "@testing-library/jest-dom/extend-expect";

import App from "components/Root/App";

describe("<App>", () => {
  it("renders the App page", () => {
    const history = createMemoryHistory();
    const { container, getByText } = render(
      <Router history={history}>
        <App />
      </Router>
    );
    // Arrange
    // const component = <Home />

    // Act
    // render(component)

    // Assert
    expect(container.innerHTML).toMatch("Home");
    expect(container.innerHTML).toMatch("Login");

    // expect(screen.getAllByText(/Home/)).toBeInTheDocument()
  });
});
