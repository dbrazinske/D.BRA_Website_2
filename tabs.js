"use strict";
// Tabs section3
function changeHeader(event, name){
    
    var tabs = document.querySelectorAll(".tab");
    var buttons = document.querySelectorAll(".button1");

    // // Nuima stilius ir display
    for(var i = 0; i < tabs.length; i++){
        tabs[i].style.display = "none";
        buttons[i].classList.remove("selected");
    }
    
    document.getElementById(name).style.display = "block";
    event.currentTarget.classList.add("selected");
    

    setTimeout(function(){
        var tabs = document.querySelectorAll(".tab");
        for (var x of tabs){
            x.classList.remove("tabAnimation");
        }
        document.getElementById(name).classList.add("tabAnimation");
    }, 10);
    
}

changeHeader("pirmas");


