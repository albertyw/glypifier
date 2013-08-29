function updatePage() {
	var currUrl = window.location.href;
	var pdfUrl = '';
	if (currUrl.indexOf('sciencedirect') !== -1) {
		pdfUrl = document.getElementById('pdfLink').href;
	}
	else if (currUrl.indexOf('wiley') !== -1) {
		pdfUrl = document.getElementById('journalToolsPdfLink').href;
	}
	else if (currUrl.indexOf('rsc.org') !== -1) {
		pdfUrl = currUrl.replace('articlelanding','articlepdf');
	}
	else if (currUrl.indexOf('acs.org') !== -1) {
		pdfUrl = document.getElementsByClassName('icon-item pdf-high-res')[0].firstChild.href;
	}
	if (pdfUrl !== '') {
		window.location.href = pdfUrl;
	}
	else {
		// Stay on current page
	}
}
updatePage();
