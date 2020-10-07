$(document).ready(function () {

  

});

function tacoRecipe(){
$.ajax({
    method: "GET",
    url: "https://api.edamam.com/search",
    data: { app_id:"9febdf63", app_key:"81e8afa3f473280b371839961f1c44a0", q:"taco"},
    dataType: "json",
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("jqXHR"+jqXHR)
        console.log("-------------------------------")
        console.log("textStatus"+textStatus)
        console.log("-------------------------------")
        console.log("errorThrown"+errorThrown);
    },
    success: function(data, textStatus, jqXHR) {


        console.dir(data)
        console.log("-------------------------------")
        console.log("textStatus: "+textStatus)
        console.log("-------------------------------")
        console.log("jqXHR: "+jqXHR);
  
      }
  }
  );}

  // attempt to access object variables