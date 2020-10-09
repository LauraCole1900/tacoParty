$(document).ready(function () {

    // makes hamburger button function
    $(".sidenav").sidenav();


    var apiID = "34cb0d58";
    var apiKey = "a0e20257bd919b79fff9bfd48b8a5f8c"

    var tacoURL = "https://api.edamam.com/search?q=taco&app_id=" + apiID + "&app_key=" + apiKey;

    console.log(tacoURL);

    ///////////////////
    // ALL TACO DATA //
    ///////////////////

    /////////////////
    // TACO ARRAYS //
    /////////////////

    var allTacoTitles = [];
    var allTacoImages = [];
    var allTacoIngredientsR1 = [];
    var allTacoIngredientsR2 = [];
    var allTacoIngredientsR3 = [];
    var allTacoIngredientsR4 = [];
    var allTacoIngredientsR5 = [];
    var allTacoIngredientsR6 = [];
    var allTacoIngredientsR7 = [];
    var allTacoIngredientsR7 = [];
    var allTacoIngredientsR8 = [];
    var allTacoIngredientsR9 = [];

    //////////////////////
    // SALSA ARRAYS //
    //////////////////////

    var allSalsaTitles = [];
    var allSalsaImages = [];
    var allSalsaIngredientsR1 = [];
    var allSalsaIngredientsR2 = [];
    var allSalsaIngredientsR3 = [];
    var allSalsaIngredientsR4 = [];
    var allSalsaIngredientsR5 = [];
    var allSalsaIngredientsR6 = [];
    var allSalsaIngredientsR7 = [];
    var allSalsaIngredientsR7 = [];
    var allSalsaIngredientsR8 = [];
    var allSalsaIngredientsR9 = [];

    /////////////////
    // MARG ARRAYTAS //
    //////////////////////

    var allMargTitles = [];
    var allMargImages = [];

    ////////////////////
    // TEQUILA ARRAYS //
    ////////////////////

    var allTeqTitles = [];
    var allTeqImages = [];

    ////////////////////
    // BEER ARRAYS //
    ////////////////////

    var allTeqTitles = [];
    var allTeqImages = [];


    $.ajax({
        url: tacoURL,
        method: "GET",
        crossDomain: true,
        dataType: "jsonp"
    }).then(function (response) {
        console.log(response);

        //////////////////////////
        // TACO DATA COLLECTION //
        //////////////////////////

        // LOOPING UP ALL TITLES AND IMAGES
        for (var i = 0; i < response.hits.length; i++) {
            allTacoTitles.push(response.hits[i].recipe.label);
            allTacoImages.push(response.hits[i].recipe.image);

        };

        // LOOPING UP EACH RECIPE FOR INGREDIENTS

        // Recipe 1 
        for (var i = 0; i < response.hits[0].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR1.push(response.hits[0].recipe.ingredientLines[i])
            console.log("TACO LOG:" + response.hits[0].recipe.ingredientLines[i])
        }
        // Recipe 2
        for (var i = 0; i < response.hits[1].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR2.push(response.hits[1].recipe.ingredientLines[i])
        };
        // Recipe 3
        for (var i = 0; i < response.hits[2].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR3.push(response.hits[2].recipe.ingredientLines[i])
        };
        // Recipe 4
        for (var i = 0; i < response.hits[3].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR4.push(response.hits[3].recipe.ingredientLines[i])
        };
        // Recipe 5
        for (var i = 0; i < response.hits[4].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR5.push(response.hits[4].recipe.ingredientLines[i])
        };
        // Recipe 6
        for (var i = 0; i < response.hits[5].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR6.push(response.hits[5].recipe.ingredientLines[i])
        };
        // Recipe 7
        for (var i = 0; i < response.hits[6].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR7.push(response.hits[6].recipe.ingredientLines[i])
        };
        // Recipe 8
        for (var i = 0; i < response.hits[7].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR8.push(response.hits[7].recipe.ingredientLines[i])
        };
        // Recipe 9
        for (var i = 0; i < response.hits[8].recipe.ingredientLines.length; i++) {
            allTacoIngredientsR9.push(response.hits[8].recipe.ingredientLines[i])
        };

    });


    ///////////////////////////
    // SALSA DATA COLLECTION //
    ///////////////////////////

    var salsaURL = "https://api.edamam.com/search?q=salsa&app_id=" + apiID + "&app_key=" + apiKey;

    console.log(salsaURL);

    $.ajax({
        url: salsaURL,
        method: "GET",
        crossDomain: true,
        dataType: "jsonp"
    }).then(function (response) {
        console.log(response);

        // LOOPING UP ALL TITLES AND IMAGES
        for (var i = 0; i < response.hits.length; i++) {
            allSalsaTitles.push(response.hits[i].recipe.label);
            allSalsaImages.push(response.hits[i].recipe.image);
        };

        // LOOPING UP EACH RECIPE FOR INGREDIENTS

        // Recipe 1 
        for (var i = 0; i < response.hits[0].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR1.push(response.hits[0].recipe.ingredientLines[i])
            console.log("SALSA LOG :" + response.hits[0].recipe.ingredientLines[i])
        }
        // Recipe 2
        for (var i = 0; i < response.hits[1].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR2.push(response.hits[1].recipe.ingredientLines[i])
        };
        // Recipe 3
        for (var i = 0; i < response.hits[2].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR3.push(response.hits[2].recipe.ingredientLines[i])
        };
        // Recipe 4
        for (var i = 0; i < response.hits[3].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR4.push(response.hits[3].recipe.ingredientLines[i])
        };
        // Recipe 5
        for (var i = 0; i < response.hits[4].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR5.push(response.hits[4].recipe.ingredientLines[i])
        };
        // Recipe 6
        for (var i = 0; i < response.hits[5].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR6.push(response.hits[5].recipe.ingredientLines[i])
        };
        // Recipe 7
        for (var i = 0; i < response.hits[6].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR7.push(response.hits[6].recipe.ingredientLines[i])
        };

        // Recipe 8
        for (var i = 0; i < response.hits[7].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR8.push(response.hits[7].recipe.ingredientLines[i])
        };

        // Recipe 9
        for (var i = 0; i < response.hits[8].recipe.ingredientLines.length; i++) {
            allSalsaIngredientsR9.push(response.hits[8].recipe.ingredientLines[i])
        };

    });

    ///////////////////////////////
    // MARGARITA DATA COLLECTION //
    ///////////////////////////////

    var margURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    $.ajax({
        url: margURL,
        method: "GET",

    }).then(function (response) {

        for (var i = 0; i < response.drinks.length; i++) {
            allMargTitles.push(response.drinks[i].strDrink);
            allMargImages.push(response.drinks[i].strDrinkThumb);

        }

    });

    /////////////////////////////
    // TEQUILA DATA COLLECTION //
    /////////////////////////////

    var teqURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

    $.ajax({
        url: teqURL,
        method: "GET",

    }).then(function (response) {

        for (var i = 0; i < response.drinks.length; i++) {
            allTeqTitles.push(response.drinks[i].strDrink);
            allTeqImages.push(response.drinks[i].strDrinkThumb);

        }

    });

    /////////////////////////////
    // TEQUILA DATA COLLECTION //
    /////////////////////////////

    var beerURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";

    $.ajax({
        url: beerURL,
        method: "GET",

    }).then(function (response) {
        console.log("Beer Log: " + response);

        for (var i = 0; i < response.drinks.length; i++) {
            allTeqTitles.push(response.drinks[i].strDrink);
            allTeqImages.push(response.drinks[i].strDrinkThumb);

        }

    });

});