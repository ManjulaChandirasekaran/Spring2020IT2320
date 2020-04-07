//1.  $() => jQuery

/*2. You need jquery library before you can use jQuery
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
*/

//3. All jQuery content will go inside the $(document).ready({}) secton

//4. $(document).ready(function(){}) => $(function(){})


//Accessing selectors using jQuery
//Using jQuery to add styles 

/*
document.getElementById()
document.getElementsByTagName()
document.getElementsByClassName()
*/

//get innerHTML
//get value
//get and set attributes

//events on() and off()

$(function(){    

    //all of jquery your code goes here
    
    
    //document.getElementById("").innerHTML
    var header = $("#header").text();
    console.log(header);
    $("#header").text("header");
    
    //getElementsByClassName
    var article = $(".article-section").text();
    console.log(article);
    
    //getElementsByTagName
    var aside = $("aside").html();
    console.log(aside);  

    //CSS manipulation using jQuery
    $("h1").css("font-family","cursive");
    $("h1").removeClass("header");
    $("h1").addClass("blueviolet");

    //Assigning click events for buttons
    $("#btn1").on("click",function(){
        $(".aside-section").hide();
    });    
    $("#btn2").on("click",function(){
        $(".aside-section").show();
    });

    $("#input").on("click",function(){
        console.log($("#getText").val());
        var txt = $("#getText").val();
        $("#header").text(txt);
    });

    //get and set attributes
    console.log($("btn1").attr("value"));
    console.log($("btn1").attr("type"));
    console.log($("btn1").attr("id"));

    $("#btn1").attr("value", "Don't show");
 
    $("#link2").attr("href","http://www.google.com")


});

