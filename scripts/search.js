
    
     function infoGen() {
        let savedResults = JSON.parse(localStorage.getItem("searchResults"));
        results = savedResults.results;
        $("#recipe-cards").empty();

        for (var i = 0; i < 10; i++) {
            newCardTemplate = `<div class='card' style='width: 600px;'> <div class = 'card-divider'><a id='card-title-${i}' href= '#'></a></div><img src='./assets/cook.jpg' id='thumb-${i}' style='height: 75px; width:75px; float: left;'> <div class='card-section' style='float: right;'><a class = 'button save' id='${i}'>Save to Cookbook</a><p id='ing-${i}'></p></div> </div>`
            var newCard = $(newCardTemplate);
            $("#recipe-cards").append(newCard);
            thumbID = "#thumb-" + i;
            if (results[i].thumbnail != ""){
                $(thumbID).attr("src", results[i].thumbnail);
            } else {
                $(thumbID).attr("style", "display: none")
            }
            titleID = "#card-title-" + i;
            $(titleID).html(results[i].title);
           $(titleID).attr("href", results[i].href);
            imgID = "#ing-" + i;
            $(imgID).text("Ingredients: " + results[i].ingredients)
        }};

 $(document).ready(function () {
     searchString = localStorage.getItem("searchTerm");
    searchForRecipe(searchString);
     infoGen();  
    });

$("#randomizer").click(function(){
    pageID = Math.floor(Math.random() *100);
    console.log(pageID);
    getRandomRecipes(pageID);
    infoGen();
})

$("#searchBtn").on("click", function(){
    searchName = $("#searchName");
    ingredientInput = $("#searchIngredient");
    searchString = searchName.val();
    ingString = ingredientInput.val();
    searchForRecipe(searchString,ingString);
    infoGen();
});

$(document).on("click",".save", function(){
    console.log(this);
    var id = $(this).attr("id");
    console.log(id);
    recipeID = "#card-title-"+ id;
    saveURL = $(recipeID).attr("href");
    console.log(saveURL);
    getRecipeInfo(saveURL);
});

         




