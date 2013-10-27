chrome.browserAction.onClicked.addListener(function() {
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
		var tabUrl = encodeURIComponent(tabs[0].url);
		var defaults = {};
		defaults['newTabFlag'] = false;
		defaults['autoPdf'] = false;
		defaults['proxyURL'] = '';
		chrome.storage.sync.get(defaults, function(options){
		  options['proxyURL'] += "?u="+tabUrl;
      if (options['newTabFlag']) {
        currIndex = tabs[0].index;
        chrome.tabs.create({'url': options['proxyURL'], 'index': currIndex+1}, function(tab) {
          if(!options['autoPdf']) return;
          chrome.tabs.executeScript(tab.id, { file: "updatepage.js" }, function(tab) {
            chrome.tabs.executeScript(tab.id, { file: "updatepageagain.js" });
          });
        });
      } else {
        chrome.tabs.update(tabs[0].id, {'url': options['proxyURL']}, function(tab) {
          if(!options['autoPdf']) return;
          // chrome.tabs.update callback fires before page is loaded
          setTimeout(function(){
            chrome.tabs.executeScript(tab.id, { file: "updatepage.js" }, function(tab) {
              chrome.tabs.executeScript(tab.id, { file: "updatepageagain.js" });
            });
          },2000);
        });
      }
		});
	});
});
