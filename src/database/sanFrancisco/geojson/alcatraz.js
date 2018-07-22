// http://geojson.io/#map=2/20.0/0.0

const alcatraz = {
  center: [37.8266668529633, -122.42299],
  markers: [
    {
      //Open Marker
      properties: {
        tag: "Alcatraz penitentiary",
        popUp: false,
        description:
          "Visit the legendary island that has been a civil war fort, a military prison and one of the most notorious federal penitentiaries.",
        link: "https://www.alcatrazislandtickets.com/"
      },
      geometry: {
        type: "Point",
        coordinates: [37.8266668529633, -122.42299]
      }
    },
    //Close Marker
    //Open Marker
    {
      properties: {
        tag: "Building 64",
        popUp: false,
        description:
          "Building 64 Residential Apartments, was the first building constructed on the island of Alcatraz",
        link: "https://en.wikipedia.org/wiki/Building_64"
      },
      geometry: {
        type: "Point",
        coordinates: [37.8256568429623, -122.4218]
      }
    }
    //Close Marker
  ]
};

export default alcatraz;
