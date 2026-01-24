// 
// alert("Hello AssHutosh!!");
// alert('dont click me');
// prompt("Enter your number:");
// function toggleParagraphClass() {
//   const paragraph = document.getElementById("myParagraph");
//   paragraph.classList.toggle("hidden");
// }
const toggleButton = document.getElementById('toggleButton');
const toggleParagraph = document.getElementById('toggleParagraph');

// Add a click event listener to the button
toggleButton.addEventListener('click', function() {
  // Toggle the 'hidden' class on the paragraph
  toggleParagraph.classList.toggle('hidden');
});