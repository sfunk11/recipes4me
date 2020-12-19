
   
    $("#searchBtn").on("click", function(){
        var searchName = $("#searchName");
        var searchString = searchName.val().trim();
        console.log(searchString);
        localStorage.setItem("searchTerm", searchString);
        location.href = "./search.html";
    
    });

