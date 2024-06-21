export function getRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

export function generatePalette(numColors) {
	const palette = [];
	for (let i = 0; i < numColors; i++) {
		palette.push(getRandomColor());
	}
	return palette;
}
