(function (x) {
	const text = "is very expensive"
	console.log("Mars colonisation ", text)

	window.publicVarible = "short"
	window.printText = function () {
		console.log("Rockets are ", text)
	}

})(2050)

console.log("Text is", publicVarible)