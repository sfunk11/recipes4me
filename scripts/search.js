$(document).ready(function(){
    searchString = localStorage.getItem("searchTerm");
    searchForRecipe(searchString);

    let savedResults = JSON.parse(localStorage.getItem("searchResults"));
    results = savedResults.results;

    $("#searchBtn").on("click", function(){
        searchName = $("#searchName");
        ingredientInput = $("#searchIngredient");
        searchString = searchName.val().trim();
        ingString = ingredientInput.val().trim();
        searchForRecipe(searchString,ingString);
    })

    function infoGen(n){  
            for(var i =0; i < n; i++){
             var img= $("#thumb").attr("src",results[i].thumbnail);
             var cardTitle = $("#card-title").html(results[i].title);
             var link = $("#link").attr("href", results[i].href);
             var ing= $("#ing").text("Ingredients: "+ results[i].ingredients)
             
             $("#cardTitle").append(cardTitle);
             $("#img").append(img);
             $("#link").append(link);
             $("#ing").append(ing);
         }}
        
    //      var selector = "#selector";
    //     if (selector = 1){ 
    //         for(i=0; i<1; i++){
    //             infoGen(1)
    //         }
    //     }
    //     else if (selector = 5){
    //         for(i=0; i<4; I++){
    //             infoGen(5)
    //         }
    //     }   
    //     else if (selector = 10){
    //         for(i=0; i<9; I++){
    //             infoGen(10)
    //         }
    //     }   
    //      else if (selector = 20){
    //         for(i=0; i<19; I++){
    //             infoGen(20)
    //         }
    //     }   
 
});