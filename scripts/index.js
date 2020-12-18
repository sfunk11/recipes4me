
   
    $("#searchBtn").on("click", function(){
        var searchName = $("#searchName");
        var searchString = searchName.val().trim();
        console.log(searchString);
        searchForRecipe(searchString);
        location.href = "./search.html";
    
    });

