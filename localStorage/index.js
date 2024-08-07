const url = "https://jsonplaceholder.typicode.com/posts"



const inputSess = document.querySelector("#content")
const oldValue = localStorage.getItem("text-input")
if (oldValue) {
	inputSess.value = oldValue
}

inputSess.addEventListener("change", () => {
	localStorage.setItem("text-input", inputSess.value)
})


const input = sessionStorage.getItem("text-input")
// console.log(input)

// Get posts from fake API
const response = await fetch(url)
const posts = await response.json()

posts.forEach(post => {
	const li = document.createElement("li")
	li.innerText = post.title
	document.querySelector("#list").append(li)
})

// Post DATA to fake API
document.querySelector("#save").addEventListener("click", () => {
	const text = document.querySelector("#content").value

	const config = {
		method: "POST",
		body: JSON.stringify({
			title: text,
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',  // mimetype
		}
	}

	fetch(url, config)
		.then(response => {
			return response.json()
		})
		.then(post => {
			console.log(post)
			const li = document.createElement("li")
			li.innerText = post.title
			document.querySelector("#list").prepend(li)
		})
		.catch(error => {
			console.log("Mama mia!", error)
		})
})