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
const url = "/san-francisco/some-map666";

// URL of the page the user will be sent when hitting back
const back = "/san-francisco";

// Body title
const title = "Some Map";

// Page title, must be 50–60 characters and unique across the site (optimal SEO length)
const titleTag = "Example Title tag";

// Page description, must be 50–300 characters and unique across the site (optimal SEO length)
const descriptionTag = "Example Description Tag";

const SomeMap = (
  <div>
    <Paragraph>
      San Francisco, locally called the city, in Northern California USA, is
      relatively small with a population of around 860,000 and a land area of
      46.87 square miles (121.39 square kilometers). It is famous for its
      liberal attitudes, the Golden Gate Bridge, the former, Fisherman's Wharf,
      Chinatown, Victorian houses, Lombard Street, cable cars, earthquakes, fog
      and steep rolling hills.
      <div>
        <Cartography geojson={alcatraz} zoom={17} markerImg={marker} />
      </div>
    </Paragraph>
  </div>
);

const someMap = [SomeMap, url, title, back, titleTag, descriptionTag];

export default someMap;
