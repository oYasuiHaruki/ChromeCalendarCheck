chrome.runtime.onInstalled.addListener(function() {
    // chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
    //     if (chrome.runtime.lastError) {
    //         console.log(chrome.runtime.lastError);
    //     } else {
    //         console.log('Token acquired', token);
    //     }
    // })
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "getAuthToken") {
        chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
            if (chrome.runtime.lastError) {
                console.error('Error getting token:', chrome.runtime.lastError);
                sendResponse({token: null, error: chrome.runtime.lastError.message });
            } else {
                console.log('Token acquired:', token);
                sendResponse({token: token});
            }
        });
        return true;
    }
    return false;
});

