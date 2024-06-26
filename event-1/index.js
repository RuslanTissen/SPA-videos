const btn = document.querySelector("button");

function buttonClickHandler() {
	console.log("CLICKED");
	btn.removeEventListener("click", buttonClickHandler);
}

btn.addEventListener("click", buttonClickHandler);

// --------------------------

btn.addEventListener("mouseenter", () => {
	console.log("Mouse enter!")
})

btn.addEventListener("focus", () => {
	console.log("Focus!")
})

btn.addEventListener("blur", () => {
	console.log("Blur!")
})