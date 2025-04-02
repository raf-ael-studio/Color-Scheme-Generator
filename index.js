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


let RGB;

function generateRGB() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
   RGB = `rgb(${red}, ${green}, ${blue})`;
  fetch(`https://www.thecolorapi.com/id?rgb=${RGB}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

// fetch("https://www.thecolorapi.com/id?hex=000")
// .then(res => res.json())
// .then(data => console.log(data))
