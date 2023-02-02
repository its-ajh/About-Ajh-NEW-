function lightMode() {
  var element = document.body;
  element.classList.toggle("light-mode");
} 

function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("Error 69420. Well, you clicked on the icon, but for some reason, your browser couldnt find the page.");
        return;
    }
    var pages = document.getElementsByClassName('page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}