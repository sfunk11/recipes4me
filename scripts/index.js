
   
    $("#searchBtn").on("click", function(){
        var searchString = $("#searchName").text().trim();
        console.log(searchString);
        searchForRecipe(searchString);
        location.href = "./search.html";
    
    });

