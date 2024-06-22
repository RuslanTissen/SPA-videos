// Default export (inline)
// export default function rotate(element) {
// 	element.classList.toggle("rotate")
// }

// Default export (not inline)
// export default rotate

// Named export (inline)
export function stopRotate(element) {
	element.classList.remove("rotate")
}

// export const test = 7;
// export default () => {console.log(2024)}
const logNum = () => { console.log(2024) }
export default logNum

// Named export (not inline)
function hide(element) {
	element.hidden = true
}
export { hide }

console.log("Rotate file")