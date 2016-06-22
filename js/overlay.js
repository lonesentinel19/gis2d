var overlay = {}
var shown = false;
$("#overlays").hide();
overlay.click = function() {
	if ( shown == false ) {
		shown = true;
		$("#overlays").show();
		} else {
		shown = false;
		$("#overlays").hide();
		}
	}
	
overlay.select = function(that) {
	if ( that.checked === true ) {
		overlay.showLayer(that.value);
		} else {
		overlay.hideLayer(that.value);
		}
	}
	
overlay.showLayer = function(layer) {
	jQuery('<img/>', {
		'id': layer,
		'class': 'layers',
		'src': layers[layer][1],
		'height': height + 'px',
		'width': width + 'px'
		}).appendTo('#layers');
	}
	
overlay.hideLayer = function(layer) {
	$("#" + layer).hide();
	}
	
overlay.out = function() {
	var options = "";
	for ( layer in layers ) {
		options = options + "<label><input type='checkbox' value='" + layer + "' onclick='overlay.select(this);'/>" + layer + "</label>";
		}
	return options;
	}