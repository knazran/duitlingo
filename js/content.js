$(document).ready(function(){
    $("div.sectionTitle").text("Duitlingo!");

    if ( $( "#dl-side-widget" ).length < 1) {
 
        $("body").append("<div id='dl-side-widget'></div>");
        let widgetHTMLPath = chrome.extension.getURL("html/intro_widget.html");
        $("#dl-side-widget").load(widgetHTMLPath); 
     
    }
    
});

