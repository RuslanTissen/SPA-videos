




getUser()
	.then(user => {
		return getPosts(user.id)
	})
	.then(posts => {
		console.log(posts)
	})
	.catch(error => console.error(error))














async function fetchUserPosts() {
	try {
		const user = await getUser()
		const posts = await getPosts(user.id)
		console.log(posts)
	} catch (error) {
		console.error(error)
	}
}
fetchUserPosts()
