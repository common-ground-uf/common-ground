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

function latLngRadians(degreeLocations: Array<GeographicLocation>): Array<GeographicLocation> {
	return degreeLocations.map(function(location: GeographicLocation) {
		var latRad = location.latitude*(Math.PI/180)
		var lngRad = location.longitude*(Math.PI/180)
		return {latitude: latRad, longitude: lngRad}
	});
}

function radToCart(radianLocations: Array<GeographicLocation>) {
	var cartesianLocations: CartesianLocation[] = []
	radianLocations.forEach(function(radianLocation: GeographicLocation) {
		var cartesianLat = Math.cos(radianLocation.latitude) * Math.cos(radianLocation.longitude);
		var cartesianLng = Math.cos(radianLocation.latitude) * Math.sin(radianLocation.longitude);
		var sineLat = Math.sin(radianLocation.latitude);
		cartesianLocations.push({x:cartesianLat, y:cartesianLng, z:sineLat})
	});
    
	return cartesianLocations;
}

export default function geoMidpoint(coordinates: Array<GeographicLocation>): GeographicLocation {
	let carts = radToCart(coordinates);
	var allX = carts.map(function(cart) {
		return cart.x
	});
	var meanX = allX.reduce(function(p, c, i, a) {
		return (p + c)/a.length
	});
	var allY = carts.map(function(cart) {
		return cart.y
	});
	var meanY = allY.reduce(function(p, c, i, a) {
		return (p + c)/a.length
	});
	var allZ = carts.map(function(cart) {
		return cart.z
	});
	var meanZ = allZ.reduce(function(p, c, i, a) {
		return (p + c)/a.length
	});

	var lon = Math.atan2(meanY, meanX);
	var hyp = Math.sqrt(meanX * meanX + meanY * meanY);
	var lat = Math.atan2(meanZ, hyp);
	lat = lat*(180/Math.PI);
	lon = lon*(180/Math.PI);
	return {latitude: lat, longitude: lon};
}