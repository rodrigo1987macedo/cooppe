// React
import React from "react";

// Style
import { Paragraph, A } from "../../textStyle";

// Router
import { Link } from "react-router-dom";

// GeoJSON
import alcatraz from "../geojson/alcatraz";

// Material UI components
import FlatButton from "material-ui/FlatButton";

// Images
import marker from "../../../assets/marker.svg";

// Theme
import muiTheme from "../../../muiTheme";

const generalInformationLosAngeles = (
  <div>
    <Paragraph>
      San Francisco, locally called the city, in Northern California USA, is
      relatively small with a population of around 860,000 and a land area of
      46.87 square miles (121.39 square kilometers). It is famous for its
      liberal attitudes, the Golden Gate Bridge, the former, Fisherman's Wharf,
      Chinatown, Victorian houses, Lombard Street, cable cars, earthquakes, fog
      and steep rolling hills.
    </Paragraph>
    <Link to="/los-angeles/some-map">
      <FlatButton
        style={{
          backgroundColor: "lightgrey",
          fontWeight: "500"
        }}
      >
        MAP
      </FlatButton>
    </Link>
    <Paragraph>
      The city is part of San Francisco Bay Area which also encompasses
      metropolitan areas of San Jose and Oakland, along with smaller urban and
      rural areas. The Bay Area is home to approximately 7,7 million people and
      known for its natural beauty, diversity of cultures and food, world class
      universities of Stanford and UC Berkeley as well as the legendary Silicon
      Valley. Apple, Google, Facebook, Yahoo, Intel, Cisco Systems, HP, Oracle,
      Uber, Twitter, and many other high-tech companies are headquartered here.
    </Paragraph>
    <Paragraph>
      Between domestic, international, leisure and business travel, about 25
      million visitors come to San Francisco every year. Being one of the least
      affordable cities in the US makes hotels and restaurants relatively
      expensive. While generally considered safe, like any other city, it has
      problems with mostly non-violent crime and theft. However, most visitors
      do not encounter any serious issues.
    </Paragraph>
  </div>
);

export default generalInformationLosAngeles;
