//////////////////////////
// TACO DATA COLLECTION //
//////////////////////////

var apiID = "34cb0d58";
var apiKey = "a0e20257bd919b79fff9bfd48b8a5f8c"

var tacoURL = "https://api.edamam.com/search?q=tacos&app_id=" + apiID + "&app_key=" + apiKey;

$.ajax({
    url: tacoURL,
    method: "GET",
    crossDomain: true,
    dataType: "jsonp"
}).then (function(response) {
    console.log(response)

    // LOOPING UP ALL TITLES AND IMAGES
    for(var i=0; i < response.hits.length ; i++){
        var tacoTitle = $("<h3>")
        tacoTitle.text(response.hits[i].recipe.label).attr("id", "gridHeadlines")
        $("#tacoContent" + i).append(tacoTitle);

        var tacoImg = $("<img>")
        tacoImg.attr("src", response.hits[i].recipe.image).attr("id", "gridImg")
        $("#tacoContent" + i).append(tacoImg);
    };
        
    // LOOPING UP EACH RECIPE FOR INGREDIENTS

    // Recipe 1 
        for(var i=0; i < response.hits[0].recipe.ingredientLines.length; i++){
        
        var tacoRecipe1 = $("<p>")
        tacoRecipe1.text(response.hits[0].recipe.ingredientLines[i]);
        tacoRecipe1.attr("class", "tacoRecipes")
        $("#tacoContent0").append(tacoRecipe1);

        }

    // Recipe 2
    for(var i=0; i < response.hits[1].recipe.ingredientLines.length; i++){

        var tacoRecipe2 = $("<p>");
        tacoRecipe2.text(response.hits[1].recipe.ingredientLines[i]);
        tacoRecipe2.attr("class", "tacoRecipes")
        $("#tacoContent1").append(tacoRecipe2);
    };     

    // Recipe 3
    for(var i=0; i < response.hits[2].recipe.ingredientLines.length; i++){

        var tacoRecipe3 = $("<p>");
        tacoRecipe3.text(response.hits[2].recipe.ingredientLines[i]);
        tacoRecipe3.attr("class", "tacoRecipes")
        $("#tacoContent2").append(tacoRecipe3);

    };
    // Recipe 4
    for(var i=0; i < response.hits[3].recipe.ingredientLines.length; i++){

        var tacoRecipe4 = $("<p>");
        tacoRecipe4.text(response.hits[3].recipe.ingredientLines[i]);
        tacoRecipe4.attr("class", "tacoRecipes")
        $("#tacoContent3").append(tacoRecipe4);

    };
    // Recipe 5
    for(var i=0; i < response.hits[4].recipe.ingredientLines.length; i++){

        var tacoRecipe5 = $("<p>");
        tacoRecipe5.text(response.hits[4].recipe.ingredientLines[i]);
        tacoRecipe5.attr("class", "tacoRecipes")
        $("#tacoContent4").append(tacoRecipe5);

    };
    // Recipe 6
    for(var i=0; i < response.hits[5].recipe.ingredientLines.length; i++){

        var tacoRecipe6 = $("<p>");
        tacoRecipe6.text(response.hits[5].recipe.ingredientLines[i]);
        tacoRecipe6.attr("class", "tacoRecipes")
        $("#tacoContent5").append(tacoRecipe6);

    };
    // Recipe 7
    for(var i=0; i < response.hits[6].recipe.ingredientLines.length; i++){

        var tacoRecipe7 = $("<p>");
        tacoRecipe7.text(response.hits[6].recipe.ingredientLines[i]);
        tacoRecipe7.attr("class", "tacoRecipes")
        $("#tacoContent6").append(tacoRecipe7);

    };
    // Recipe 8
    for(var i=0; i < response.hits[7].recipe.ingredientLines.length; i++){

        var tacoRecipe8 = $("<p>");
        tacoRecipe8.text(response.hits[7].recipe.ingredientLines[i]);
        tacoRecipe8.attr("class", "tacoRecipes")
        $("#tacoContent7").append(tacoRecipe8);

    };
    // Recipe 9
    for(var i=0; i < response.hits[8].recipe.ingredientLines.length; i++){

        var tacoRecipe9 = $("<p>");
        tacoRecipe9.text(response.hits[8].recipe.ingredientLines[i]);
        tacoRecipe9.attr("class", "tacoRecipes")
        $("#tacoContent8").append(tacoRecipe9);

    };

});


///////////////////////////
// SALSA DATA COLLECTION //
///////////////////////////

