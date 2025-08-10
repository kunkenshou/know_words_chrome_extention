//let myString = "Hello world";

document.addEventListener("DOMContentLoaded", function() {

let words = [];

const target = document.querySelector("textarea#words");
const copyButton = document.querySelector("input#copy");

copyButton.addEventListener("click", (event) => {
  const text = target.value
  words = text.split(" ").join(",\n");
  console.log(words);
  navigator.clipboard.writeText(words);
});

});
