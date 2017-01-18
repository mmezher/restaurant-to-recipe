

// Monique Mezher's background.js for Restaurant to Recipe, 1/17/2016

//call when user clicks browser action
chrome.browserAction.onClicked.addListener(function(tab){
	//send message to active tab
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
var activeTab = tabs[0];
chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});

	});
});

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if( request.message === "open_new_tab" ) {
			chrome.tabs.create({"url": request.url});

		}
	});