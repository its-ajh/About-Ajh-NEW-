  const container = document.getElementById("container");
  const text = document.getElementById("text");

  container.addEventListener("resize", function() {
    text.style.fontSize = (container.offsetWidth / 10) + "px";
  });