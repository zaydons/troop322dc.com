// Opens and closes the menu on phones (the "Menu" button).
(function () {
  var button = document.querySelector(".menu-button");
  var menu = document.getElementById("menu");
  if (!button || !menu) return;
  button.addEventListener("click", function () {
    var open = menu.classList.toggle("flexnav-show");
    button.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
