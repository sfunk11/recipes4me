$(document).ready(function(){
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
let queryURL= "https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchTerm

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  });

  // The mealdb.com search by main ingredient
let searchIngredient = "chicken";
let ingredientQueryURL= "https://www.themealdb.com/api/json/v1/1/search.php?i=" + searchIngredient

$.ajax({
    url: ingredientQueryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  });

//  recipe puppy search by main ingredient or name

let puppyQueryURL = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=" + searchIngredient + "&q=" + searchTerm
$.ajax({
    url: puppyQueryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
  });
});


