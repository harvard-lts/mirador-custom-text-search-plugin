import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";

class CustomSearchButton extends Component {
  constructor(props) {
    super(props);
    //const { manifestUrl } = this.props;
    const manifestUrl = "https://iiif.lib.harvard.edu/manifests/drs:4997399"

    this.state = {
      hasOcr: false,
      manifestId: manifestUrl.split("/").pop().split(":").pop(),
    };
  }

  // TODO: update the API request when the proxy API is ready
  async componentDidMount() {
    const { manifestId } = this.state;

    try {
      const res = await fetch(
        `https://pds.lib.harvard.edu/pds/hasocr/${manifestId}`
        //`https://pds.lib.harvard.edu/pds/hasocr/4997399`
      );
      const data = await res.json();
      this.setState({ hasOcr: data.hasOcr });
    } catch (e) {
      console.error(e);
    }
  }

  // WindowSideBarButtons expects just icon and value
  // See: https://github.com/ProjectMirador/mirador/blob/v3.3.0/src/components/WindowSideBarButtons.js
  render() {
    const { hasOcr } = this.state;
    return hasOcr ? <SearchIcon /> : null;
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
