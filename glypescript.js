chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var tabUrl = tabs[0].url;
		var newTab = false;
		var glypeUrl = "http://albertyw.mit.edu/codes/glype/browse.php?u="+tabUrl;
		if (newTab) {
			chrome.tabs.create({'url': glypeUrl});
		} else {
			chrome.tabs.update(tabs[0].id, {'url': glypeUrl});
		}
	});
});
