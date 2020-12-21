$(document).ready(function () {
    searchString = localStorage.getItem("searchTerm");
    searchForRecipe(searchString);
    
    function infoGen(results) {
        for (var i = 0; i < 10; i++) {
            var newCard = $("<div>").attr("class","card");
            var imgEl = $("<img>").attr("id", "thumb");
            //var img = $("#thumb").attr("src", results[i].thumbnail);
            var cardTitleEl = $("<h4>").attr("id", "title");
            //var cardTitle = $("#card-title").html(results[i].title);
            var linkEl = $("<a>").attr("id", "link");
           // var link = $("#link").attr("href", results[i].href);
            var ingEl = $("<p>").attr("id", "ing");
           // var ing = $("#ing").text("Ingredients: " + results[i].ingredients)

    let savedResults = JSON.parse(localStorage.getItem("searchResults"));
    results = savedResults.results;

    $("#searchBtn").on("click", function(){
        searchName = $("#searchName");
        ingredientInput = $("#searchIngredient");
        searchString = searchName.val().trim();
        ingString = ingredientInput.val().trim();
        searchForRecipe(searchString,ingString);
    })


           // $("#card-title").append(cardTitle);
            //$("#thumb").append(img);
            //$("#link").append(link);
            //$("#ing").append(ing);
            newCard.append(cardTitleEl, imgEl, linkEl, ingEl);
            $("#recipe-cards").append(newCard);
            //}
    }};
    $("#search2").on("click", function () {
        let savedResults = JSON.parse(localStorage.getItem("searchResults"));
        var results = savedResults.results;
        //for (i = 0; i < 10; i++) {
            infoGen(results)
            
    })
}
    


    // var selector = "#selector";
    //if (selector = 1) {
    //  for (i = 0; i < 1; i++) {
    //     infoGen(1)
    //    }
    //}
    //else if (selector = 5) {
    //   for (i = 0; i < 4; I++) {
    //      infoGen(5)
    // }
    //}
    //else if (selector = 10) {
    //   for (i = 0; i < 9; I++) {
    //      infoGen(10)
    // }
    //}
    //else if (selector = 20) {
    //   for (i = 0; i < 19; I++) {
    //      infoGen(20)
    // }
    //}
);

