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
  //Jean added this for my gif of a taco
// function gitGif(){
//     $.ajax({
//         method: "GET",
//         url: "https://api.giphy.com/v1/gifs/search?q=Taco&api_key=9CodYBuIUr6P7Ec0hdjjXJaCo5RBFRb3"
//     })
//     .then(function(response){
//         console.log(response)
//     })
// }
// gitGif();
  // attempt to access object variables
  //on click of gif will disapare
$("#gif").on("click",function(){
    $(this).attr("style","display:none")
    // $(".container").attr("style", "transition: filter 2s")
    $(".container").attr("style", "filter:blur(0) ")
})