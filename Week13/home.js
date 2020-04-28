$(function(){

    $("#button1").on("click", function(){
       //URL: "https://api.openbrewerydb.org/breweries";//no query string
       
       var url = "https://api.openbrewerydb.org/breweries";
      $.ajax(
        {
          url: url,
          type: "Get",
          success: function(data)
          {
            $("#results").text("");
            console.log(data);
            $.each(data,function(i,item){//parse items inside data array
              var para = $("<p></p>");
              para.text(item.name +" "+ item.id  +" "+ item.city);
              $("#results").append(para);
           });            
          }
        });
    }); 


    $("#button2").on("click", function(){          
        //URL: "https://api.openbrewerydb.org/breweries?by_city=cleveland"
        var searchTerm = $("#searchByCity").val();//query string #1
        var baseUrl = "https://api.openbrewerydb.org/breweries?by_city=";
        
        var sortBy = $("#sortBy").val();//query string #2
        var url = baseUrl + searchTerm + "&sort=-"+sortBy;
        
        $.ajax(
          {
            url: url,
            type: "Get",
            success: function(data)
            {
              $("#results").text("");
              console.log(data); //if only one item, do data.name, data.id and data.city
              $.each(data,function(i,item){//parse items inside data array
                var para = $("<p></p>");
                para.text(item.name +" "+ item.id  +" "+ item.city);
                $("#results").append(para);
             });                        
            }
          });
    });

    
});