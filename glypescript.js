chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var tabUrl = tabs[0].url;
		var newTab = false;
		var glypeUrl = "http://albertyw.mit.edu/codes/glype/browse.php?u="+tabUrl;
		if (newTab) {
			currIndex = tabs[0].index;
			chrome.tabs.create({'url': glypeUrl, 'index': currIndex+1});
		} else {
			chrome.tabs.update(tabs[0].id, {'url': glypeUrl});
		}
	});
});
