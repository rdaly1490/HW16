var $albumOne = $("#one");
var $albumTwo = $("#two");
var $albumThree = $("#three");
var $albumFour = $("#four");
var $albumFive = $("#five");
var $albumSix = $("#six");

$("#sidebar").hide();
$("#one p").hide();
$albumOne.hide();

$albumOne.on("click", displayAlbumOne);
$albumTwo.on("click", displayAlbumTwo);
$albumThree.on("click", displayAlbumThree);
$albumFour.on("click", displayAlbumFour);
$albumFive.on("click", displayAlbumFive);
$albumSix.on("click", displayAlbumSix);


$(".album a").on("click", function(e) {
	var $target = $(e.target);
	console.log($target.attr("href"));
	var targetName = $target.attr("href");
	$("#main-page .album").hide();
	$(targetName).show();
	$("#sidebar").show();


});














function displayAlbumOne() {
	$("#sidebar").show();

}
function displayAlbumTwo() {
	
}
function displayAlbumThree() {
	
}
function displayAlbumFour() {
	
}
function displayAlbumFive() {
	
}
function displayAlbumSix() {
	
}

//one event listener for class of button and use if else to determine whats dispalyed/happens?