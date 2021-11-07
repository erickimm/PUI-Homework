// Get the popup
var modal = document.getElementById("myModal");

// Get the button that opens the popup
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the popup
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the popup
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the popup
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}