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
	
overlay.out = function() {
	var options = "";
	for ( layer in layers ) {
		options = options + "<label><input type='checkbox' value='" + layer + "' onclick='overlay.select(this);'/>" + layer + "</label>";
		}
	return options;
	}