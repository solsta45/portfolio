function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropdown-toggle")) {
    var dropdownMenu = document.getElementById("dropdown-menu");
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  }
};
