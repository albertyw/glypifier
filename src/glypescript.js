chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var tabUrl = encodeURIComponent(tabs[0].url);
		var newTab = false;
		var autoPdf = false;
		var glypeUrl = "http://albertyw.mit.edu/codes/glype/browse.php?u="+tabUrl;
		chrome.storage.sync.get(['newTabFlag', 'autoPdf'], function(items){
		  newTab = items['newTabFlag'];
		  autoPdf = items['autoPdf'];
      if (newTab) {
        currIndex = tabs[0].index;
        chrome.tabs.create({'url': glypeUrl, 'index': currIndex+1}, function(tab) {
          if(autoPdf) chrome.tabs.executeScript(tab.id, { file: "updatepage.js" });
        });
      } else {
        chrome.tabs.update(tabs[0].id, {'url': glypeUrl}, function(tab) {
          if(autoPdf) chrome.tabs.executeScript(tab.id, { file: "updatepage.js" });
        });
      }
		});
	});
});
