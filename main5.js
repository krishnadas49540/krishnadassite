const parallax = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function() {

    let offset = window.pageYOffset;

    parallax.forEach(function(prllx, i) {


        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";

    })

})
/*
AOS.init({
    duration: 1200,
})
*/
var ITEMS = ["beautiful", "amazing", "short", "simple", "understandable", "motivating"]
var currentSentence = 0;
var currentSentenceProgress = 0;
var currentInterval;
var textHolder = document.querySelector("#text");
//var cursorElement = document.querySelector("#cursor");
var pageLoaded = 0;
var text;
var textWithSpan;
var counterSave = 0;
var w = window.innerWidth;
var h = window.innerHeight;
/*
function Delay(){
    if(pageLoaded == 0 && currentSentenceProgress == 0){
        
    }
}
*/
var navigation = document.getElementById("navigation");
if(w <= h) {
    document.getElementById("onHover").style.display = "none";
    document.getElementById("onHover3").style.display = "none";
    document.getElementById("onHover2").style.display = "none";
    document.getElementById("icon").style.display = "block";
    document.getElementById("slideInText").style.alignItems = "center";
    document.getElementById("slideInText").style.justifyContent = "center";
    document.getElementById("slideInText").style.textAlign = "center";
    document.getElementById("slideInText").style.display = "flex";
    document.getElementById("videoObject").style.width = "calc(256px + 10vw)";
    document.getElementById("videoObject").style.height = "calc(144px + 10vh)";
    document.getElementById("item").style.alignItems = "center";
    document.getElementById("div2").style.justifyContent = "center";
    document.getElementById("videoObject").style.paddingTop = "40%";
    navigation.style.float = null;
}else{
    document.getElementById("onHover2").style.display = "block";
    document.getElementById("onHover3").style.display = "block";
    document.getElementById("icon").style.display = "none";
    document.getElementById("onHover").style.display = "block";
    if(w-h >= 100){
        var videoObject = document.getElementById("videoObject");
        videoObject.style.paddingTop = null;
        document.getElementById("item").style.left = "10%";
        document.getElementById("slideInText").style.backgroundColor = "transparent";
        document.getElementById("slideInText").style.left = "40%";
        document.getElementById("slideInText").style.width = "40%";
        document.getElementById("videoObject").style.width = "calc(256px + 15vw)";
        document.getElementById("videoObject").style.height = "calc(144px + 15vh)";
        document.getElementById("container2").style.alignItems = "right";
        document.getElementById("slideInText").style.position = "relative";
        document.getElementById("item").style.alignItems = "left";
        document.getElementById("item").style.position = "relative";
        document.getElementById("div2").style.display = "flex";
        document.getElementById("div2").style.alignItems = "center";
        document.getElementById("div2").style.justifyContent = "center";
        document.getElementById("div2").style.fontFamily = "Roboto Thin";
        document.getElementById("item").style.alignItems = "left";
        document.getElementById("slideInText").style.textAlign = "right";
        
    }else{
        var container2 = document.getElementById("container2")
        var slideInText = document.getElementById("slideInText")
        var item = document.getElementById("item")
        var div2 = document.getElementById("div2")
        //div25.style.textAlign = null;
        //div2.removeProperty("font-family");
        //div2.removeProperty("display");
        //div2.removeProperty("align-items");
        //div2.removeProperty("justify-content");
        //item.removeProperty("position");
        //item.removeProperty("left");
        //slideInText.removeProperty("width");
        //slideInText.removeProperty("left");
        //slideInText.removeProperty("background-color");
        //container2.removeProperty("align-text");
        div2.style.fontFamily = null;
        div2.style.display = null;
        div2.style.alignItems = "center";
        div2.style.justifyContent = null;
        item.style.position = null;
        item.style.left = null;
        slideInText.style.width = null;
        slideInText.style.left = null;
        slideInText.style.backgroundColor = null;
        container2.style.alignText = null;
        document.getElementById("slideInText").style.alignItems = "center";
        document.getElementById("slideInText").style.justifyContent = "center";
        document.getElementById("slideInText").style.textAlign = "center";
        document.getElementById("slideInText").style.display = "flex";
        document.getElementById("videoObject").style.width = "calc(256px + 10vw)";
        document.getElementById("videoObject").style.height = "calc(144px + 10vh)";
        document.getElementById("item").style.alignItems = "center";
        document.getElementById("div2").style.justifyContent = "center";
        document.getElementById("videoObject").style.paddingTop = "40%";
    }
}

