// chrome.runtime.onInstalled.addListener(function() {    // add an action here
// });
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

// })

chrome.browserAction.onClicked.addListener(function(tab) {
    const createData = (tab.url !== '' || tab.url !== undefined) ? {url: tab.url} : {} ;
    if(!tab.incognito){
        createData.incognito = true;
        chrome.windows.create(createData);
    }else {
        createData.incognito = false;
        chrome.windows.create(createData);
    }
})