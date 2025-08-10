//let myString = "Hello world";

document.addEventListener("DOMContentLoaded", function() {

var popupWindow = window.open(
    chrome.extension.getURL("normal_popup.html"),
    "exampleName",
    "width=400,height=400"
);
window.close(); // close the Chrome extension pop-up

const target = document.querySelector("textarea.target");

target.addEventListener("paste", (event) => {
//event.preventDefault();
const worditem = localStorage.getItem("word");
const elem = document.querySelector("textarea.target");

const elemvar = elem.value;

localStorage.setItem("word",elemvar);

elem.value = worditem;

console.log(worditem);

});

});