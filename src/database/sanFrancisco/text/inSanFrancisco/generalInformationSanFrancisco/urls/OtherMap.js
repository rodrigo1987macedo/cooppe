/// React component
import React from "react";

/// Style
import { Paragraph, A } from "../../../../../textStyle";

/// Custom components
import Cartography from "../../../../../../components/Cartography";

/// GeoJSON
import alcatraz from "../../../../geojson/alcatraz";

/// Images
import marker from "../../../../../../assets/marker.svg";

// URL of this page
const url = "/san-francisco/other-map444";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Other Map";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example Description Tag";

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

const otherMap = [OtherMap, url, title, back, titleTag, descriptionTag];

export default otherMap;
