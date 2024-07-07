function DeleteUser() {

	const coinFlip = Math.random() > 0.5

	if (coinFlip) {
		resolve("Deleted user successfully")
	} else {
		reject("Failed to delete user :(((")
	}
}







function doStuff() {

	const random = Math.round(Math.random())

	if (random === 1) {
		resolve("GREAT SUCCESS")
	} else {
		reject("UTTER FAILURE")
	}
}