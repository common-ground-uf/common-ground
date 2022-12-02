// Based on https://gist.github.com/gboone/3cfa9a7df228854ec3a9

interface GeographicLocation {
  latitude: number;
  longitude: number;
}

interface CartesianLocation {
  x: number;
  y: number;
  z: number;
}

function latLngRadians(
  degreeLocations: Array<GeographicLocation>
): Array<GeographicLocation> {
  return degreeLocations.map(function (location: GeographicLocation) {
    const latRad = location.latitude * (Math.PI / 180);
    const lngRad = location.longitude * (Math.PI / 180);
    return { latitude: latRad, longitude: lngRad };
  });
}

function radToCart(radianLocations: Array<GeographicLocation>) {
  const cartesianLocations: CartesianLocation[] = [];
  radianLocations.forEach(function (radianLocation: GeographicLocation) {
    const cartesianLat =
      Math.cos(radianLocation.latitude) * Math.cos(radianLocation.longitude);
    const cartesianLng =
      Math.cos(radianLocation.latitude) * Math.sin(radianLocation.longitude);
    const sineLat = Math.sin(radianLocation.latitude);
    cartesianLocations.push({ x: cartesianLat, y: cartesianLng, z: sineLat });
  });

  return cartesianLocations;
}

export default function geoMidpoint(
  coordinates: Array<GeographicLocation>
): GeographicLocation {
  if (coordinates.length === 1) {
    return coordinates[0];
  }

  const carts = radToCart(coordinates);
  const allX = carts.map(function (cart) {
    return cart.x;
  });
  const meanX = allX.reduce(function (p, c, i, a) {
    return (p + c) / a.length;
  });
  const allY = carts.map(function (cart) {
    return cart.y;
  });
  const meanY = allY.reduce(function (p, c, i, a) {
    return (p + c) / a.length;
  });
  const allZ = carts.map(function (cart) {
    return cart.z;
  });
  const meanZ = allZ.reduce(function (p, c, i, a) {
    return (p + c) / a.length;
  });

  let lon = Math.atan2(meanY, meanX);
  const hyp = Math.sqrt(meanX * meanX + meanY * meanY);
  let lat = Math.atan2(meanZ, hyp);
  lat = lat * (180 / Math.PI);
  lon = lon * (180 / Math.PI);
  return { latitude: lat, longitude: lon };
}
