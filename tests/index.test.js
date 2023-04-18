import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { CustomSearchButton } from "src";

const MiradorCustomSearchButton = CustomSearchButton.component;

describe("Component", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  afterEach(() => {
    unmountComponentAtNode(node);
  });

  // TODO: Add more tests and handle API call
  it("Mounts the component", () => {
    render(<MiradorCustomSearchButton manifestId="123" />, node, () => {});
  });
});
