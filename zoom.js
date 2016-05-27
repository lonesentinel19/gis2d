/* gis2d 
 * This file controls zoom & pan related functions
 */
var scaleOriginal = scale;
function zoom() {
	if ( zoomLevel < maxZoom ) {
		zoomLevel = Math.round((zoomLevel + 0.1)*10)/10;
		/* javascript numbers are fluid, they like to change shape and value
		 * which results in having to check for NaN whenever zoomLevel reaches '1'
		 */
		if ( isNaN(zoomLevel) ) {
			zoomLevel = 1.0;
			}
		console.log(zoomLevel);
		scale = scaleOriginal / zoomLevel;
		document.getElementById('gis2d-map').style.zoom = zoomLevel;
		document.getElementById('zoom_multiple').innerHTML = zoomLevel;
		}
	}
	
function pan() {
	if ( zoomLevel > minZoom ) {
		zoomLevel = zoomLevel - 0.1
		zoomLevel = zoomLevel.toFixed(2);
		scale = scaleOriginal / zoomLevel;
		document.getElementById('gis2d-map').style.zoom = zoomLevel;
		document.getElementById('zoom_multiple').innerHTML = zoomLevel;
		}
	}