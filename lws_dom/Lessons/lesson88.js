console.dir(document)
const person = { name: 'shahin', age: 30, }
console.log(person)
console.log(document.URL)

console.log(document.getElementById('demo'))

console.log(document.getElementsByTagName('p'))
console.log(document.getElementsByClassName("anchor"));

let change = document.getElementById("anchor")

change.innerHTML = 'this is a anchor Tag'
console.log(change)


