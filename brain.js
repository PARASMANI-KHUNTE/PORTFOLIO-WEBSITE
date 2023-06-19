function scrolldiv() {
    var elem = document.getElementById("fun");
    elem.scrollIntoView();
}

function scrolla() {
  var elem = document.getElementById("about");
  elem.scrollIntoView();
}

function scrollc() {
  var elem = document.getElementById("contact");
  elem.scrollIntoView();
}

function scrollh() {
  var elem = document.getElementById("help");
  elem.scrollIntoView();
}

function scrollp() {
  var elem = document.getElementById("fun");
  elem.scrollIntoView();
}

function scrollm() {
  var elem = document.getElementById("container");
  elem.scrollIntoView();
}


// Array of image URLs
const images = [
    'vector1.jpg',
    'vector.jpg',
    'vector2.jpg',
  ];
  
  // Function to change the background image
  function changeBackgroundImage() {
    const container = document.getElementById('container');
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];
    container.style.backgroundImage = `url(${imageUrl})`;
  }
  
  // Initial image change
  changeBackgroundImage();
  
  // Set interval to change the background image every 5 seconds (5000 milliseconds)
  setInterval(changeBackgroundImage, 5000);