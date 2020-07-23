import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src/components/atoms";
import { GlobalStyle } from "../src/components/Root/App/GlobalStyle";
import { action } from "@storybook/addon-actions";

storiesOf("🍖 Button", module)
  .addDecorator((storyFn) => (
    <div>
      <GlobalStyle />
      {storyFn()}
    </div>
  ))
  .add("default", () => <Button onClick={action("clicked")}>Click me</Button>)
  .add("submit", () => (
    <Button name="name" submit onClick={action("clicked")}>
      Submit me
    </Button>
  ))
  .add("disabled", () => (
    <Button disabled onClick={action("clicked")}>
      Click me
    </Button>
  ))
  .add("secondary", () => (
    <Button secondary onClick={action("clicked")}>
      Click me
    </Button>
  ))
  .add("large", () => (
    <Button large onClick={action("clicked")}>
      Click me
    </Button>
  ))
  .add("disabled submit", () => (
    <Button submit disabled onClick={action("clicked")}>
      Submit me
    </Button>
  ));