window.onresize = checkWidth;
function checkWidth (){
    var w = window.innerWidth;
    var h = window.innerHeight;
    var navigation = document.getElementById(navigation);
    /*
    var div2removedvalue1 = div2.removeProperty("font-family");
    var div2removedvalue2 = div2.removeProperty("font-family");
    var div2removedvalue3 = div2.removeProperty("align-items");
    */
    /*
    var itemremovedvalue1 = item.removeProperty("position");
    var itemremovedvalue2 = item.removeProperty("left");
    */
    /*
    var slideintextremovedvalue1 = slideInText.removeProperty("width");
    var slideintextremovedvalue2 = slideInText.removeProperty("left");
    var slideintextremovedvalue3 = slideInText.removeProperty("backgroundColor");
    */
    /*
    if(w <= h) {
            document.getElementById("onHover").style.display = "none";
            document.getElementById("icon").style.display = "block";
    /*
          /*
            document.getElementById("item").style.textAlign = "center";
            document.getElementById("item").style.alignItems = "center";
        */
    /*
    /*
    }else{
        closeNav();
        document.getElementById("icon").style.display = "none";
        document.getElementById("onHover").style.display = "block";
        /*
        document.getElementById("item").style.textAlign = "right";
        document.getElementById("item").style.alignItems = "left";
        
    }
    */
   if(w <= h) {
        var navigation = document.getElementById("navigation");
        var container2 = document.getElementById("container2")
        var slideInText = document.getElementById("slideInText")
        var item = document.getElementById("item")
        var div2 = document.getElementById("div2")
        //div25.style.textAlign = null;
        //div2.removeProperty("font-family");
        //div2.removeProperty("display");
        //div2.removeProperty("align-items");
        //div2.removeProperty("justify-content");
        //item.removeProperty("position");
        //item.removeProperty("left");
        //slideInText.removeProperty("width");
        //slideInText.removeProperty("left");
        //slideInText.removeProperty("background-color");
        //container2.removeProperty("align-text");
        div2.style.fontFamily = null;
        div2.style.display = null;
        div2.style.alignItems = "center";
        div2.style.justifyContent = null;
        item.style.position = null;
        item.style.left = null;
        slideInText.style.width = null;
        slideInText.style.left = null;
        slideInText.style.backgroundColor = null;
        container2.style.alignText = null;
        navigation.style.float = null;
        document.getElementById("onHover").style.display = "none";
        document.getElementById("onHover2").style.display = "none";
        document.getElementById("onHover3").style.display = "none";
        document.getElementById("icon").style.display = "block";
        document.getElementById("slideInText").style.alignItems = "center";
        document.getElementById("slideInText").style.justifyContent = "center";
        document.getElementById("slideInText").style.textAlign = "center";
        document.getElementById("slideInText").style.display = "flex";
        document.getElementById("videoObject").style.width = "calc(256px + 10vw)";
        document.getElementById("videoObject").style.height = "calc(144px + 10vh)";
        document.getElementById("item").style.alignItems = "center";
        document.getElementById("div2").style.justifyContent = "center";
        document.getElementById("videoObject").style.paddingTop = "40%";
    }else{
        closeNav();
        document.getElementById("icon").style.display = "none";
        document.getElementById("onHover").style.display = "block";
        document.getElementById("onHover2").style.display = "block";
        document.getElementById("onHover3").style.display = "block";
        document.getElementById("navigation").style.float = "left";
        if(w-h >= 100){
            var videoObject = document.getElementById("videoObject");
            videoObject.style.paddingTop = null;
            document.getElementById("item").style.left = "10%";
            document.getElementById("slideInText").style.backgroundColor = "transparent";
            document.getElementById("slideInText").style.left = "40%";
            document.getElementById("slideInText").style.width = "40%";
            document.getElementById("videoObject").style.width = "calc(256px + 15vw)";
            document.getElementById("videoObject").style.height = "calc(144px + 15vh)";
            document.getElementById("container2").style.alignItems = "right";
            document.getElementById("slideInText").style.position = "relative";
            document.getElementById("item").style.alignItems = "left";
            document.getElementById("item").style.position = "relative";
            document.getElementById("div2").style.display = "flex";
            document.getElementById("div2").style.alignItems = "center";
            document.getElementById("div2").style.justifyContent = "center";
            document.getElementById("div2").style.fontFamily = "Roboto Thin";
            document.getElementById("item").style.alignItems = "left";
            document.getElementById("slideInText").style.textAlign = "right";
            
        }else{
            var container2 = document.getElementById("container2")
            var slideInText = document.getElementById("slideInText")
            var item = document.getElementById("item")
            var div2 = document.getElementById("div2")
            //div25.style.textAlign = null;
            //div2.removeProperty("font-family");
            //div2.removeProperty("display");
            //div2.removeProperty("align-items");
            //div2.removeProperty("justify-content");
            //item.removeProperty("position");
            //item.removeProperty("left");
            //slideInText.removeProperty("width");
            //slideInText.removeProperty("left");
            //slideInText.removeProperty("background-color");
            //container2.removeProperty("align-text");
            div2.style.fontFamily = null;
            div2.style.display = null;
            div2.style.alignItems = "center";
            div2.style.justifyContent = null;
            item.style.position = null;
            item.style.left = null;
            slideInText.style.width = null;
            slideInText.style.left = null;
            slideInText.style.backgroundColor = null;
            container2.style.alignText = null;
            document.getElementById("slideInText").style.alignItems = "center";
            document.getElementById("slideInText").style.justifyContent = "center";
            document.getElementById("slideInText").style.textAlign = "center";
            document.getElementById("slideInText").style.display = "flex";
            document.getElementById("videoObject").style.width = "calc(256px + 10vw)";
            document.getElementById("videoObject").style.height = "calc(144px + 10vh)";
            document.getElementById("item").style.alignItems = "center";
            document.getElementById("div2").style.justifyContent = "center";
            document.getElementById("videoObject").style.paddingTop = "40%";
        }
    }
}
function Type(){
    text = ITEMS[currentSentence].substring(0, currentSentenceProgress + 1);
    textWithSpan = '<br><span id = "textSpan" aria-hidden="true">'+text+'</span>';
    /*text = ITEMS[currentSentence].substring(0, currentSentenceProgress + 1)*/
    document.querySelector("#text").innerHTML = textWithSpan;
    currentSentenceProgress++;
    
    if(pageLoaded == 0 && currentSentenceProgress != 0){
        clearInterval(currentInterval)
        currentInterval = setInterval(Type, 100);
    }
    
    if(text == ITEMS[currentSentence]){
        //cursorElement.style.display = 'none';
        clearInterval(currentInterval);
        setTimeout(function(){
            currentInterval = setInterval(Delete, 100);
        }, 2000);
    }
}

