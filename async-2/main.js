import getUsers from "./users.js";

try {
	const users = await getUsers()
	console.log(users)
	users.forEach(user => {
		const li = document.createElement("li")
		li.innerText = user.name
		document.querySelector("#users").append(li)
	})
} catch (error) {
	alert("Ups, sorry for that, it failed")
	console.log(error)
}