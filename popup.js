document.addEventListener('DOMContentLoaded', function() {
    const checkTimeButton = document.getElementById('checkTime');
    const currentTimeDiv = document.getElementById('currentTime');

    console.log('DOM fully loaded and parsed');
    
    checkTimeButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({message: 'getAuthToken'}, function(response) {
            if (response && !chrome.runtime.lastError) {
                currentTimeDiv.textContent = 'Token: ' + response.token;    
            } else {
                currentTimeDiv.textContent = 'Error: ' + chrome.runtime.lastError.message;    
            }
        });
    }) ;
});
