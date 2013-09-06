function updatePage() {
	var currUrl = window.location.href;
	var pdfUrl = '';

	if (currUrl.indexOf('.pdf+html') !== -1) {
		pdfUrl = currUrl.slice(0,currUrl.indexOf('+html'));
	}
	else if (currUrl.indexOf('sciencedirect') !== -1) {
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
	else if (currUrl.indexOf('pnas.org') !== -1) {
		pdfUrl = currUrl.replace('short','full.pdf');
	}
	else if (currUrl.indexOf('jstor.org') !== -1) {

	}
	else if (currUrl.indexOf('journals.cambridge.org') !== -1) {

	}
	else if (currUrl.indexOf('ieeexplore.ieee.org') !== -1) {

	}
	else if (currUrl.indexOf('proquest.com') !== -1) {

	}
	if (pdfUrl !== '') {
		window.location.href = pdfUrl;
	}
	else {
		// Stay on current page
	}
}
updatePage();
