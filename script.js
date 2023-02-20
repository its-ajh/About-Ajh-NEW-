  const container = document.getElementById("container");
  const text = document.getElementById("a");

  container.addEventListener("resize", function() {
    text.style.fontSize = (container.offsetWidth / 10) + "px";
  });