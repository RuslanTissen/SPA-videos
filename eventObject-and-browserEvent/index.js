// --------------- EVENT OBJECT ----------------




// --------------- BROWSER EVENTS --------------------

// DOMContentLoaded — это событие в JavaScript, которое срабатывает, 
// когда браузер полностью загрузил и обработал HTML - документ, 
// но до загрузки всех внешних ресурсов.
// Это означает, что весь DOM(Document Object Model) готов к взаимодействию.
// console.log(document)
document.addEventListener("DOMContentLoaded", () => {
	const p = document.querySelector("p")
	p.addEventListener("click", (event) => {
		console.log(event)
		// console.log(event.x)
		// const element = document.createElement("div")
		// element.style.position = "absolute"
		// element.style.width = "50px"
		// element.style.height = "50px"
		// element.innerText = "Hi!"
		// element.style.background = "white"
		// element.style.top = event.y + "px"
		// element.style.left = event.x + "px"
		// document.body.append(element)

		// console.log(event.target)
	})

	// const input = document.querySelector("input")
	// input.addEventListener("keydown", (e) => {
	// 	console.log(e.key)
	// })
})