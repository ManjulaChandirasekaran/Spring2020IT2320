/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)
function changeSize()
{
    //Goal: Get input value and set that to the width and height of div called box1
    var x = document.getElementById("inputSize").value;//get input box's value
    
    var box1 = document.getElementById("box1");//get box1 element which is a div
    box1.style.width = x;
    box1.style.height = x;
    
}

function changeShape()
{
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;

    var box2 = document.getElementById("box2");
    box2.style.width = w;
    box2.style.height = h;
}

function changeLinkContent()
{
    var linkContent = document.getElementById("linkContent1").value;

    var link = document.getElementById("link1");//the link that we are changing
    link.href=linkContent;//updated what the link is pointing to
    link.innerHTML = linkContent; //Updated what the link says
}

function changeSq()
{
    //I want to get all the divs that have class = "square"
    var squares = document.getElementsByClassName("square");//returns more than 1 element
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "yellow";
        squares[i].style.borderRadius = "50px";
        squares[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares[i].innerHTML;
        squares[i].innerHTML = x+ " Box";

    }
}

function createSq(){

    var parent = document.getElementById("parentSq");

    var child = document.createElement("div");
    child.classList.add("square");//add a class to the divs

    parent.appendChild(child);

}

function removeSq()
{
    var parent = document.getElementById("parentSq");
    var child = parent.lastElementChild;//returns last child
    parent.removeChild(child);
}