chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var tabUrl = tabs[0].url;
		var newTab = true;
		if (newTab) {
			chrome.tabs.create({'url': "http://albertyw.mit.edu/codes/glype/"}, function(tab) {
				chrome.tabs.executeScript(tab.id, {
					code: "document.getElementById('input').value='"+tabUrl+"'; document.forms[0].submit();"
				});
			});
		}
		else { // does not work
			chrome.tabs.update(tabs[0].id, {'url': "http://albertyw.mit.edu/codes/glype/"}, function(tab) {
				chrome.tabs.executeScript(tab.id, {
					code: "document.getElementById('input').value='"+tabUrl+"'; document.forms[0].submit();"
				});
			});
		}
	});
});
