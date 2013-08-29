chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var tabUrl = encodeURIComponent(tabs[0].url);
		var newTab = true;
		var glypeUrl = "http://albertyw.mit.edu/codes/glype/browse.php?u="+tabUrl;
		if (newTab) {
			currIndex = tabs[0].index;
			chrome.tabs.create({'url': glypeUrl, 'index': currIndex+1}, function(tab) {
				chrome.tabs.executeScript(tab.id, { code: updatePageStr });
			});
		} else {
			chrome.tabs.update(tabs[0].id, {'url': glypeUrl}, function(tab) {
				chrome.tabs.executeScript(tab.id, { code: updatePageStr });
			});
		}
	});
});

var updatePageStr = "function updatePage() { \
	var currUrl = window.location.href; \
	var pdfUrl = ''; \
	if (currUrl.indexOf('sciencedirect') !== -1) { \
		pdfUrl = document.getElementById('pdfLink').href; \
	} \
	else if (currUrl.indexOf('wiley') !== -1) { \
		pdfUrl = document.getElementById('journalToolsPdfLink').href; \
	} \
	else if (currUrl.indexOf('rsc.org') !== -1) { \
		pdfUrl = currUrl.replace('articlelanding','articlepdf'); \
	} \
	else if (currUrl.indexOf('acs.org') !== -1) { \
		pdfUrl = document.getElementsByClassName('icon-item pdf-high-res')[0].firstChild.href; \
	} \
	if (pdfUrl !== '') { \
		window.location.href = pdfUrl; \
	} \
	else { \
		 \
	} \
} \
updatePage(); \
"
