$(document).ready(function () {

    // makes hamburger button function for mobile
    $(".sidenav").sidenav();


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
    }).then(function (response) {
        console.log(response)

        var tacoHeadlineArray = [];
        var tacoImageArray = [];

        // LOOPING UP ALL TITLES AND IMAGES
        for (var i = 0; i < response.hits.length; i++) {
            var tacoTitle = $("<h3>");
            tacoTitle.text(response.hits[i].recipe.label).attr("class", "TgridHeadlines").attr("id", i);
            $("#tacoContent" + i).append(tacoTitle);
            tacoHeadlineArray.push(tacoTitle);

            var tacoImg = $("<img>")
            tacoImg.attr("src", response.hits[i].recipe.image).attr("class", "TgridImg").attr("id", i).addClass ("responsive-img");
            $("#tacoContent" + i).append(tacoImg);
            tacoImageArray.push(tacoImg);

            // Add Nutritional Facts
            var nutCal = $("<div>").attr("class", "nutrition")
            var nutCarb = $("<div>").attr("class", "nutrition");
            var nutFib = $("<div>").attr("class", "nutrition")
            var nutFat = $("<div>").attr("class", "nutrition");
            var nutSug = $("<div>").attr("class", "nutrition");
            nutCal.text("Calories: " + Math.round((response.hits[i].recipe.calories)));
            nutCarb.text("Carbs: " + Math.round((response.hits[i].recipe.totalNutrients.CHOCDF.quantity)));
            nutFib.text("Fiber: " + Math.round((response.hits[i].recipe.totalNutrients.FIBTG.quantity)));
            nutFat.text("Fat: " + Math.round((response.hits[i].recipe.totalNutrients.FAT.quantity)));
            nutSug.text("Sugar: " + Math.round((response.hits[i].recipe.totalNutrients.SUGAR.quantity)));

            $("#tacoContent" + i).append(nutCal);
            $("#tacoContent" + i).append(nutCarb);
            $("#tacoContent" + i).append(nutFib);
            $("#tacoContent" + i).append(nutFat);
            $("#tacoContent" + i).append(nutSug);

        };


        ///////////////////////////
        // TACO EVENT CLICK: REDIRECT TO DISPLAY PAGE
        ///////////////////////////


        $(".TgridImg").on("click", tacoDisplayFunction);
        $(".TgridHeadlines").on("click", tacoDisplayFunction);

        function tacoDisplayFunction(e) {
            // e.preventDefault;

            localStorage.removeItem("salsaCode");

            // localStorage.setItem("Headline", JSON.stringify(e.target.value);
            localStorage.setItem("tacoCode", e.target.getAttribute("id"));

            // Redirects User to Item Display Page
            window.location.href = "itemDisplay.html"

        };


        ///////////////////////////
        // GENERATE DISPLAY PAGE
        ///////////////////////////


        // Gets Image Response Code from Storage and Appends Image:
        tacoCode = localStorage.getItem("tacoCode");

        //Generate Hero item
        itemDisplayHeader = $("<h4>");
        itemDisplayHeader.text(response.hits[tacoCode].recipe.label);
        ingredientDisplayHeader = $("<h5>").text("Ingredients");

        itemDisplayImage = $("<img>");
        itemDisplayImage.removeClass("TgridImg");
        itemDisplayImage.attr("id", "heroImage")
        itemDisplayImage.attr("src", response.hits[tacoCode].recipe.image).addClass ("responsive-img");

        $(".itemHeroHeadline").append(itemDisplayHeader);
        $(".itemHeroImage").append(itemDisplayImage);
        $(".ingredientHeadline").append(ingredientDisplayHeader);

        //Generate Ingredients

        for (var i = 0; i < response.hits[tacoCode].recipe.ingredients.length; i++) {

            // Ingredient Image
            var ingDiv = $("<div>").attr("class", "ingDiv")
            var ingredientImage = $("<img>").attr("id", "ingImg").addClass ("responsive-img");

            // Populate Null Image if Null
            if (response.hits[tacoCode].recipe.ingredients[i].image === null) {
                ingredientImage.attr("src", "assets/null.png");
            } else {
                ingredientImage.attr("src", response.hits[tacoCode].recipe.ingredients[i].image);
            };

            //Append Image
            $(".iconCol").append(ingDiv);
            ingDiv.append(ingredientImage);

            // Generate Ingredients Next to Icons
            var ingDiv = $("<div>").attr("class", "ingDiv")
            var itemDisplayIngredients = $("<div>");
            itemDisplayIngredients.text(response.hits[tacoCode].recipe.ingredients[i].text);
            itemDisplayIngredients.attr("id", "ingredient");
            $(".ingredientCol").append(ingDiv)
            ingDiv.append(itemDisplayIngredients);

        };

        // Add Nutritional Facts
        var nutCal = $("<div>").attr("class", "nutrition")
        var nutCarb = $("<div>").attr("class", "nutrition");
        var nutFib = $("<div>").attr("class", "nutrition")
        var nutFat = $("<div>").attr("class", "nutrition");
        var nutSug = $("<div>").attr("class", "nutrition");
        nutCal.text("Calories: " + Math.round((response.hits[tacoCode].recipe.calories)));
        nutCarb.text("Carbs: " + Math.round((response.hits[tacoCode].recipe.totalNutrients.CHOCDF.quantity)));
        nutFib.text("Fiber: " + Math.round((response.hits[tacoCode].recipe.totalNutrients.FIBTG.quantity)));
        nutFat.text("Fat: " + Math.round((response.hits[tacoCode].recipe.totalNutrients.FAT.quantity)));
        nutSug.text("Sugar: " + Math.round((response.hits[tacoCode].recipe.totalNutrients.SUGAR.quantity)));


        $(".itemHeroImage").append(nutCal).append(nutCarb).append(nutFib).append(nutFat).append(nutSug);

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
    }).then(function (response) {
        console.log(response);


        salsaHeadlineArray = [];
        salsaImageArray = [];


        for (var i = 0; i < response.hits.length; i++) {

            // Generate Salsa Headlines
            var salsaTitle = $("<h3>")
            salsaTitle.text(response.hits[i].recipe.label).attr("class", "SgridHeadlines").attr("id", i);
            $("#salsaContent" + i).append(salsaTitle);
            salsaHeadlineArray.push(salsaTitle);

            // Generate Salsa Images
            var salsaImg = $("<img>")
            salsaImg.attr("src", response.hits[i].recipe.image).attr("class", "SgridImg").attr("id", i).addClass ("responsive-img");
            $("#salsaContent" + i).append(salsaImg);
            salsaImageArray.push(salsaImg);

            // Add Nutritional Facts
            var nutCal = $("<div>").attr("class", "nutrition")
            var nutCarb = $("<div>").attr("class", "nutrition");
            var nutFib = $("<div>").attr("class", "nutrition")
            var nutFat = $("<div>").attr("class", "nutrition");
            var nutSug = $("<div>").attr("class", "nutrition");
            nutCal.text("Calories: " + Math.round((response.hits[i].recipe.calories)));
            nutCarb.text("Carbs: " + Math.round((response.hits[i].recipe.totalNutrients.CHOCDF.quantity)));
            nutFib.text("Fiber: " + Math.round((response.hits[i].recipe.totalNutrients.FIBTG.quantity)));
            nutFat.text("Fat: " + Math.round((response.hits[i].recipe.totalNutrients.FAT.quantity)));
            nutSug.text("Sugar: " + Math.round((response.hits[i].recipe.totalNutrients.SUGAR.quantity)));

            $("#salsaContent" + i).append(nutCal);
            $("#salsaContent" + i).append(nutCarb);
            $("#salsaContent" + i).append(nutFib);
            $("#salsaContent" + i).append(nutFat);
            $("#salsaContent" + i).append(nutSug);

        };

        ///////////////////////////
        ///////////////////////////
        // SALSA FUNCTIONS
        ///////////////////////////
        ///////////////////////////

        ///////////////////////////
        // EVENT CLICK: REDIRECT TO DISPLAY PAGE
        ///////////////////////////

        $(".SgridImg").on("click", salsaDisplayFunction);
        $(".SgridHeadlines").on("click", salsaDisplayFunction);

        function salsaDisplayFunction(e) {
            // e.preventDefault;

            localStorage.removeItem("tacoCode");

            // localStorage.setItem("Headline", JSON.stringify(e.target.value);
            localStorage.setItem("salsaCode", e.target.getAttribute("id"));

            // Redirects User to Item Display Page
            window.location.href = "itemDisplay.html"

        };

        ///////////////////////////
        // GENERATE DISPLAY PAGE
        ///////////////////////////

        // Gets Image Response Code from Storage and Appends Image:
        salsaCode = localStorage.getItem("salsaCode");

        //Generate Hero item
        itemDisplayHeader = $("<h4>");
        itemDisplayHeader.text(response.hits[salsaCode].recipe.label);
        ingredientDisplayHeader = $("<h5>").text("Ingredients");

        itemDisplayImage = $("<img>");
        itemDisplayImage.removeClass("SgridImg");
        itemDisplayImage.attr("id", "heroImage")
        itemDisplayImage.attr("src", response.hits[salsaCode].recipe.image).addClass ("responsive-img");

        $(".itemHeroHeadline").append(itemDisplayHeader);
        $(".itemHeroImage").append(itemDisplayImage);
        $(".ingredientHeadline").append(ingredientDisplayHeader);

        //Generate Ingredients

        for (var i = 0; i < response.hits[salsaCode].recipe.ingredients.length; i++) {

            // Ingredient Image
            var ingDiv = $("<div>").attr("class", "ingDiv")
            var ingredientImage = $("<img>").attr("id", "ingImg").addClass ("responsive-img");

            // Populate Null Image if Null
            if (response.hits[salsaCode].recipe.ingredients[i].image === null) {
                ingredientImage.attr("src", "assets/null.png");
            } else {
                ingredientImage.attr("src", response.hits[salsaCode].recipe.ingredients[i].image);
            };

            //Append Image
            $(".iconCol").append(ingDiv);
            ingDiv.append(ingredientImage);

            // Generate Ingredients Next to Icons
            var ingDiv = $("<div>").attr("class", "ingDiv")
            var itemDisplayIngredients = $("<div>");
            itemDisplayIngredients.text(response.hits[salsaCode].recipe.ingredients[i].text);
            itemDisplayIngredients.attr("id", "ingredient");
            $(".ingredientCol").append(ingDiv)
            ingDiv.append(itemDisplayIngredients);

        };

        // Add Nutritional Facts
        var nutCal = $("<div>").attr("class", "nutrition");
        var nutCarb = $("<div>").attr("class", "nutrition");
        var nutFib = $("<div>").attr("class", "nutrition");
        var nutFat = $("<div>").attr("class", "nutrition");
        var nutSug = $("<div>").attr("class", "nutrition");
        nutCal.text("Calories: " + Math.round((response.hits[salsaCode].recipe.calories)));
        nutCarb.text("Carbs: " + Math.round((response.hits[salsaCode].recipe.totalNutrients.CHOCDF.quantity)));
        nutFib.text("Fiber: " + Math.round((response.hits[salsaCode].recipe.totalNutrients.FIBTG.quantity)));
        nutFat.text("Fat: " + Math.round((response.hits[salsaCode].recipe.totalNutrients.FAT.quantity)));
        nutSug.text("Sugar: " + Math.round((response.hits[salsaCode].recipe.totalNutrients.SUGAR.quantity)));


        $(".itemHeroImage").append(nutCal).append(nutCarb).append(nutFib).append(nutFat).append(nutSug);




    });

    ///////////////////////////////
    // MARGARITA DATA COLLECTION //
    ///////////////////////////////

    var margURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    $.ajax({
        url: margURL,
        method: "GET",

    }).then(function (response) {
        console.log(response)

        for (var i = 0; i < response.drinks.length; i++) {

            var drinkTitle = $("<h3>")
            drinkTitle.text(response.drinks[i].strDrink).attr("id", "gridHeadlines");
            $("#drinkContent" + i).append(drinkTitle);


            var drinkImg = $("<img>")
            drinkImg.attr("src", response.drinks[i].strDrinkThumb).attr("id", "gridImg").addClass ("responsive-img");
            $("#drinkContent" + i).append(drinkImg);

        }

        // LOOPING UP DRINK RECIPES // NOTE: Each Drink Recipe Requires an individual grab because each ingredient is located under an individual key, and I can't seem to drop the loop "i" into the ajax GET. Also, the recipes have different numbers of ingredients - so I needed to write many more lines of code than I did above.//

        // Note on Note: After building this out, I see where we could create some loops to condense this, which I'll do if we have time - Andy//

        // Margarita - Box 0

        var margaritaRecipe1 = $("<p>");
        var margaritaRecipe2 = $("<p>");
        var margaritaRecipe3 = $("<p>");
        var margaritaRecipe4 = $("<p>");

        margaritaRecipe1.text(response.drinks[0].strIngredient1).attr("class", "drinkRecipes");
        margaritaRecipe2.text(response.drinks[0].strIngredient2).attr("class", "drinkRecipes");
        margaritaRecipe3.text(response.drinks[0].strIngredient3).attr("class", "drinkRecipes");
        margaritaRecipe4.text(response.drinks[0].strIngredient4).attr("class", "drinkRecipes");

        $("#drinkContent0").append(margaritaRecipe1);
        $("#drinkContent0").append(margaritaRecipe2);
        $("#drinkContent0").append(margaritaRecipe3);
        $("#drinkContent0").append(margaritaRecipe4);

        // Blue Margarita - Box 1

        var blueMargaritaRecipe1 = $("<p>");
        var blueMargaritaRecipe2 = $("<p>");
        var blueMargaritaRecipe3 = $("<p>");
        var blueMargaritaRecipe4 = $("<p>");

        blueMargaritaRecipe1.text(response.drinks[1].strIngredient1).attr("class", "drinkRecipes");
        blueMargaritaRecipe2.text(response.drinks[1].strIngredient2).attr("class", "drinkRecipes");
        blueMargaritaRecipe3.text(response.drinks[1].strIngredient3).attr("class", "drinkRecipes");
        blueMargaritaRecipe4.text(response.drinks[1].strIngredient4).attr("class", "drinkRecipes");

        $("#drinkContent1").append(blueMargaritaRecipe1);
        $("#drinkContent1").append(blueMargaritaRecipe2);
        $("#drinkContent1").append(blueMargaritaRecipe3);
        $("#drinkContent1").append(blueMargaritaRecipe4);

        // Blue Margarita - Box 2

        var tommyMargaritaRecipe1 = $("<p>");
        var tommyMargaritaRecipe2 = $("<p>");
        var tommyMargaritaRecipe3 = $("<p>");
        var tommyMargaritaRecipe4 = $("<p>");

        tommyMargaritaRecipe1.text(response.drinks[2].strIngredient1).attr("class", "drinkRecipes");
        tommyMargaritaRecipe2.text(response.drinks[2].strIngredient2).attr("class", "drinkRecipes");
        tommyMargaritaRecipe3.text(response.drinks[2].strIngredient3).attr("class", "drinkRecipes");
        tommyMargaritaRecipe4.text(response.drinks[2].strIngredient4).attr("class", "drinkRecipes");

        $("#drinkContent2").append(tommyMargaritaRecipe1);
        $("#drinkContent2").append(tommyMargaritaRecipe2);
        $("#drinkContent2").append(tommyMargaritaRecipe3);
        $("#drinkContent2").append(tommyMargaritaRecipe4);

        // WhiteCap Margarita - Box 3

        var whiteMargaritaRecipe1 = $("<p>");
        var whiteMargaritaRecipe2 = $("<p>");
        var whiteMargaritaRecipe3 = $("<p>");
        var whiteMargaritaRecipe4 = $("<p>");

        whiteMargaritaRecipe1.text(response.drinks[3].strIngredient1).attr("class", "drinkRecipes");
        whiteMargaritaRecipe2.text(response.drinks[3].strIngredient2).attr("class", "drinkRecipes");
        whiteMargaritaRecipe3.text(response.drinks[3].strIngredient3).attr("class", "drinkRecipes");
        whiteMargaritaRecipe4.text(response.drinks[3].strIngredient4).attr("class", "drinkRecipes");

        $("#drinkContent3").append(whiteMargaritaRecipe1);
        $("#drinkContent3").append(whiteMargaritaRecipe2);
        $("#drinkContent3").append(whiteMargaritaRecipe3);
        $("#drinkContent3").append(whiteMargaritaRecipe4);

        //StrawBerry Margarita - Box 4

        var strawMargaritaRecipe1 = $("<p>");
        var strawMargaritaRecipe2 = $("<p>");
        var strawMargaritaRecipe3 = $("<p>");
        var strawMargaritaRecipe4 = $("<p>");

        strawMargaritaRecipe1.text(response.drinks[4].strIngredient1).attr("class", "drinkRecipes")
        strawMargaritaRecipe2.text(response.drinks[4].strIngredient2).attr("class", "drinkRecipes")
        strawMargaritaRecipe3.text(response.drinks[4].strIngredient3).attr("class", "drinkRecipes")
        strawMargaritaRecipe4.text(response.drinks[4].strIngredient4).attr("class", "drinkRecipes")

        $("#drinkContent4").append(strawMargaritaRecipe1);
        $("#drinkContent4").append(strawMargaritaRecipe2);
        $("#drinkContent4").append(strawMargaritaRecipe3);
        $("#drinkContent4").append(strawMargaritaRecipe4);

        //StrawBerry Margarita - Box 5

        var waterMargaritaRecipe1 = $("<p>");
        var waterMargaritaRecipe2 = $("<p>");
        var waterMargaritaRecipe3 = $("<p>");
        var waterMargaritaRecipe4 = $("<p>");
        var waterMargaritaRecipe5 = $("<p>");
        var waterMargaritaRecipe6 = $("<p>");

        waterMargaritaRecipe1.text(response.drinks[5].strIngredient1).attr("class", "drinkRecipes");
        waterMargaritaRecipe2.text(response.drinks[5].strIngredient2).attr("class", "drinkRecipes");
        waterMargaritaRecipe3.text(response.drinks[5].strIngredient3).attr("class", "drinkRecipes");
        waterMargaritaRecipe4.text(response.drinks[5].strIngredient4).attr("class", "drinkRecipes");
        waterMargaritaRecipe5.text(response.drinks[5].strIngredient1).attr("class", "drinkRecipes");
        waterMargaritaRecipe6.text(response.drinks[5].strIngredient2).attr("class", "drinkRecipes");

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

    }).then(function (response) {
        console.log(response)

        // LOOPING UP ALL TITLES AND IMAGES // NOTE: I only want 3 tequilas - 6 through 9.

        for (var i = 6; i < 9; i++) {

            var drinkTitle = $("<h3>")
            drinkTitle.text(response.drinks[(i - 4)].strDrink).attr("id", "gridHeadlines");
            $("#drinkContent" + i).append(drinkTitle);


            var drinkImg = $("<img>")
            drinkImg.attr("src", response.drinks[(i - 4)].strDrinkThumb).attr("id", "gridImg").addClass ("responsive-img");
            $("#drinkContent" + i).append(drinkImg);

        }

        // LOOPING UP DRINK RECIPES // NOTE: Each Drink Recipe Requires an individual grab because each ingredient is located under an individual key, and I can't seem to drop the loop "i" into the ajax GET. Also, the recipes have different numbers of ingredients.

        // Tequila Sunrise - Box 6

        var sunTeqRecipe1 = $("<p>");
        var sunTeqRecipe2 = $("<p>");
        var sunTeqRecipe3 = $("<p>");

        sunTeqRecipe1.text(response.drinks[2].strIngredient1).attr("class", "drinkRecipes");
        sunTeqRecipe2.text(response.drinks[2].strIngredient2).attr("class", "drinkRecipes");
        sunTeqRecipe3.text(response.drinks[2].strIngredient3).attr("class", "drinkRecipes");

        $("#drinkContent6").append(sunTeqRecipe1);
        $("#drinkContent6").append(sunTeqRecipe2);
        $("#drinkContent6").append(sunTeqRecipe3);

        // Tequila Slammer - Box 7

        var slamTeqRecipe1 = $("<p>");
        var slamTeqRecipe2 = $("<p>");

        slamTeqRecipe1.text(response.drinks[3].strIngredient1).attr("class", "drinkRecipes");
        slamTeqRecipe2.text(response.drinks[3].strIngredient2).attr("class", "drinkRecipes");

        $("#drinkContent7").append(slamTeqRecipe1);
        $("#drinkContent7").append(slamTeqRecipe2);

        // Tequila Slammer - Box 8

        var surpriseTeqRecipe1 = $("<p>");
        var surpriseTeqRecipe2 = $("<p>");

        surpriseTeqRecipe1.text(response.drinks[4].strIngredient1).attr("class", "drinkRecipes");
        surpriseTeqRecipe2.text(response.drinks[4].strIngredient2).attr("class", "drinkRecipes");

        $("#drinkContent8").append(surpriseTeqRecipe1);
        $("#drinkContent8").append(surpriseTeqRecipe2);

    });
});
