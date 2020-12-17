$(document).ready(function(){
   
    $("#searchBtn").on("click", function(){
        searchString = $("#searchName").val().trim();
        console.log(searchString);
        location.href = "./search.html";
    
    });
});
