// default import
// import rotate from "./rotate.js"
// named import
// import { stopRotate } from "./rotate.js"

// combined default and named import
// import rotate, { stopRotate, hide } from "./rotate.js"
import rotate, * as rotateStuff from "./rotate.js"

console.log(rotateStuff.test)

document.querySelectorAll("h1").forEach(h1 => {
	h1.addEventListener("click", event => {
		if (h1.classList.contains("rotate")) {
			stopRotate(h1)
		} else {
			rotate(h1)
		}
	})
})

console.log("Main JS", rotateStuff)