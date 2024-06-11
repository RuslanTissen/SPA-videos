const btn = document.querySelector("button");
const mark = document.querySelector("#mark")
const origin = mark.innerHTML

// btn.addEventListener("click", () => {
// if (mark.innerHTML === origin) {
// 	mark.innerHTML = "Toggle is active!"
// } else {
// 	mark.innerHTML = origin
// }

// btn.parentElement.classList.toggle("active")
// btn.nextElementSibling.classList.add("fontChange")
// 	// btn.nextElementSibling.classList.toggle("fontChange")
// })

// --------------------- Bonus ------

const wrapper = document.getElementById("wrapper")

wrapper.addEventListener("click", () => {
	wrapper.lastElementChild.innerHTML = "Get practice and be master!"
})