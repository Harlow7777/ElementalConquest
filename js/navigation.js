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

var activeFilters = []

function showOnly(imgName, className) {
	var img = document.getElementById(imgName);
	var noFilterImg = document.getElementById('no-filter-button-img');

	// if off, turn it on
	if (img.classList.contains('off')) {
		activeFilters.push(className);
		if (noFilterImg.classList.contains('on')) {
			while (activeFilters.indexOf('card') > -1)
				delete activeFilters[activeFilters.indexOf('card')];
			noFilterImg.classList.remove('on');
			noFilterImg.classList.add('off');
		}

		// if no-filter, disable all active filter buttons
		if (imgName == 'no-filter-button-img') {
			activeFilters = []
			var filterDivs = []
			filterDivs.push(document.getElementById('filter'));
			filterDivs.push(document.getElementById('type-filter'));
			filterDivs.forEach(filterDiv=> {
				var e = filterDiv.firstChild;
				while (e != null) {
					if (e.nodeType == 1) {
						if (e.hasChildNodes) {
							filterImg = e.firstChild.nextSibling;
							if (filterImg.classList != undefined && filterImg.classList.contains("on")) {
								filterImg.classList.remove("on");
								filterImg.classList.add("off");
							}
						}
					}
					e = e.nextSibling;
				}
			});
		}

		img.classList.remove('off');
		img.classList.add('on');

		const parentDivs = [];
		parentDivs.push(document.getElementById('creatures')); 
		parentDivs.push(document.getElementById('spells')); 
		parentDivs.push(document.getElementById('locations')); 
		parentDivs.forEach(parent => {
			var e = parent.firstChild.nextSibling;
			while (e != null) {
				if (e.nodeType == 1) {
					if (imgName == 'no-filter-button-img' || activeFilters.some(r=> e.classList.contains(r)))
						e.style.display = 'flex';
					else
						e.style.display = 'none';
				}

				e = e.nextSibling;
			}
		});
	}
	// if on, turn it off
	else if (img.classList.contains('on')) {
		while (activeFilters.indexOf(className) > -1)
			delete activeFilters[activeFilters.indexOf(className)];
		img.classList.remove('on');
		img.classList.add('off');

		const parentDivs = [];
		parentDivs.push(document.getElementById('creatures')); 
		parentDivs.push(document.getElementById('spells')); 
		parentDivs.push(document.getElementById('locations')); 
		parentDivs.forEach(parent => {
			var e = parent.firstChild.nextSibling;
			while (e != null) {
				if (e.nodeType == 1) {
					if (!activeFilters.some(r=> e.classList.contains(r)))
						e.style.display = 'none';
				}

				e = e.nextSibling;
			}
		});
	}
}