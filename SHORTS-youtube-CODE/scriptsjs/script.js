document.addEventListener('DOMContentLoaded', () => {
	const jsonContent = document.getElementById('json-content');
	const animate = () => {
		// Add pulsating effect to the text
		jsonContent.innerHTML = jsonContent.innerHTML.replace(
			'"typescript-test": "cross-env node_modules/typescript/bin/tsc --project typing-tests"',
			'<span class="pulse">"typescript-test": "cross-env node_modules/typescript/bin/tsc --project typing-tests"</span>'
		);
	};

	animate();
});
