var x = 0, y = 0, measuring = false;
document.onclick = function () { 
	x = event.clientX;
	y = event.clientY;
	if ( toggleIdentifyVar == true ) {
		loc = identify.byCoords(x,y);
		identify.output(loc);
		}
	/* Don't allow measurements to be written over area not occupied by the map */
	console.log(y/screen.availHeight);
	if ( toggleMeasureVar && toggleIdentifyVar == false && y < height*zoomLevel && x < width*zoomLevel && y/screen.availHeight > 0.074) { 
		if ( measuring == false ) {
			measuring = true;
			measure.beginMeasure(x,y);
			} else {
			measure.addPoint(x,y);
			}
		}
	}

document.onkeydown = function() {
	e = event.keyCode;
	if ( e == 13 ) {
		measure.endMeasure(x,y);
		measuring = false;
		}
	}
	
function viewCoords() {
	console.log(x, y);
	}