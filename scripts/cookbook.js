$(document).ready(function(){


    recipeURL = localStorage.getItem("recipeURL");
    getRecipeInfo(recipeURL);

   var recipeList = JSON.parse(localStorage.getItem("recipes"));
    for (var i = 0; i < recipeList.length; i++) {
     var recipeTable = $("<tr>");
     var recipeName = $("<td>");
     $(recipeName).attr("class", "button recipeList");
     
     $(recipeName).attr("data-recipeList", i);
     $(recipeTable).append(recipeName);
     $("#stack").append(recipeTable);
     $(recipeName).text(recipeList[i].name);
    }
});

function getingredients(ingredients){
 for (var i = 0; i < ingredients.length; i++) {
     ingredientEl = $("<li>")
     $(ingredientEl).text(ingredients[i])
     $("#card-Ingredients").append(ingredientEl)
 }
}
 function getinstructions(instructions){
    for (var i = 0; i < instructions.length; i++) {
        instructionsEl = $("<li>")
        $(instructionsEl).text(instructions[0].steps[i])
        $("#card-Instructions").append(instructionsEl)
    }
}
function displayrecipe(recipe){
   
    $(".card-name").text(recipe.name);
    $("#link").attr("href", recipe.recipeURL);
    $("#card-description").text(recipe.description);
    getingredients(recipe.ingredients);
    getinstructions(recipe.instructions);
}

$(document).on("click",".recipeList", function(){
    recipeID = $(this).attr("data-recipeList");
    recipeList=JSON.parse(localStorage.getItem("recipes"))
    displayrecipe(recipeList[recipeID]);
});

$("#searchBtn").on("click", function(){
    var searchName = $("#searchName");
    var searchString = searchName.val().trim();
    localStorage.setItem("searchTerm", searchString);
    location.href = "./search.html";

});

        
// function createRecipeCard(name, images, ingredients, instructions,) {
// let recipeCardEl = $("<div>").attr("class", "recipe-Card");
// let cardName = $("<h3>").attr("class", "card-name");
// let cardImages = $("<img>").attr("class", "images");
// let cardDescription = $("<p>").attr("id", "card-description");
// let cardIngredients = $("<p>").attr("id", "card-Ingredients");
// let cardInstructions = $("<p>").attr("id", "card-Instructions");

// cardRow.append(recipeCardEl);
// cardName.text(recipe);
// cardImages.attr("src", icon);
// cardDescription.text(`Description: ${description}`);
// cardIngredients.text(`Ingredients: ${ingredients}`);
// cardInstructions.text(`Instructions: ${instructions}`);
// recipeCardEl.append(cardName, cardImages, cardDescription, cardIngredients, cardInstructions);
