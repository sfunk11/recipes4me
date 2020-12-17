$(document).ready(function(){

    // mycookbook.io

    let siteURL = "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/";
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
	"data": siteURL
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

function searchForRecipe(searchString){
let searchTerm = searchString;
let searchIngredient = "chicken";
let puppyURL = "https://recipe-puppy.p.rapidapi.com/?";

if ($("#searchName").val().trim() !== "" && $("#searchIngredient").val().trim() !== ""){
    searchTerm = $("#searchName").val().trim();
    puppyURL += "q=" + searchTerm;
    searchIngredient = $("#searchIngredient").val().trim();
    puppyURL += "&i=" + searchIngredient;
}else
if ($("#searchName").val().trim() !== ""){ 
    searchTerm = $("#searchName").val().trim();
    puppyURL += "q=" + searchTerm;
}else
    if ($("#searchIngredient").val().trim() !== ""){
    searchIngredient = $("#searchIngredient").val().trim();
    puppyURL += "i=" + searchIngredient;
}

const puppySettings = {
    "async": true,
    "crossDomain": true,
    "url": puppyURL,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
    }
};

$.ajax(puppySettings).done(function (response) {
    console.log(JSON.parse(response));
    response = JSON.parse(response);
    results = response.results;
    
    for(var i =0; i < results.length; i++){
    $(".card-divider").append(`<img src = ${results[i].thumbnail}>`);
    $(".card-divider").html(results[i].title);
    $("#link").attr("href", results[i].href);
    $("#ing").text("Ingredients: "+ results[i].ingredients)
    }

});
}

});

