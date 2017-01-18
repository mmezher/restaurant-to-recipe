//Monique Mezher's restaurant to recipe content.js file. 1/17/2017

//content.js for Restaurant to Recipe
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if(request.message==="clicked_browser_action" ){
var typeOfFood = $('h1:contains("food")').eq(0);
var text = typeOfFood.text();
var food = (text.split('food'))[0] + "food";
var foodTwo = (food.split('Best '))[1];
var foodList = foodTwo.split(' ');
var foodURL = "http://www.foodnetwork.com/search/search-results.recipes.html?searchTerm=";
for (i=0; i< foodList.length-1; i++){
	foodURL = foodURL + foodList[i];
	foodURL = foodURL + "+";
}
var foodURL = foodURL + foodList[foodList.length-1]; // grabs last search term
//var firstHref = $("a[href^='http']").eq(0).attr("href");
//console.log(firstHref);
//console.log(foodList);
//console.log(foodTwo);
console.log(foodURL);

chrome.runtime.sendMessage({"message": "open_new_tab", "url": foodURL});
		}
	}
);

