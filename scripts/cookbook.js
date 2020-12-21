$(document).ready(function(){


recipeURL = localStorage.getItem("recipeURL");
getRecipeInfo(recipeURL);





$("#searchBtn").on("click", function(){
    var searchName = $("#searchName");
    var searchString = searchName.val().trim();
    console.log(searchString);
    localStorage.setItem("searchTerm", searchString);
    location.href = "./search.html";

});


   var recipeList = JSON.parse(localStorage.getItem("recipes"));
    for (var i = 0; i < recipeList.length; i++) {
    var recipeTable = $(
        "<tr><td class='recipeList' data-recipeList='" +
        recipeList[i] +
        "'>" +
        recipeList[i] +
        "</td></tr>"
    );
    
$(".recipeList").append(recipeTable);
}
})   
$(document).on("click", ".recipeList", function () {
    var rL = $(this).data("recipeList");
recipeList=JSON.parse(localStorage.getItem("recipes"))
 console.log(recipeList)

// $(".recipe").html("Recipe:" + response.recipe);
// $(".cuisine").text("Cuisine: " + response.cuisine);
// $(".ingredients").text("Ingredients: " + response.ingredients);
// });
        
// function createRecipeCard(name, images, ingredients, instructions,) {
// let recipeCardEl = $("<div>").attr("class", "recipe-Card");
// let cardName = $("<h3>").attr("class", "card-text");
// let cardImages = $("<img>").attr("class", "images");
// let cardDescription = $("<p>").attr("class", "card-text");
// let cardIngredients = $("<p>").attr("class", "card-text");
// let cardInstructions = $("<p>").attr("class", "card-text");

// cardRow.append(recipeCardEl);
// cardName.text(recipe);
// cardImages.attr("src", icon);
// cardDescription.text(`Description: ${description}`);
// cardIngredients.text(`Ingredients: ${ingredients}`);
// cardInstructions.text(`Instructions: ${instructions}`);
// recipeCardEl.append(cardName, cardImages, cardDescription, cardIngredients, cardInstructions);
});

