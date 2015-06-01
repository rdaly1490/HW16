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
	$("#albums").css("float", "right");
	$("#albums").css("width", "70%");
	$("#sidebar").css("float", "left");
	$("#sidebar").show();


});


$("#sidebar a").on("click", function(e) {
	var $target = $(e.target);
	console.log($target.attr("href"));
	var targetName = $target.attr("href");
	$("#albums .enter-album").hide();
	$(targetName).show();

});

$("#albums .enter-album a").on("click", function(e) {
	var $target = $(e.target).parent();
	console.log($target);
	$("#albums .enter-album a").parent().hide();
	$target.show();
	$target.css("width", "450px");
	$target.css("height", "450px");
	$target.css("marginTop", "40px");
	$target.css("marginLeft", "40px");

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