
chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});

function DOMtoString(doc) {
    const c = doc.querySelector("table");

    const p = c.querySelectorAll("tr").length;
    return "Ken" + p;
}
