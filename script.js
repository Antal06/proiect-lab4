// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var asteptari = document.getElementById("asteptari")
var educatie = document.getElementById("educatie")

var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")


// Add event listener
button.addEventListener("click", altaViata)
an.addEventListener ("mouseover", displayAge)

const d = new Date()
var year = d.getFullYear()


// Define function 
function displayAge() {
an.innerHTML = year - an.innerHTML
}


	function altaViata() {
  nume.innerHTML = "Software Engineer";
  prenume.innerHTML = "Google";
  educatie.innerHTML = "Experiente";
  asteptari.innerHTML = "<ul><li>Workshops</li><li>Internship</li></ul>";


  body.style.backgroundImage = "url('images/field.jpg')";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";
  body.style.backgroundPosition = "center";
  body.style.backgroundAttachment = "fixed";


  body.style.color = "pink";
  body.style.fontFamily = "Montserrat, sans-serif";


  img.src = "images/utcn.jpg";
  img.style.opacity = "70%";
  img.style.border = "5px solid black";
  img.style.width = "500px";
  img.style.height = "400px";


}
