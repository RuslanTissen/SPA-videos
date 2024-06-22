import { rotate } from './rotate.js';

document.querySelector('h1').addEventListener('click', event => {
	rotate(event.target);
});

console.log('Main JS loaded');
