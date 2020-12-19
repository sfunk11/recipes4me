
   
    $("#searchBtn").on("click", function(){
        var searchName = $("#searchName");
        var searchString = searchName.val().trim();
        console.log(searchString);
        localStorage.setItem("searchTerm", searchString);
        location.href = "./search.html";
    
    });

    $("#cookbookBtn").on("click", function(){
        var inputURL = $("#inputURL");
        var recipeURL = inputURL.val().trim();
        localStorage.setItem("recipeURL", recipeURL);
        location.href = "./cookbook.html";
    })
