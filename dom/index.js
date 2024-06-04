// console.group("> GETTING ELEMENT CHILDREN AND PARENT")
// const list = document.getElementById("list")
// console.log("Our list is a " + list.nodeName)
// console.log("Parent of list is a " + list.parentElement)
// console.log(`Children of list is a  + ${list.children}`)
// console.log("Parent of list is a " + Array.from(list.children))
// const kids = Array.from(list.children)
// kids.forEach(child => console.log("Child of List ", child))
// console.groupEnd()

// const target = document.querySelector(".target")
// console.log(target)
// console.log(target.matches("li"))
// console.log(target.matches("#radish"))
// console.log(target.matches("div"))
// console.log(target.matches(".fruit"))
// console.log(target.matches(".target"))

// console.log("------------------------------")
// console.log(target.closest("#list"))  // find closest PARENT that matches the given selector

// console.log(target.previousSibling)
// console.log(target.previousElementSibling)
// target.previousElementSibling.style.color = "red"

const footer = document.querySelector("footer")
console.log(footer)

console.log(`Text inside footer: "${footer.innerText}"`)
console.log(`Text inside footer: "${footer.textContent}"`)
console.log(`Text inside footer: "${footer.innerHTML}"`)

// footer.innerText = "Ilon Musk"
// footer.textContent = "I like big dogs"
footer.innerHTML = "Give me a new result!<p>Wich one?</p>"


console.log(document.body.contains(footer))  //  true
console.log(footer.contains(document.body))  // false