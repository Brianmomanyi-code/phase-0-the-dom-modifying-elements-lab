// Write your code here!

const element = document.querySelector("body")
element.remove("main")
const newHeader = document.createElement("h1")
newHeader.id = "victory"
newHeader.innerHTML = "YOUR-NAME is the champion"