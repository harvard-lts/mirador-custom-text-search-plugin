import React from "react";
import { render, waitFor } from "@testing-library/react";
import { CustomSearchButton } from "../src";
// import "@testing-library/jest-dom";
import mockFetch from "../mocks/mockFetch";

const MiradorCustomSearchButton = CustomSearchButton.component;

// beforeEach(() => {
//   global.fetch = jest.fn().mockImplementationOnce(() => mockFetch(false));
// });

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Plugin", () => {
  it("Doesn't show the icon when OCR isn't available", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetch(false));
    const { container } = render(
      <MiradorCustomSearchButton manifestUrl="https://iiif.lib.harvard.edu/manifests/drs:13932336" />
    );

    await new Promise((r) => setTimeout(r, 0));

    // This is slightly different to how RTL would recommend
    // But there are no API queries that would work in this case
    expect(container.querySelector("svg")).not.toBeTruthy();
  });

  it("Shows the icon when OCR isn't available", async () => {
    global.fetch = jest.fn().mockImplementationOnce(() => mockFetch(true));

    const { container } = render(
      <MiradorCustomSearchButton manifestUrl="https://iiif.lib.harvard.edu/manifests/drs:437481351" />
    );

    await new Promise((r) => setTimeout(r, 0));

    // This is slightly different to how RTL would recommend
    // But there are no API queries that would work in this case
    expect(container.querySelector("svg")).toBeTruthy();
  });
});
