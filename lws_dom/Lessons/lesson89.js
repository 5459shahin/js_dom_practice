console.log(document.getElementsByTagName('p'))

let findCss = document.querySelectorAll('a')
console.log(findCss);
let findCss1 = document.querySelectorAll('.anchor')
console.log(findCss1);
let findCss2 = document.querySelectorAll('#demo')
console.log(findCss2);
let findCss3 = document.querySelector('#anchor')
console.log(findCss3);


const x = document.forms["frm1"];
console.dir(x)
let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;

console.log(document.forms)

console.log(document.images)