function Delete(){
    text = ITEMS[currentSentence].substring(0, currentSentenceProgress - 1);
    textWithSpan = '<br><span id = "textSpan" span aria-hidden="true">'+text+'</span>';
    /*text = ITEMS[currentSentence].substring(0, currentSentenceProgress - 1)*/
    document.querySelector("#text").innerHTML = textWithSpan;
    currentSentenceProgress--;
    if(text == ''){
        clearInterval(currentInterval);
        if(currentSentence == (ITEMS.length - 1)){
            currentSentence = 0;
            pageLoaded++;
        }else{
            currentSentence++;
        }
        currentSentenceProgress = 0;
        setTimeout(function(){
            //cursorElement.style.display = 'inline-block';
            currentInterval = setInterval(Type, 100);
        }, 200);
    }
}

/*
function sleep(milliseconds){
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
*/
const load = () => {
    document.querySelector("#text").innerHTML = '<br><br>';
    currentInterval = setInterval(Type, 1000);
}
window.onload = load;
/*
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".leep { border-right: 0.08em solid #fff}";
document.body.appendChild(css);
*/
function openNav() {
    if(counterSave %2 == 0){
        /*
        document.getElementById("myNav").style.height = "calc(400px + 2vw)";
        */
       counterSave = 0;
       document.getElementById("myNav").style.height = "calc(400px + 10vh)";
        counterSave++;
    }else{
        closeNav();
        counterSave++;
    }
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}