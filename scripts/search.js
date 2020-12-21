
    
     function infoGen() {
        let savedResults = JSON.parse(localStorage.getItem("searchResults"));
        results = savedResults.results;
        console.log(results);
    
        for (var i = 0; i < 10; i++) {
            newCardTemplate = `<div class='card' style='width: 600px;'> <div class='card-divider' id='card-title-${i}'></div><img src='./assets/cook.jpg' id='thumb-${i}' style='height: 75px; width:75px; float: left;'> <div class='card-section' style='float: right;'><a href='#' id='link-${i}'>Link to website</a><p id='ing-${i}'></p></div> </div>`
            var newCard = $(newCardTemplate);
            $("#recipe-cards").append(newCard);
            thumbID = "#thumb-" + i;
            $(thumbID).attr("src", results[i].thumbnail);
            titleID = "#card-title-" + i;
            $(titleID).html(results[i].title);
            linkID = "#link-" + i;
           $(linkID).attr("href", results[i].href);
            imgID = "#ing-" + i;
            $(imgID).text("Ingredients: " + results[i].ingredients)
        }};

 $(document).ready(function () {
     searchString = localStorage.getItem("searchTerm");
    searchForRecipe(searchString);
     infoGen();  
    })
    $("#searchBtn").on("click", function(){
        searchName = $("#searchName");
        ingredientInput = $("#searchIngredient");
        searchString = searchName.val().trim();
        ingString = ingredientInput.val().trim();
        searchForRecipe(searchString,ingString);
        infoGen();
   


        //    // $("#card-title").append(cardTitle);
        //     //$("#thumb").append(img);
        //     //$("#link").append(link);
        //     //$("#ing").append(ing);
        //     newCard.append(cardTitleEl, imgEl, linkEl, ingEl);
        //     $("#recipe-cards").append(newCard);
        //     //}
    });
    // $("#search2").on("click", function () {
    //     let savedResults = JSON.parse(localStorage.getItem("searchResults"));
    //     var results = savedResults.results;
    //     //for (i = 0; i < 10; i++) {
    //         infoGen(results)
            


    


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


