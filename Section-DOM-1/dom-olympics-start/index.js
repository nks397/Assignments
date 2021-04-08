var header = document.getElementById("header")
header.textContent = ("JavaScript Made This!!")
header.style.fontSize = "22px"
header.style.fontWeight = "bold"
header.style.textAlign = "center"

var newH = document.createElement("h4")
newH.textContent = "[your name here] "
newH.style.fontSize = "15px"
newH.style.color = "#ffe5b4"
header.append(newH)

var span = document.createElement("span")
span.textContent = ("wrote the JavaScript")
span.style.color = "black"
span.style.fontSize = "15px"
newH.append(span)

var messages = document.getElementsByClassName("message");

messages[0].textContent = "Congrats on the new place.";
messages[1].textContent = "Thank you! :)"; 
messages[2].textContent = "How was your day?"; 
messages[3].textContent = "Today was great.";  

var clear = document.getElementById('clear-button');
clear.addEventListener('click',function(e) {
  document.getElementsByClassName('messages')[0].textContent = ""
})

