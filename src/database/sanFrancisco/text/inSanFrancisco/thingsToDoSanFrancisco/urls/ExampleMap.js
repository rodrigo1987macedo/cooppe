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

// URL of this page
const url = "/los-angeles/example-map999";

// URL of the page the user will be sent when hitting back
const back = "/los-angeles";

// Body title
const title = "Example in Things To Do Map";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example in Things To Do Map Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example in Things To Do Map Description Tag";

const OtherMap = (
  <div>
    <Paragraph>
      Other
      <div>
        <Cartography geojson={alcatraz} zoom={17} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const exampleMap = [OtherMap, url, title, back, titleTag, descriptionTag];

export default exampleMap;
