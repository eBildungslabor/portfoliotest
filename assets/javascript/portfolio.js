// fade in main content
$(document).on("ready", function() {
	$(".main").css("display", "none");
	$(".main").fadeIn(1250);
});

$(window).on("load", runMasonry);

$(window).on("resize", function() {
	setTimeout(runMasonry, 1000);
});

// return to top
$("#returntotop").on("click", function() {
	$("html, body").animate({ scrollTop: 0}, 1500);
});

// return to top hover functionality
$(".nav").on({
	"mouseenter": function() {
		$(this).attr("src", "assets/images/misc/up-arrow-blue.png");
	},
	"mouseleave": function() {
		$(this).attr("src", "assets/images/misc/up-arrow.png");
	}
});

function runMasonry() {
	var $container = $(".grid");
	$container.imagesLoaded(function() {
		$container.masonry({
			itemSelector: ".grid-item",
			horizontalOrder: true,
			stagger: "0.025s",
			columnWidth: ".grid-item",
			percentPosition: true
		});
	});
}

// initialize multiple filters
var $container = $(".grid");
$container.multipleFilterMasonry({
	itemSelector: ".grid-item",
	filtersGroupSelector: ".filterlist"
});

// obtain line height for title overlay and zoom in on underlying image
$(".title").on("mouseenter", function() {
	// set line height
	var lineheight = $(this).css("height");
	$(this).css("line-height", lineheight);

	// zoom in
	var value = $(this).attr("value");
	$("#" + value).addClass("zoom");

	// set border radii
	$(this).css("border-radius", "10px");
	$("#grid-item-" + value).css("border-radius", "10px");
});

// zoom out on underlying image
$(".title").on("mouseleave", function() {
	// zoom out
	var value = $(this).attr("value");
	$("#" + value).removeClass("zoom");

	// reset border radii
	$(this).css("border-radius", "0px");
	$("#grid-item-" + value).css("border-radius", "0px")
});

// select label
$("input").on("click", function() {
	var value = $(this).attr("value");
	$("#" + value).toggleClass("selectedfilter");
});