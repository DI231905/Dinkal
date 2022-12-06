<script>
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title: {
		text: "Daily Email Analysis"
	},
	axisX: {
		valueFormatString: "DDD",
		minimum: new Date(2017, 1, 5, 23),
		maximum: new Date(2017, 1, 12, 1)
	},
	axisY: {
		title: "Number of Messages"
	},
	legend: {
		verticalAlign: "top",
		horizontalAlign: "right",
		dockInsidePlotArea: true
	},
	toolTip: {
		shared: true
	},
	data: [{
		name: "Received",
		showInLegend: true,
		legendMarkerType: "square",
		type: "area",
		color: "rgba(40,175,101,0.6)",
		markerSize: 0,
		dataPoints: [
			{ x: new Date(2017, 1, 6), y: 220 },
			{ x: new Date(2017, 1, 7), y: 120 },
			{ x: new Date(2017, 1, 8), y: 144 },
			{ x: new Date(2017, 1, 9), y: 162 },
			{ x: new Date(2017, 1, 10), y: 129 },
			{ x: new Date(2017, 1, 11), y: 109 },
			{ x: new Date(2017, 1, 12), y: 129 }
		]
	},
	{
		name: "Sent",
		showInLegend: true,
		legendMarkerType: "square",
		type: "area",
		color: "rgba(0,75,141,0.7)",
		markerSize: 0,
		dataPoints: [
			{ x: new Date(2017, 1, 6), y: 42 },
			{ x: new Date(2017, 1, 7), y: 34 },
			{ x: new Date(2017, 1, 8), y: 29 },
			{ x: new Date(2017, 1, 9), y: 42 },
			{ x: new Date(2017, 1, 10), y: 53},
			{ x: new Date(2017, 1, 11), y: 15 },
			{ x: new Date(2017, 1, 12), y: 12 }
		]
	}]
});
chart.render();

}

$(document).ready(function(a) {
   
    $("#openmenu").sidr({
        name: "sidr-content",
        source: "#nav",
        side: "right"
    });
  
});

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});



jQuery(document).ready(function($) {
  $('.slick.marquee').slick({
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  });
});
</script>