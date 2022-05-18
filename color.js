const primary = document.querySelector("#primaryPicker");
const initColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--color"
);
primary.value = initColor.trim();
primary.addEventListener("input", setColor);

function setColor() {
  document.documentElement.style.setProperty("--color", primary.value);
  document.querySelector("#primaryColor").innerHTML =
    "Color primary" + primary.value;
}
