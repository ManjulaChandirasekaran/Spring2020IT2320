//setInterval is going to trigger a function call at a specified interval
//clearInterval is going to stop the trigger set by setInterval

window.onload = function(){
    //write code that manipulates DOM
    //setTimeout()
    var x = setInterval(setStyle, 1000);

    document.getElementById("clear").addEventListener("click",function(){
        clearInterval(x);
    });

    setTimeout(setColor,5000);
}

function setStyle()
{
    //demo for setInterval - toggle header color every x seconds
    var header = document.getElementById("header");
    if (header.style.backgroundColor == "lightblue")
       header.style.backgroundColor = "lightgreen";
    else
        header.style.backgroundColor = "lightblue";
}

function setColor()
{
    //demo for setTimeout - set header color to red
    document.getElementById("header").style.color = "red";
}