
chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});

function DOMtoString(doc) {
    return "Ken";
}
