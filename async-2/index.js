
// const testPromises = async () => {
// 	function doStuff() {
// 		return new Promise((resolve, reject) => {
// 			resolve(Math.random() * 10)
// 		})
// 	}

// 	const thing = await doStuff()
// 	console.log(thing)
// }
// await testPromises()

const getUsers = async () => {
	return [
		{ id: 1, name: "Balya" },
		{ id: 2, name: "Iliya" },
		{ id: 3, name: "Kolya" }
	]
}
async function testFunction() {
	const testAwait = await getUsers()
	console.log(testAwait)
}
testFunction()