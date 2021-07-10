function finishLoad(){
    document.getElementById("loader").style.transition = "1s";
    document.getElementById("loader").style.visibility="hidden";
}
setTimeout("finishLoad()", 5500);