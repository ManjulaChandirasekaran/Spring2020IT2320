
//Animation using jQuery
//hide & show + Toggle

//slideUp slideDown slideToggle   
//fadeIn fadeOut fadeToggle 
//chaining
    
//animate 
//queueing => multiple animations on a single element
//animate with call back function
//stop animation

$(function(){
    //write code so that when i click on the div (section-a), 
    //everything underneath is hidden
    $(".section-a").on("click", function(){
        $(this).children().toggle(4000,function(){
            console.log("toggle complete");           
        });
    });

    //click h2 of section-b should slideToggle all the divs that are siblings to h2
    $(".section-b h2").on("click", function(){
        $(this).siblings("div").slideToggle(4000,function()
        {
            console.log("slide toggle complete");
            $(this).siblings("p").css("fontSize","1.2em");
        });
    });

    $(".section-c").on("click", function(){

        //fade div children only
        $(this).children("h2").slideToggle(4000,function()
        {
            console.log("slide toggle complete");
        });
        $(this).children("div").fadeToggle(4000,function()
        {
            console.log("fade toggle complete");
        });
    });


    $(".section-d").on("click",function() //Chaining multiple animations
    {
        $(this).children().hide(1000)
                            .show(2000,function(){
                                $(this).css("color","green");
                            })
                            .fadeOut(3000)
                            .slideDown(1000,function(){
                                $(this).css("color","orange");
                            })
                            .slideUp(2000);                            
    });

    $("#btn1").on("click",function(){
         $("#box").animate({ //animates css for the element "box"
            width:"toggle" ,
            height:"toggle",
            opacity: "toggle"
        },
        {
            step: function(){
                console.log("steps logged");
            },
            complete: function(){
            // $(this).css("opacity","1.0");
                $(this).css("background-color","blue");
            }
        });

    });

    $("#btn2").on("click",function(){
    //Square to rectangle
        $("#box").animate({
            width: "1000px"
        },3000);
    });

    $("#btn3").on("click",function(){
        //Square to circle
        $("#box").animate({
            borderRadius: "50%"
        }, 4000)
    });

    $("#btnStop").on("click",function(){
        $("#box").stop();
    });
});
