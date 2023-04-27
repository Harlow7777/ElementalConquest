function showDiv(linkId, divId) {
	if (divId != "creatures") {
		var div = document.getElementById("creatures");
		var link = document.getElementById("creatures-link");
		div.style.display = 'none';
		link.style.color = 'white';
	}
	if (divId != "spells") {
		var div = document.getElementById("spells");
		var link = document.getElementById("spells-link");
		div.style.display = 'none';
		link.style.color = 'white';
	}
	if (divId != "locations") {
		var div = document.getElementById("locations");
		var link = document.getElementById("locations-link");
		div.style.display = 'none';
		link.style.color = 'white';
	}
	var div = document.getElementById(divId);
	var link = document.getElementById(linkId);
	if (div.style.display === 'none') {
	  div.style.display = 'block';
	}
	link.style.color = 'gray';
}
