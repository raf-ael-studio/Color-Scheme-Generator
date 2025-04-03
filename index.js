/**
 * REQUIREMENTS
 *
 * Choose "seed color" with an <input type="color"/>
 *
 * Choose color scheme mode in a <select> box
 *
 * Clicking button makes request to the Color API to get a color scheme
 *
 * Display the scheme colors and hex values on the page
 *
 * BONUS: clicking the color and/or hex value copies to the clipboard
 *
 */

document.addEventListener("DOMContentLoaded", function () {
  let RGB;
  const seedColor = document.getElementById("seed-color");
  const color1 = document.getElementById("color-1");
  const color2 = document.getElementById("color-2");
  const color3 = document.getElementById("color-3");
  const color4 = document.getElementById("color-4");
  const color5 = document.getElementById("color-5");

  const colors = document.getElementsByClassName("color");

  const generateButton = document.getElementById("generate");
  const modeInput = document.getElementById("mode");
  let hexCodes;

  function rgbToHex(r, g, b) {
    let red = r.toString(16).padStart(2, "0");
    let green = g.toString(16).padStart(2, "0");
    let blue = b.toString(16).padStart(2, "0");

    return "#" + red + green + blue; //
  }

  function generateRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    RGB = `rgb(${red},${green},${blue})`;

    let hex = rgbToHex(red, green, blue);
    seedColor.value = hex;

    console.log(modeInput.value);

    // color1.style.backgroundColor = RGB;
    fetch(
      `https://www.thecolorapi.com/scheme?rgb=${RGB}&mode=${modeInput.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        hexCodes = data.colors.map((color) => color.hex.value);
        console.log(hexCodes);
        for (let i = 0; i < hexCodes.length; i++) {
          colors[i].style.backgroundColor = hexCodes[i];
        }
      });
  }

  generateButton.addEventListener("click", generateRGB);
});
// fetch("https://www.thecolorapi.com/id?hex=000")
// .then(res => res.json())
// .then(data => console.log(data))
