/* eslint-disable no-undef */
// background.js
let isPopupVisible = false;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message ) {
    isPopupVisible = !isPopupVisible;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        const tabId = tabs[0].id;
        chrome.tabs.sendMessage(tabId, { action: "", visible: isPopupVisible });
      }
    });
  }
});
