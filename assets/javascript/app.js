// fade in main content
$(document).on("ready", function() {
	$(".main").css("display", "none");
	$(".main").fadeIn(1250);
});

// initialize Ekko Lightbox
$(document).on("click", "[data-toggle='lightbox']", function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// return to top
$("#returntotop").on("click", function() {
	$("html, body").animate({ scrollTop: 0}, 1500);
});

// return to top hover functionality
$(".nav").on({
	"mouseenter": function() {
		$(this).attr("src", "../assets/images/misc/up-arrow-blue.png");
	},
	"mouseleave": function() {
		$(this).attr("src", "../assets/images/misc/up-arrow.png");
	}
});