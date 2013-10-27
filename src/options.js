function toBool(str) {
   if ("false" === str)
      return false;
   else
      return str;
}

// Save options
function saveOptions() {
  var proxyURL = document.getElementById("proxyURL").value;
  var newTabFlag = toBool(document.getElementById("newTabChx").checked);
  var autoPdf = toBool(document.getElementById("autoPdf").checked);
  var keys = {};
  keys['proxyURL'] = proxyURL;
  keys['newTabFlag'] = newTabFlag;
  keys['autoPdf'] = autoPdf;
	chrome.storage.sync.set(keys);
}

// Load options
function restoreOptions() {
	chrome.storage.sync.get(['proxyURL', 'newTabFlag', 'autoPdf'], function(items) {
	  var proxyURL = items['proxyURL'];
		var tabFlag = items['newTabFlag'];
		var autoPdf = items['autoPdf'];
		document.getElementById("proxyURL").value = proxyURL;
		document.getElementById("newTabChx").checked = tabFlag;
		document.getElementById("autoPdf").checked = autoPdf;
	});
}

window.onload = function () {
	restoreOptions();
	document.getElementById('save').onclick=saveOptions;
}
