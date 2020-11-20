chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
      console.log(current_tab_info.url)
      if ("https://www.bursamarketplace.com/" === current_tab_info.url){
        injectDependeciesScripts(tab.id);
        chrome.tabs.executeScript(null, {file: 'js/content.js'}, () => console.log('2 injected'))
      };
    });
  }
)

// Helper function to inject any script dependencies so our content script can use
function injectDependeciesScripts(tab_id) {
    chrome.tabs.executeScript(tab_id, {
        file: 'js/libraries/jquery-3.5.1.min.js'
    });
    chrome.tabs.insertCSS(tab_id, {
        file: 'css/tailwind.min.css'
    });
    chrome.tabs.insertCSS(tab_id, {
        file: 'css/content.css'
    })

}
