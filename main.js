//let myString = "Hello world";

document.addEventListener("DOMContentLoaded", function() {

const target = document.querySelector("textarea#words");
const copyButton = document.querySelector("input#copy");

copyButton.addEventListener("click", (event) => {
  const text = target.value
  navigator.clipboard.writeText(text);
});

});
