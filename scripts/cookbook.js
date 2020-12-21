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
    recipeTemplate = `<tr><td class='button' data-recipeList='${i}'>${recipeList[i]}</td></tr>`
    var recipeTable = $(recipeTemplate);
        //var recipeTable = $(
        //"<tr><td class='recipeList' data-recipeList='" +
       // recipeList[i] +
       // "'>" +
       // recipeList[i] +
       // "</td></tr>"
    //);
    console.log(recipeList[i].name)

$(".recipeList").append(recipeTable);
$(recipeTable).text(recipeList[i].name)
}
})   
$(document).on("click", ".recipeList", function () {
    var rL = $(this).data("recipeList");
recipeList=JSON.parse(localStorage.getItem("recipes"))
 console.log(recipeList)
})

function getingredients(ingredients){
 for (var i = 0; i < ingredients.length; i++) {
     ingredientEl = $("<li>")
     $(ingredientEl).text(ingredients[i])
     $("#card-Ingredients").append(ingredientEl)
 }
 function getinstructions(instructions){
    for (var i = 0; i < instructions.length; i++) {
        instructionsEl = $("<li>")
        $(instructionsEl).text(instructions[i])
        $("#card-Instructions").append(instructionsEl)
    }
}
function displayrecipe(recipe){
    console.log(recipe);
    $(".card-name").text(recipe.name)
    $("#link").attr("href", recipe.recipeURL)
    $("#card-description").text(recipe.description)
    getingredients(recipe.ingredients)
}

$(document).on("click", ".recipeList",function(){
    i=$(this).attr("data-recipeList");
    recipeList=JSON.parse(localStorage.getItem("recipes"))
    displayrecipe(recipeList[i])
})


// $(".recipe").html("Recipe:" + response.recipe);
// $(".cuisine").text("Cuisine: " + response.cuisine);
// $(".ingredients").text("Ingredients: " + response.ingredients);
// });
        
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

