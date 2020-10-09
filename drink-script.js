var apiKey = "1"



/$(document).ready(function(){
  $("#searchBtn").on("click", function(){
    var drinkType = $("#searchInput").val()
    $("#searchInput").val("")
    drinkSearch(drinkType)

  })

  function drinkSearch(drinkType){
    $.ajax({
      type: "GET",
      url: "https://www.thecocktaildb.com/api/json/v1/1/random.php?S=" + drinkType + "&" +  apiKey,
      dataType: "json",
      success: function(data){
        console.log(data)
        for(i=0; i < data.strDrink; i++){
          if(data.strDrink[i].dt_txt.indexOf("drinkType") !==1) {
        $("#drinkType").empty()
        var name = $("<div>").text(data.drinks.strDrink)
        
        var recipe = $("<p>").addClass("card-text").text(data.drinks.strIngredient[i])
        var instructions = $("<p>").addClass("card-text").text(data.drinks.strInstructions)
        var card = $("<div>").addClass("card")
        var cardBody = $("<div>").addClass("card-body")
        cardBody.append(name,recipe,instructions)
        card.append(cardBody)
        $("#drinkType").append(card)
        getDrinks(drinkType)

      }
    }
    }

    })

  }




})