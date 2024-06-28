import moment from "moment"

console.log(moment().format("dd DD.MM"))

const element = document.createElement("div")
element.innerHTML = "Hi from JS"
document.body.append(element)
