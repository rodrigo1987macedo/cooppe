// React component
import React from "react";

// Style
import { Paragraph, A } from "../../../../../textStyle";

// Custom components
import Cartography from "../../../../../../components/Cartography";

// GeoJSON
import alcatraz from "../../../../geojson/alcatraz";

// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page. WARNING: this MUST BE UNIQUE across the entire site
const url = "/los-angeles/example-map6";

// URL of the page the user will be sent when hitting back
const back = "/los-angeles";

// Body title
const title = "Example in How To Get Here Map";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example in How To Get Here Map Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example in How To Get Here Map Description Tag";

const OtherMap = (
  <div>
    <Paragraph>Other</Paragraph>
    <Paragraph>
      <Cartography geojson={alcatraz} zoom={17} markerImg={marker} />
    </Paragraph>
  </div>
);

const exampleMap = [OtherMap, url, title, back, titleTag, descriptionTag];

export default exampleMap;
