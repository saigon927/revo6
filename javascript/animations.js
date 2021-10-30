// Advantages blocks

let target1 = document.querySelector(".advantages__blocks-wrap");

const obserber1 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		const blocks = entry.target;
		if (entry.isIntersecting) {
			blocks.classList.add('visible');
		}
	});
})

obserber1.observe(target1);