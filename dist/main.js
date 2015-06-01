var $albumOne = $("#one");
var $albumTwo = $("#two");
var $albumThree = $("#three");
var $albumFour = $("#four");
var $albumFive = $("#five");
var $albumSix = $("#six");

$("#sidebar").hide();
$albumOne.hide();
$albumTwo.hide();
$albumThree.hide();
$albumFour.hide();
$albumFive.hide();
$albumSix.hide();


$(".album a").on("click", function(e) {
	var $target = $(e.target);
	console.log($target.attr("href"));
	var targetName = $target.attr("href");
	$("#albums .album").hide();
	$(targetName).show();
	// $("#sidebar").show();


});


$("#sidebar a").on("click", function(e) {
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