var salsaURL = "https://api.edamam.com/search?q=salsa&app_id=" + apiID + "&app_key=" + apiKey;
console.log(salsaURL)

$.ajax({
    url: salsaURL,
    method: "GET",
    crossDomain: true,
    dataType: "jsonp"
}).then (function(response) {
    console.log(response);

    // LOOPING UP ALL TITLES AND IMAGES
    // for(var i=0; i < response.hits.length ; i++){
    // allSalsaTitles.push(response.hits[i].recipe.label);
    // allSalsaImages.push(response.hits[i].recipe.image);

   
    for(var i=0 ; i < response.hits.length ; i++){
        var salsaTitle = $("<h3>")
        salsaTitle.text(response.hits[i].recipe.label).attr("id", "gridHeadlines");
        $("#salsaContent" + i).append(salsaTitle);

        var salsaImg = $("<img>")
        salsaImg.attr("src", response.hits[i].recipe.image).attr("id", "gridImg") 
        $("#salsaContent" + i).append(salsaImg);
    }; 
    
    // LOOPING UP EACH RECIPE FOR INGREDIENTS

    // Recipe 1 
        for(var i=0; i < response.hits[0].recipe.ingredientLines.length; i++){

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[0].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent0").append(salsaRecipe1);

        }
    // Recipe 2
    for(var i=0; i < response.hits[1].recipe.ingredientLines.length; i++){

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[1].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent1").append(salsaRecipe1);

    };      
    // Recipe 3
    for(var i=0; i < response.hits[2].recipe.ingredientLines.length; i++){
        //allSalsaIngredientsR3.push(response.hits[2].recipe.ingredientLines[i])

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[2].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent2").append(salsaRecipe1);

    };
    // Recipe 4
    for(var i=0; i < response.hits[3].recipe.ingredientLines.length; i++){
        //allSalsaIngredientsR4.push(response.hits[3].recipe.ingredientLines[i])

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[3].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent3").append(salsaRecipe1);

    };
    // Recipe 5
    for(var i=0; i < response.hits[4].recipe.ingredientLines.length; i++){
        //allSalsaIngredientsR5.push(response.hits[4].recipe.ingredientLines[i])

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[4].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent4").append(salsaRecipe1);

    };
    // Recipe 6
    for(var i=0; i < response.hits[5].recipe.ingredientLines.length; i++){
        //allSalsaIngredientsR6.push(response.hits[5].recipe.ingredientLines[i])

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[5].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent5").append(salsaRecipe1);

    };
    // Recipe 7
    for(var i=0; i < response.hits[6].recipe.ingredientLines.length; i++){
        //allSalsaIngredientsR7.push(response.hits[6].recipe.ingredientLines[i])

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[6].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent6").append(salsaRecipe1);

    };

    // Recipe 8
    for(var i=0; i < response.hits[7].recipe.ingredientLines.length; i++){
        //allSalsaIngredientsR8.push(response.hits[7].recipe.ingredientLines[i])

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[7].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent7").append(salsaRecipe1);
    
    };

    // Recipe 9
    for(var i=0; i < response.hits[8].recipe.ingredientLines.length; i++){
        //allSalsaIngredientsR9.push(response.hits[8].recipe.ingredientLines[i])

        var salsaRecipe1 = $("<p>")
        salsaRecipe1.text(response.hits[8].recipe.ingredientLines[i]);
        salsaRecipe1.attr("class", "salsaRecipes")
        $("#salsaContent8").append(salsaRecipe1);

    };

});

///////////////////////////////
// MARGARITA DATA COLLECTION //
///////////////////////////////

var margURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

