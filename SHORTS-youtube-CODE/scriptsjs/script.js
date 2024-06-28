// GSAP animation
document.addEventListener('DOMContentLoaded', () => {
	const tl = gsap.timeline();

	// Intro animation
	tl.to("#intro", { display: "block", duration: 1 })
		.to("#intro h1", { opacity: 1, duration: 1 })
		.to("#intro h1", { opacity: 0, duration: 1, delay: 1 })
		.to("#intro", { display: "none" });

	// package.json animation
	tl.to("#package-json", { display: "block" })
		.to("#package-json h2", { opacity: 1, duration: 1 })
		.to("#json-content", { text: `{}`, duration: 1, ease: "none" })
		.to("#package-json", { opacity: 0, duration: 1, delay: 1 })
		.to("#package-json", { display: "none" });

	// scripts example animation
	tl.to("#scripts-example", { display: "block" })
		.to("#scripts-example h2", { opacity: 1, duration: 1 })
		.to("#scripts-example-content", { text: `"scripts": {}`, duration: 2, ease: "none" })
		.to("#scripts-example-content", {
			text: `"scripts": {
	"start": "node app.js"
 }`, duration: 2, ease: "none", delay: 1
		})
		.to("#scripts-example", { opacity: 0, duration: 1, delay: 1 })
		.to("#scripts-example", { display: "none" });

	// script usage animation
	tl.to("#script-usage", { display: "block" })
		.to("#script-usage h2", { opacity: 1, duration: 1 });

	// Call to action animation
	tl.to("#call-to-action", { display: "block" })
		.to("#call-to-action h2", { opacity: 1, duration: 1 });
});
