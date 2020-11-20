$(document).ready(function(){
    $("div.sectionTitle").text("Duitlingo!");
    console.log(chrome);
    // chrome.tabs.onActivated.addListener(tab => {
    //     chrome.tabs.get(tab.tabId, current_tab_info => {
    //     console.log(current_tab_info.url)
    //     chrome.tabs.insertCSS(null, {file: '../css/tailwind.min.css'})
    //     // if(/^https:\/\/www\.google/.test(current_tab_info.url)){
    //     //     chrome.tabs.insertCSS(null, {file: 'css/mystyles.css'})
    //     //     chrome.tabs.executeScript(null, {file: 'js/foreground.js'}, () => console.log('i injected'))
    //     // };

    //     });
    // }
    // )
    $("body").append("<div id='dl-side-widget'></div>");
    let widgetHTMLPath = chrome.extension.getURL("html/widget.html");
    $("#dl-side-widget").load(widgetHTMLPath); 
});