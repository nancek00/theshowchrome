  let changeColor = document.getElementById('changeColor');

console.log("Hello Ken");
const init = () => {
    const btn = document.getElementById("btn");
    btn.onclick = function(element) {
        testButton(null);
    };
};
const testButton = event => console.log("ButtonClick");
init();

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        var message = document.querySelector('#message');
        message.innerHTML = request.source;
    }
});
function onWindowLoad() {

    var message = document.querySelector('#message');

    chrome.tabs.executeScript(null, {
        file: "getPageSource.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });

}

window.onload = onWindowLoad;
