

const parallax = document.querySelectorAll(".parallax");

window.addEventListener("scroll", function() {

    let offset = window.pageYOffset;

    parallax.forEach(function(prllx, i) {


        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";

    })

})
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
var w = window.innerWidth;
var h = window.innerHeight;
var counterSave = 0;
/*
function Delay(){
    if(pageLoaded == 0 && currentSentenceProgress == 0){
        
    }
}
*/
var navigation = document.getElementById("navigation");
if(w <= h) {
    document.getElementById("onHover").style.display = "none";
    document.getElementById("onHover2").style.display = "none";
    document.getElementById("icon").style.display = "block";
    document.getElementById("onHover3").style.display = "none";
    var navigation = document.getElementById("navigation");
    navigation.style.float = null;

}else{
    document.getElementById("icon").style.display = "none";
    document.getElementById("onHover").style.display = "block";
    document.getElementById("onHover2").style.display = "block";
    document.getElementById("navigation").style.float = "right";
    document.getElementById("onHover3").style.display = "block";
}

window.onresize = checkWidth;
function checkWidth (){
    var w = window.innerWidth;
    var h = window.innerHeight;
    if(w <= h) {
        var navigation = document.getElementById("navigation");
        navigation.style.float = null;
        document.getElementById("onHover").style.display = "none";
        document.getElementById("onHover2").style.display = "none";
        document.getElementById("onHover3").style.display = "none";
        document.getElementById("icon").style.display = "block";
    }else{
        closeNav();
        document.getElementById("icon").style.display = "none";
        document.getElementById("onHover").style.display = "block";
        document.getElementById("navigation").style.float = "left";
        document.getElementById("onHover2").style.display = "block";
        document.getElementById("onHover3").style.display = "block";
    }
}

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