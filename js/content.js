$(document).ready(function(){

    let currentUrl = window.location.href;
    console.log(currentUrl)
    if (currentUrl === "https://www.bursamarketplace.com/"){
        $("div.sectionTitle").text("Duitlingo!");

        renderWidget("html/intro_widget.html");

        var bull_img = chrome.extension.getURL('assets/MrBull.png')
        if (!$('#dl-overlay').length){
            $("body").prepend("<div id='dl-overlay' class='absolute w-screen h-screen bg-gray-400' style='opacity:70%; z-index:1100'></div>");
        }
        if (!$('#image-bull img').length){
            $('#image-bull').append(`<img src="${bull_img}" alt="thebull">`)
            $('#image-bull-2').append(`<img src="${bull_img}" alt="thebull">`)
        }
    }

    if (currentUrl === "https://www.bursamarketplace.com/index.php"){
        console.log("render cta")
        if (!$('#dl-overlay').length){
            $("body").prepend("<div id='dl-overlay' class='flex absolute w-screen h-screen bg-gray-400' style='opacity:70%; z-index:1100'></div>");

            $("body").prepend("<div id='dl-overlay-transparent' class='flex absolute w-screen h-screen' style='z-index:1300'></div>");
            let widgetHTMLPath = chrome.extension.getURL("html/cta_widget.html");
            $("#dl-overlay-transparent").load(widgetHTMLPath); 
        }
        // renderWidget("html/cta_widget.html")

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

    if (currentUrl === "https://www.bursamarketplace.com/mkt/themarket/stock/MTAG/analystconsensus"){
        console.log("render analyst consensus")
        renderWidget("html/analyst_widget.html")

        var bull_img = chrome.extension.getURL('assets/MrBull.png')
        if (!$('#image-bull img').length){
            $('#image-bull').append(`<img src="${bull_img}" alt="thebull">`)
        }
    }
    
    if (currentUrl === "https://www.bursamarketplace.com/mkt/themarket/stock/GENM"){
        console.log("render genm stocks")
        renderWidget("html/stocks_explain.html")

        var bull_img = chrome.extension.getURL('assets/MrBull.png')
        if (!$('#image-bull img').length){
            $('#image-bull').append(`<img src="${bull_img}" alt="thebull">`)
        }
    }
});

function renderWidget(htmlTemplate){
    if ( $( "#dl-side-widget" ).length < 1) {
    
        $("body").append("<div id='dl-side-widget'></div>");
        let widgetHTMLPath = chrome.extension.getURL(htmlTemplate);
        $("#dl-side-widget").load(widgetHTMLPath); 
    
    }
}