$.ajax({
    url: margURL,
    method: "GET",
    
}).then (function(response) {
    console.log(response)

    for(var i=0; i< response.drinks.length; i++){

        var drinkTitle = $("<h3>")
        drinkTitle.text(response.drinks[i].strDrink).attr("id", "gridHeadlines");
        $("#drinkContent" + i).append(drinkTitle);


        var drinkImg = $("<img>")
        drinkImg.attr("src", response.drinks[i].strDrinkThumb).attr("id", "gridImg")
        $("#drinkContent" + i).append(drinkImg);

    }

    // LOOPING UP DRINK RECIPES // NOTE: Each Drink Recipe Requires an individual grab because each ingredient is located under an individual key, and I can't seem to drop the loop "i" into the ajax GET. Also, the recipes have different numbers of ingredients.

    // Margarita - Box 0

        var margaritaRecipe1 = $("<p>")
        var margaritaRecipe2 = $("<p>")
        var margaritaRecipe3 = $("<p>")
        var margaritaRecipe4 = $("<p>")

        margaritaRecipe1.text(response.drinks[0].strIngredient1).attr("class", "drinkRecipes")
        margaritaRecipe2.text(response.drinks[0].strIngredient2).attr("class", "drinkRecipes")
        margaritaRecipe3.text(response.drinks[0].strIngredient3).attr("class", "drinkRecipes")
        margaritaRecipe4.text(response.drinks[0].strIngredient4).attr("class", "drinkRecipes")

        $("#drinkContent0").append(margaritaRecipe1);
        $("#drinkContent0").append(margaritaRecipe2);
        $("#drinkContent0").append(margaritaRecipe3);
        $("#drinkContent0").append(margaritaRecipe4);

    // Blue Margarita - Box 1
    
        var blueMargaritaRecipe1 = $("<p>")
        var blueMargaritaRecipe2 = $("<p>")
        var blueMargaritaRecipe3 = $("<p>")
        var blueMargaritaRecipe4 = $("<p>")

        blueMargaritaRecipe1.text(response.drinks[1].strIngredient1).attr("class", "drinkRecipes")
        blueMargaritaRecipe2.text(response.drinks[1].strIngredient2).attr("class", "drinkRecipes")
        blueMargaritaRecipe3.text(response.drinks[1].strIngredient3).attr("class", "drinkRecipes")
        blueMargaritaRecipe4.text(response.drinks[1].strIngredient4).attr("class", "drinkRecipes")

        $("#drinkContent1").append(blueMargaritaRecipe1);
        $("#drinkContent1").append(blueMargaritaRecipe2);
        $("#drinkContent1").append(blueMargaritaRecipe3);
        $("#drinkContent1").append(blueMargaritaRecipe4);

        // Blue Margarita - Box 2
    
        var tommyMargaritaRecipe1 = $("<p>")
        var tommyMargaritaRecipe2 = $("<p>")
        var tommyMargaritaRecipe3 = $("<p>")
        var tommyMargaritaRecipe4 = $("<p>")

        tommyMargaritaRecipe1.text(response.drinks[2].strIngredient1).attr("class", "drinkRecipes")
        tommyMargaritaRecipe2.text(response.drinks[2].strIngredient2).attr("class", "drinkRecipes")
        tommyMargaritaRecipe3.text(response.drinks[2].strIngredient3).attr("class", "drinkRecipes")
        tommyMargaritaRecipe4.text(response.drinks[2].strIngredient4).attr("class", "drinkRecipes")

        $("#drinkContent2").append(tommyMargaritaRecipe1);
        $("#drinkContent2").append(tommyMargaritaRecipe2);
        $("#drinkContent2").append(tommyMargaritaRecipe3);
        $("#drinkContent2").append(tommyMargaritaRecipe4);

        // WhiteCap Margarita - Box 3
    
        var whiteMargaritaRecipe1 = $("<p>")
        var whiteMargaritaRecipe2 = $("<p>")
        var whiteMargaritaRecipe3 = $("<p>")
        var whiteMargaritaRecipe4 = $("<p>")

        whiteMargaritaRecipe1.text(response.drinks[3].strIngredient1).attr("class", "drinkRecipes")
        whiteMargaritaRecipe2.text(response.drinks[3].strIngredient2).attr("class", "drinkRecipes")
        whiteMargaritaRecipe3.text(response.drinks[3].strIngredient3).attr("class", "drinkRecipes")
        whiteMargaritaRecipe4.text(response.drinks[3].strIngredient4).attr("class", "drinkRecipes")

        $("#drinkContent3").append(whiteMargaritaRecipe1);
        $("#drinkContent3").append(whiteMargaritaRecipe2);
        $("#drinkContent3").append(whiteMargaritaRecipe3);
        $("#drinkContent3").append(whiteMargaritaRecipe4);

        //StrawBerry Margarita - Box 4
    
        var strawMargaritaRecipe1 = $("<p>")
        var strawMargaritaRecipe2 = $("<p>")
        var strawMargaritaRecipe3 = $("<p>")
        var strawMargaritaRecipe4 = $("<p>")

        strawMargaritaRecipe1.text(response.drinks[4].strIngredient1).attr("class", "drinkRecipes")
        strawMargaritaRecipe2.text(response.drinks[4].strIngredient2).attr("class", "drinkRecipes")
        strawMargaritaRecipe3.text(response.drinks[4].strIngredient3).attr("class", "drinkRecipes")
        strawMargaritaRecipe4.text(response.drinks[4].strIngredient4).attr("class", "drinkRecipes")

        $("#drinkContent4").append(strawMargaritaRecipe1);
        $("#drinkContent4").append(strawMargaritaRecipe2);
        $("#drinkContent4").append(strawMargaritaRecipe3);
        $("#drinkContent4").append(strawMargaritaRecipe4);

        //StrawBerry Margarita - Box 5
    
        var waterMargaritaRecipe1 = $("<p>")
        var waterMargaritaRecipe2 = $("<p>")
        var waterMargaritaRecipe3 = $("<p>")
        var waterMargaritaRecipe4 = $("<p>")
        var waterMargaritaRecipe5 = $("<p>")
        var waterMargaritaRecipe6 = $("<p>")
        
        waterMargaritaRecipe1.text(response.drinks[5].strIngredient1).attr("class", "drinkRecipes")
        waterMargaritaRecipe2.text(response.drinks[5].strIngredient2).attr("class", "drinkRecipes")
        waterMargaritaRecipe3.text(response.drinks[5].strIngredient3).attr("class", "drinkRecipes")
        waterMargaritaRecipe4.text(response.drinks[5].strIngredient4).attr("class", "drinkRecipes")
        waterMargaritaRecipe5.text(response.drinks[5].strIngredient1).attr("class", "drinkRecipes")
        waterMargaritaRecipe6.text(response.drinks[5].strIngredient2).attr("class", "drinkRecipes")

        $("#drinkContent5").append(waterMargaritaRecipe1);
        $("#drinkContent5").append(waterMargaritaRecipe2);
        $("#drinkContent5").append(waterMargaritaRecipe3);
        $("#drinkContent5").append(waterMargaritaRecipe4);
        $("#drinkContent5").append(waterMargaritaRecipe5);
        $("#drinkContent5").append(waterMargaritaRecipe6);

});

