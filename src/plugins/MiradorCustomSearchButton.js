import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";

// TODO: Add API call and conditional rendering
// TODO: Add tests
class CustomSearchButton extends Component {
  // WindowSideBarButtons expects just icon and value
  // See: https://github.com/ProjectMirador/mirador/blob/v3.3.0/src/components/WindowSideBarButtons.js
  render() {
    return <SearchIcon />;
  }
}

// This should be added to the translations config to provide a label
// e.g. translations: { en: { "openCompanionWindow_CustomSearch": "Custom Search" } }
CustomSearchButton.value = "CustomSearch";

export default {
  target: "WindowSideBarButtons",
  mode: "add",
  component: CustomSearchButton,
};
