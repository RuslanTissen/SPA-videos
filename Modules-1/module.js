import rotate from "./rotate.js"

document.querySelectorAll("h1").forEach(h1 => {
	h1.addEventListener("click", event => {
		rotate(h1)
	})
})

console.log("Main JS")