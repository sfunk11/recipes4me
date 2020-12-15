$(document).ready(function(){
// mycookbook.io
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
	"method": "POST",
	"headers": {
		"content-type": "application/xml",
		"x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
		"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
	},
	"data": "https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/"
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
});