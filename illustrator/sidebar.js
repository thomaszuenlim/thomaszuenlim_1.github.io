function showMenu() {
  var menu = document.getElementById("sidebar");
  var hamburger = document.getElementById("container-menu");
  var logo_icon = document.getElementById("container-logo-icon");

  //Toggle visibility of the main menu
  menu.classList.toggle("visible");

  //Toggle the rotation of the hamburger container
  hamburger.classList.toggle("rotate");

  //Toggle the visibility of the logo icon
  logo_icon.classList.toggle("visible");
}

document.getElementById("toggle").addEventListener('click', showMenu);
