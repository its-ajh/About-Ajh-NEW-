function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
  element.classList.toggle("light-mode > card");
  element.classList.toggle("light-mode > i");
}

AOS.init();
