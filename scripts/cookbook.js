$(document).ready(function(){


    recipeURL = localStorage.getItem("recipeURL");
    getRecipeInfo(recipeURL);

   var recipeList = JSON.parse(localStorage.getItem("recipes"));
    for (var i = 0; i < recipeList.length; i++) {
     var recipeTable = $("<tr>");
     var recipeName = $("<td>");

     $(recipeName).attr("class", "hollow button expanded recipeList");
     
     $(recipeName).attr("data-recipeList", i);
     $(recipeTable).append(recipeName);
     $("#stack").append(recipeTable);
     $(recipeName).text(recipeList[i].name);
    }
});

function getingredients(ingredients){
 $("#card-Ingredients").empty();
    for (var i = 0; i < ingredients.length; i ++) {
     ingredientEl = $("<li>")
     $(ingredientEl).text(ingredients[i])
     $("#card-Ingredients").append(ingredientEl)
 }
}
 function getinstructions(instructions){
    $("#card-Instructions").empty();
    for (var i = 0; i < instructions[0].steps.length; i++) {
        instructionsEl = $("<li>")
        $(instructionsEl).text(instructions[0].steps[i])
        $("#card-Instructions").append(instructionsEl)
    }
}
function displayrecipe(recipe){
   
    $(".card-name").text(recipe.name);
    $("#card-Image").attr("src", recipe.images[0]);
    $("#card-Image").attr("style", "display: block")
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

        
