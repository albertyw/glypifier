function toBool(str) {
   if ("false" === str)
      return false;
   else
      return str;
}

// Save options
function saveOptions() {
  var newTabFlag = toBool(document.getElementById("newTabChx").checked);
  var autoPdf = toBool(document.getElementById("autoPdf").checked);
  var keys = {};
  keys['newTabFlag'] = newTabFlag;
  keys['autoPdf'] = autoPdf;
	chrome.storage.local.set(keys);
}

// Load options
function restoreOptions() {
	chrome.storage.local.get(['newTabFlag', 'autoPdf'], function(items) {
		var tabFlag = items['newTabFlag'];
		var autoPdf = items['autoPdf'];
		document.getElementById("newTabChx").checked = tabFlag;
		document.getElementById("autoPdf").checked = autoPdf;
	});
}

window.onload = function () {
	restoreOptions();
	document.getElementById('save').onclick=saveOptions;
}
