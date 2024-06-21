export function displayPalette(colors) {
	const paletteContainer = document.getElementById('palette');
	paletteContainer.innerHTML = ''; // Очистить предыдущие цвета

	colors.forEach(color => {
		const colorBox = document.createElement('div');
		colorBox.className = 'color-box';
		colorBox.style.backgroundColor = color;
		paletteContainer.appendChild(colorBox);
	});
}
