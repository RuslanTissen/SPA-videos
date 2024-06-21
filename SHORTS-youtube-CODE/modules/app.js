import { generatePalette } from './color-generator.js';
import { displayPalette } from './ui-handler.js';

document.getElementById('generate-btn')
	.addEventListener('click', () => {
		const colors = generatePalette(5);
		displayPalette(colors);
	});
