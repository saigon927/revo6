new Swiper(".your-favorite__slider", {
	navigation: {
		nextEl: ".your-favorite__swiper-button-next",
		prevEl: ".your-favorite__swiper-button-prev"
	},
	grid: {
		rows: 1
	},
	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".your-favorite__slider"
	},
	breakpoints: {
		1065: {
			grid: {
				rows: 2
			},
			slidesPerView: 2,
		},
		767: {
			grid: {
				rows: 2
			},
			slidesPerView: 1.5
		}
	},
	slidesPerView: 1,
	slidesPerGroup: 1,
	spaceBetween: 30,
});