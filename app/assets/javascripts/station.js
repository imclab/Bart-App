$(document).ready(function() {
	$('#stations a').on('click', function() {
		event.preventDefault();
		var $link = this;
		
		console.log($link.id);
		
		getStationData($link.id, function(data){
			var stationTemplateFn = JST["station_template"];
			var contentToAdd = stationTemplateFn({data: data});
			$($link).prepend(contentToAdd);
		});
			
	});
});

// append template to li


//this way the callback has access to the link variable
// use anonymous function (data) {}

function getStationData(id, callback) {
	$.ajax({
		type: "GET",
		url: ("/stations/").concat(id).concat(".json"),
		success: callback
	});
}


