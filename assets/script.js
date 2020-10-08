$(document).ready(function () {

  // click taco gif to enter page
  $("#gif").on("click", function () {
    $(this).attr("style", "display:none")
    // $(".container").attr("style", "transition: filter 2s")
    $(".container").attr("style", "filter:blur(0) ")
  })




  function tacoRecipe() {

    getRandomMeme();



    $.ajax({
      method: "GET",
      url: "https://api.edamam.com/search",
      data: { app_id: "9febdf63", app_key: "81e8afa3f473280b371839961f1c44a0", q: "taco" },
      dataType: "json",
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("jqXHR" + jqXHR)
        console.log("-------------------------------")
        console.log("textStatus" + textStatus)
        console.log("-------------------------------")
        console.log("errorThrown" + errorThrown);
      },
      success: function (data, textStatus, jqXHR) {


        console.dir(data)
        console.log("-------------------------------")
        console.log("textStatus: " + textStatus)
        console.log("-------------------------------")
        console.log("jqXHR: " + jqXHR);

        var element = document.getElementById("randomMeme");
        element.src = getRandomMeme();

        a

      }
    }
    );
  }

  function getrandomIndex(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }
  var memeArray = [

    "https://i.pinimg.com/736x/e3/6f/40/e36f40e3cad00b1169c6adc3df103c4d.jpg",
    "https://thetacotrail.files.wordpress.com/2017/02/nojuanever.jpg?w=500",
    "https://thetacotrail.files.wordpress.com/2017/02/tacomeme.jpg",

  ]
  function getRandomMeme() {
    var arrayLength = memeArray.length;
    var selectedMeme = memeArray[getrandomIndex(arrayLength)]
    console.log(selectedMeme)
    return selectedMeme

  }


});

  // look up img tags in HTML for memeArray
  // attempt to access object variables