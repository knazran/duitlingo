// chrome.runtime.onInstalled.addListener(function() {
//     chrome.storage.sync.set({color: '#3aa757'}, function() {
//       console.log("The color is green.");
//     });
//   });
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
      console.log(current_tab_info.url)
      if(/^https:\/\/www\.google/.test(current_tab_info.url)){
        chrome.tabs.insertCSS(null, {file: 'css/mystyles.css'})
        chrome.tabs.executeScript(null, {file: 'js/foreground.js'}, () => console.log('i injected'))
      }
      else if(/^https:\/\/www\.bursamarketplace/.test(current_tab_info.url)){
        chrome.tabs.insertCSS(null, {file: 'css/mystyles.css'})
        chrome.tabs.executeScript(null, {file: 'js/foreground2.js'}, () => console.log('2 injected'))
      };
/*
      else if(/^https:\/\/www\.bursamarketplace\.mlt/.test(current_tab_info.url)){
        chrome.tabs.insertCSS(null, {file: 'css/mystyles.css'})
        chrome.tabs.executeScript(null, {file: 'js/popinfo.js'}, () => console.log('i injected'))
      };*/
    });
  }
)

