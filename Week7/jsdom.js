/*********************************************************************/
//Global Area


window.onload = function(){
//DOM related code will be here
//All event listeners go inside window.onload

    var btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", changeSize);//function name only; donot use ()
    
    var btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", changeShape);

    var btn3 = document.getElementById("btn3");
    btn3.addEventListener("click",changeLinkContent);

    var btn4 = document.getElementById("btn4");
    btn4.addEventListener("click",changeSq);

    var btn5 = document.getElementById("btn5");
    btn5.addEventListener("click",createSq);

    var btn6 = document.getElementById("btn6");
    btn6.addEventListener("click",removeSq);
    
    var elems = document.getElementsByClassName("userInput");
    //elems is an array so you need a loop
    //array elements will be accessed by using a subscript ex. elems[i]
    for( var i=0; i < elems.length; i++)
    {
        elems[i].addEventListener("change", function(){
            checkforerrors(this);
        } )
    }
}

function checkforerrors(elem)
{   
    /*userInput validation rules
    alphabets allowed and numbers allowed
    */
    //var pattern = /[^a-zA-Z0-9]/; //this pattern also works
    var pattern = /\W|_/g; //   \W means alphanumeric and hypens are valid

    var errorLabelElem = elem.nextElementSibling;

    if (pattern.test(elem.value))
    {
        elem.style.backgroundColor = "red"; 
        errorLabelElem.innerHTML = "Enter a valid alphanumeric value only";
    }
    else
    {
        elem.style.backgroundColor = "lightblue";           
        errorLabelElem.innerHTML = "";
    }
}

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
    
    child.addEventListener("click", function(){
        //this child element does not have an id so we can use "this" keyword
        this.style.backgroundColor = "yellow";
    });

    parent.appendChild(child);

}

function removeSq()
{
    var parent = document.getElementById("parentSq");
    var child = parent.lastElementChild;//returns last child
    parent.removeChild(child);
}