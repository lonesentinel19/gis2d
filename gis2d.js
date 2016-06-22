var measure = {};
var identify = {};
var toggleMeasure = false;
var points = 0;
measure1 = {};

measure.beginMeasure = function(x,y) {
	measure1.x = x;
	$("#identify").hide(); // don't show id screen
	// run from 
	document.getElementById('start').innerHTML = "&#9679;";
	document.getElementById('start').style = "position: absolute; z-index:2;top: " + (y-10) + "px;left:" + (x-2) + "px";
	measure1.y = y;
	measure1.total = 0;
	points = points+1;
	}
	
measure.addPoint = function(x,y) {
	if ( y < height*zoomLevel && x < width*zoomLevel ) {
		if ( x > measure1.x ) {
			f = x - measure1.x;
			} else { 
			f = measure1.x - x;
			}
		if ( y > measure1.y ) { changeY = y-measure1.y; } else { changeY = measure1.y - y; }
		if ( changeY > 0 ) {
			squares = Math.pow(f,2)+Math.pow(changeY,2);
			f = Math.sqrt(squares); // for diagonal measuring
			} 	
		jQuery('<span/>', {
			id: 'point' + points,
			style: "position: absolute; z-index:2;top: " + (y-10) + "px;left:" + (x-2) + "px",
			html: '&#9679'
			}).appendTo('body');
		measure1.total = measure1.total + f;
		points = points + 1;
		}
	}
	
measure.endMeasure = function(x,y) { 
	var finalMeasurement;
	
	$("#end").html("&#9679");
	document.getElementById('end').style = "position: absolute; z-index:2;top: " + (y-10) + "px;left:" + (x-2) + "px";
	$("#measure").text("");
	// CONVERSION FACTORS //
	finalMeasurement = measure.convert(measure1.total, $("#units").val());
	$("#measure").text(finalMeasurement);
	$("#measureHidden").text(measure1.total);
	}
	
measure.convert = function(val, unit) {
	switch ( unit ) {
		case 'in':
			finalMeasurement = (val*scale)*0.3937 + "in";
			break;
		case 'cm':
			finalMeasurement = (val*scale) + "cm";
			break;
		case 'm':
			finalMeasurement = (val*scale)/10 + "m";
			break;
		default:
			finalMeasurement = (val*scale) + "cm";
			break;
		}
		return finalMeasurement;
	}
	
measure.clear = function() {
	measure1.x = 0;
	measure1.y = 0;
	measuring = false;
	$("#start").text("");
	$("#end").text("");
	$("#measure").text("0cm");
	for ( var i = 0; i < points; i++ ) {
		$("#point" + i).remove();
		}
	points = 0;
	}
	
measure.btnClear = function() {
	toggleMeasure();
	measure.clear();
	toggleMeasure();
	}

measure.dropdownSwitch = function(x) {
	$("#measure").text(measure.convert($("#measureHidden").text(), $("#units").val()));
	}
	
// IDENTIFY
// check and see if (x,y) are in boundaries specified in config for locations
identify.byCoords = function(x,y) {
	x = x * scale;
	y = y * scale;
	
	for (var key in locations) {
		var obj = locations[key];
		if ( obj[0] <= x && obj[1] >= x ) {
			if ( obj[2] <= y && obj[3] >= y ) {
				return key;
				}
			}
		}
	}
	
/* Fetches description of location */
identify.desc = function(data) {
	return locations[data][4];
	}
	
identify.output = function(data) { 
	$("#units").attr("style", "display: none");
	document.getElementById('measure').innerHTML = ""; // clear measure data
	if ( typeof(data) == 'undefined' ) {
		document.getElementById('identify').innerHTML = "unknown";
	} else {
		document.getElementById('identify').innerHTML = data + ': ' + identify.desc(data);
		}
	}