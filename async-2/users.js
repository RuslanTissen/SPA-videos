export default function getUsers() {
	return new Promise((resolve, reject) => {
		if (Math.random() * 100 <= 50) {
			// reject("Failed")
			throw new Error("getUsers failed")
		} else {
			resolve([
				{ id: 1, name: "Frank" },
				{ id: 38, name: "Jhon" },
				{ id: 175, name: "Tanya" }
			])
		}
	})
}