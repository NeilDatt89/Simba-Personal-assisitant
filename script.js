function finishLoad(){
    document.getElementById("loader").style.transition = "1s";
    document.getElementById("loader").style.visibility="hidden";
}
setTimeout("finishLoad()", 5500);

function toggleMode(){
    //body
    var element = document.body;
    element.classList.toggle("darkmode");
    //micBttn
    var micBttn = document.getElementById("micBttn");
    micBttn.classList.toggle("micBttnA")
    //dMode
    var dMode = document.getElementById("dark-mode");
    dMode.classList.toggle("dark-modeA")
    //feedback
    var feedback = document.getElementById("feedback");
    feedback.classList.toggle("feedbackA")
    //moreOptions
    var mBttn = document.getElementById("more-options");
    mBttn.classList.toggle("more-optionsA");
}