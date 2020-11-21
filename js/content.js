$(document).ready(function(){

    let currentUrl = window.location.href;
    console.log(currentUrl)
    if (currentUrl === "https://www.bursamarketplace.com/"){
        $("div.sectionTitle").text("Duitlingo!");

        renderWidget("html/intro_widget.html")
        // if ( $( "#dl-side-widget" ).length < 1) {
    
        //     $("body").append("<div id='dl-side-widget'></div>");
        //     let widgetHTMLPath = chrome.extension.getURL("html/intro_widget.html");
        //     $("#dl-side-widget").load(widgetHTMLPath); 
        
        // }
    }

    if (currentUrl === "https://www.bursamarketplace.com/mkt/themarket/stock"){
        console.log("render stock")
        renderWidget("html/stocks_widget.html")
    }
    
    if (currentUrl === "https://www.bursamarketplace.com/mlt/myportfolio"){
        console.log("render mlt")
        renderWidget("html/mlt_widget.html")
    }

    if (currentUrl === "https://www.bursamarketplace.com/mkt/themarket/stock/MTAG"){
        console.log("render mtag stocks")
        renderWidget("html/stocks_details.html")
    }
    
});

function renderWidget(htmlTemplate){
    if ( $( "#dl-side-widget" ).length < 1) {
    
        $("body").append("<div id='dl-side-widget'></div>");
        let widgetHTMLPath = chrome.extension.getURL(htmlTemplate);
        $("#dl-side-widget").load(widgetHTMLPath); 
    
    }
}