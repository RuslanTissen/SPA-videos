const btn = document.getElementById('push');
console.log(btn)
btn.innerText = 'Добро пожаловать!';
btn.style.background = "red"

btn.addEventListener('click', () => {
	alert('Кнопка нажата!');
});

document.body.style.background = "#4169E1"
document.body.style.fontFamily = "Roboto"
document.body.style.textAlign = "center"