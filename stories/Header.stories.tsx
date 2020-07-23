import React from "react";

import { storiesOf, action } from "@storybook/react";
import StoryRouter from "storybook-react-router";

import { Header } from "../src/components/molecules";
import { GlobalStyle } from "../src/components/Root/App/GlobalStyle";

storiesOf("👨🏼 Header", module)
  .addDecorator(StoryRouter())
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyle />
      {storyFn()}
    </div>
  ))
  .add("default", () => <Header />);
