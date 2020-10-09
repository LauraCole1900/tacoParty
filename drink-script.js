var apiKey = "1"



$(document).ready(function(){
  $("#searchBtn").on("click", function(){
    var drinkType = $("#searchInput").val()
    $("#searchInput").val("")
    drinkSearch(drinkType)

  })

  function drinkSearch(drinkType){
    $.ajax({
      type: "GET",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkType + "&" +  apiKey,
      dataType: "json",
      success: function(data){
        console.log(data)
        //console.log(data)
        //for(i=0; i < data.strIngredient; i++){
          //if(data.strDrink[i].dt_txt.indexOf("drinkType") !==1) {
        $("#drinkType").empty()
        var name = $("<h1>").text("Drink Name: " + data.drinks[0].strDrink)
        console.log(name)
        var recipe1 = $("<p>").addClass("card-text").text("Recipe: " + data.drinks[0].strIngredient1)
        var recipe2 = $("<p>").addClass("card-text").text("Recipe: " + data.drinks[0].strIngredient2)
        var recipe3 = $("<p>").addClass("card-text").text("Recipe: " + data.drinks[0].strIngredient3)
        var recipe4 = $("<p>").addClass("card-text").text("Recipe: " + data.drinks[0].strIngredient4)
        var recipe5 = $("<p>").addClass("card-text").text("Recipe: " + data.drinks[0].strIngredient5)
        var instructions = $("<p>").addClass("card-text").text("Instructions: " + data.drinks[0].strInstructions)
        var card = $("<div>").addClass("card")
        var cardBody = $("<div>").addClass("card-body")
        cardBody.append(name,recipe1,recipe2,recipe3,recipe4,recipe5,instructions)
        card.append(cardBody)
        $("#drinkType").append(card)
        drinkSearch(drinkType)

      }})}})
