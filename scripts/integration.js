$(document).ready(function(){
//  recipe puppy search by main ingredient or name
    const settingsPuppy = {
        "async": true,
        "crossDomain": true,
        "url": "https://recipe-puppy.p.rapidapi.com/?p=1&i=onions%2Cgarlic&q=omelet",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
            "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
        }
    };
    
    $.ajax(settingsPuppy).done(function (response) {
        console.log(response);
    });
    // mycookbook.io
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
	"method": "POST",
	"headers": {
		"content-type": "application/xml",
		"x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
	},
	"data": "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/"
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

// The mealdb.com search by name
let searchTerm = "curry";
let searchIngredient = "chicken";
let queryURL= "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm + "&i=" + searchIngredient

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  });

//   // The mealdb.com search by main ingredient
// let searchIngredient = "chicken";
// let ingredientQueryURL= "https://www.themealdb.com/api/json/v1/1/search.php?i=" + searchIngredient

// $.ajax({
//     url: ingredientQueryURL,
//     method: "GET"
//   }).then(function(response) {
//       console.log(response);
//   });




});

