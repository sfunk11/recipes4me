var recipeList = [];
function searchObject (name){
    for (i=0; i < recipeList.length; i++){
        if (recipeList[i].name === name){
            return true;
        }
    }
    return false;
}

    // mycookbook.io


function getRecipeInfo(recipeURL){
    let siteURL = recipeURL;
    const settings = {
	"async": false,
	"crossDomain": true,
	"url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
	"method": "POST",
	"headers": {
		"content-type": "application/xml",
		"x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
	},
	"data": siteURL
    };
  

    $.ajax(settings).done(function (response) {
      
      var recipe = {
        "name": response[0].name,
        "description": response[0].description,
        "images": response[0].images,
        "ingredients": response[0].ingredients,
        "instructions": response[0].instructions,
        "recipeURL": response[0].url,
      }
      if (localStorage.getItem("recipes")){
      recipeList = JSON.parse(localStorage.getItem("recipes"));
      }
      alreadyInList = searchObject(recipe.name);
      if (alreadyInList){
          return;
      }
      recipeList.push(recipe);
      console.log(recipeList);
      localStorage.setItem("recipes",JSON.stringify(recipeList));

    }
    )};



function searchForRecipe(searchString, ingString){

let searchTerm = searchString;
let searchIngredient = ingString;
let puppyURL = "https://recipe-puppy.p.rapidapi.com/?";
let searchName = $("#searchName");
let ingredientInput = $("#searchIngredient");
if (searchName.val() && ingredientInput.val()){
     searchTerm = searchName.val();
    puppyURL = puppyURL + "q=" + searchTerm;
    searchIngredient = ingredientInput.val();
    puppyURL = puppyURL + "&i=" + searchIngredient;
    }
    else if (searchName.val()){ 
        searchName = $("#searchName");
        searchTerm = searchName.val();
    puppyURL = puppyURL +  "q=" + searchTerm;
}
else if (ingredientInput.val()){
    searchIngredient = ingredientInput.val();
    puppyURL = puppyURL + "i=" + searchIngredient;}
else{
    puppyURL = puppyURL +  "q=" + searchTerm;
}

const puppySettings = {
    "async": false,
    "crossDomain": true,
    "url": puppyURL,
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
    }
};

$.ajax(puppySettings).done(function (response) {
    console.log(JSON.parse(response));
    localStorage.setItem("searchResults", response);

});
}
function getRandomRecipes(pageID){
    randomURL = "https://recipe-puppy.p.rapidapi.com/?p=" + pageID;
    const randomSettings = {
     "async": false,
     "crossDomain": true,
     "url": randomURL,
     "method": "GET",
     "headers": {
        "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"
    }
};

$.ajax(randomSettings).done(function (response) {
    console.log(JSON.parse(response));
    localStorage.setItem("searchResults", response);

});
}