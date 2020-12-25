document.addEventListener("DOMContentLoaded", function() {


var checkboxx = document.getElementById("togBtn");

checkboxx.addEventListener("click", function() {
	chrome.storage.sync.set({ 'defaultnewtab': checkboxx.checked })
	console.log(checkboxx.checked)
	if(checkboxx.checked){

		console.log("Protection is ON")

		chrome.browserAction.setPopup({popup: "demoCheck.html"});

	}
	else{
		console.log("Protection is OFF")
		chrome.browserAction.setPopup({popup: "demo.html"});


	}


	// chrome.storage.local.get('defaultnewtab', function(status){
	//     var switchStatus = status.defaultnewtab;

	//     if(switchStatus) {
	//         document.getElementById("togBtn").checked = true;

	//     } else {
	//         document.getElementById("togBtn").checked = false;
	        
	//     }
	// });	
	});

})	
