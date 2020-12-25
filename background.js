document.addEventListener("DOMContentLoaded", function() {

var switchStatus;
chrome.storage.onChanged.addListener(function(changes, areaName){
    console.log('received');
    chrome.storage.sync.get('defaultnewtab', function(status){
        switchStatus = status.defaultnewtab;
        console.log(switchStatus);

        if(switchStatus === true) {
            chrome.browserAction.setPopup({popup: "demoCheck.html"});
            console.log('when checked ' + switchStatus);
        }
        if(switchStatus === false) {
            chrome.browserAction.setPopup({popup: "demo.html"});
            console.log('unchecked ' + switchStatus);
         }
    });
});
});

