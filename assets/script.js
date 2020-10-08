function getTaco(){

var appKey = "9b50da828a1dfe82773e9e4c27d62609"
var appId = "50ec7bea"
var urlID = "https://api.edamam.com/search?q=taco&app_id=" + appId + "&app_key=" + appKey

  $.ajax({
      url: urlID,
      method: "GET",
      crossDomain: true,
      dataType: "jsonp"
  }).then(function(response){
      console.log(response);
  })
}


$("#search-button").on("click", function(){
    var searchDrink = $("#search-value").val();
    $("#search-value").val("");
    getDrink(searchDrink)
})


function getDrink(searchDrink){
    $.ajax({
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php?S=" + searchDrink
    }).then(function(response){
        console.log(response)
    })
}

function getSalsa(){
    var appKey = "9b50da828a1dfe82773e9e4c27d62609"
var appId = "50ec7bea"
var urlID = "https://api.edamam.com/search?q=salsa&app_id=" + appId + "&app_key=" + appKey

  $.ajax({
      url: urlID,
      method: "GET",
      crossDomain: true,
      dataType: "jsonp"
  }).then(function(response){
      console.log(response);
  })
}

getTaco()
getSalsa()
