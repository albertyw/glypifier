function toBool(str)
{
   if ("false" === str)
      return false;
   else 
      return str;
}

function saveOptions() {
	chrome.storage.local.set({'newTabFlag': toBool(document.getElementById("newTabChx").checked)}, function() {
		chrome.storage.local.get('newTabFlag', function(items) {  })
	});
}

function restoreOptions() {
	var tabFlag;
	chrome.storage.local.get('newTabFlag', function(items) { 
		tabFlag = items['newTabFlag']
		document.getElementById("newTabChx").checked = tabFlag;
	});
}

window.onload = function () {
	restoreOptions();
	document.getElementById('save').onclick=saveOptions;
}