/////////////////////////////
// TEQUILA DATA COLLECTION //
/////////////////////////////

var teqURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tequila";

$.ajax({
    url: teqURL,
    method: "GET",
    
}).then (function(response) {
    console.log(response)

// LOOPING UP ALL TITLES AND IMAGES // NOTE: I only want 3 tequilas - 6 through 9.

for(var i=6; i< 9; i++){

    var drinkTitle = $("<h3>")
    drinkTitle.text(response.drinks[(i-4)].strDrink).attr("id", "gridHeadlines");
    $("#drinkContent" + i).append(drinkTitle);


    var drinkImg = $("<img>")
    drinkImg.attr("src", response.drinks[(i-4)].strDrinkThumb).attr("id", "gridImg");
    $("#drinkContent" + i).append(drinkImg);

}   

// LOOPING UP DRINK RECIPES // NOTE: Each Drink Recipe Requires an individual grab because each ingredient is located under an individual key, and I can't seem to drop the loop "i" into the ajax GET. Also, the recipes have different numbers of ingredients.

    // Tequila Sunrise - Box 6

    var sunTeqRecipe1 = $("<p>")
    var sunTeqRecipe2 = $("<p>")
    var sunTeqRecipe3 = $("<p>")

    sunTeqRecipe1.text(response.drinks[2].strIngredient1).attr("class", "drinkRecipes")
    sunTeqRecipe2.text(response.drinks[2].strIngredient2).attr("class", "drinkRecipes")
    sunTeqRecipe3.text(response.drinks[2].strIngredient3).attr("class", "drinkRecipes")

    $("#drinkContent6").append(sunTeqRecipe1);
    $("#drinkContent6").append(sunTeqRecipe2);
    $("#drinkContent6").append(sunTeqRecipe3);

    // Tequila Slammer - Box 7

    var slamTeqRecipe1 = $("<p>")
    var slamTeqRecipe2 = $("<p>")

    slamTeqRecipe1.text(response.drinks[3].strIngredient1).attr("class", "drinkRecipes")
    slamTeqRecipe2.text(response.drinks[3].strIngredient2).attr("class", "drinkRecipes")

    $("#drinkContent7").append(slamTeqRecipe1);
    $("#drinkContent7").append(slamTeqRecipe2);

    // Tequila Slammer - Box 8

    var surpriseTeqRecipe1 = $("<p>")
    var surpriseTeqRecipe2 = $("<p>")

    surpriseTeqRecipe1.text(response.drinks[4].strIngredient1).attr("class", "drinkRecipes")
    surpriseTeqRecipe2.text(response.drinks[4].strIngredient2).attr("class", "drinkRecipes")

    $("#drinkContent8").append(surpriseTeqRecipe1);
    $("#drinkContent8").append(surpriseTeqRecipe2);

})

$("img")