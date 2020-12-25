document.getElementsByTagName("body")[0].style.display = "none";
chrome.storage.sync.get("defaultnewtab", function(storage) {
console.log(storage.defaultnewtab)
});
chrome.storage.sync.get("defaultnewtab", function(storage) {
if(!storage.defaultnewtab) {
    // Get the current Tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {

        var active = tabs[0].id;
      
        // Set the URL to the Local-NTP (New Tab Page)
        chrome.tabs.update(active, { url: "chrome-search://local-ntp/local-ntp.html" }, function() { });
        // chrome.tabs.update(active, { url: "chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/dashboard.html" }, function() { });

        
    });

    }

else{

    document.getElementsByTagName("body")[0].style.display = "block";

    }
});


