const canvas = document.getElementById("backgroundCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size to match the document body dimensions
canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// Your background image
const backgroundImage = new Image();
backgroundImage.src = "wallpaperflare.com_wallpaper (2).jpg";

// Function to draw the animated background
function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background image
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

  // Animate by slightly shifting the image position
  const shiftX = Math.sin(Date.now() * 0.0005) * 20; // Adjust speed and distance
  const shiftY = Math.cos(Date.now() * 0.0005) * 20; // Adjust speed and distance

  // Draw the shifted image
  ctx.drawImage(backgroundImage, shiftX, shiftY, canvas.width, canvas.height);

  requestAnimationFrame(drawBackground);
}

// Ensure the image is loaded before starting the animation
backgroundImage.onload = function () {
  drawBackground();
};

// Handle window resize
window.addEventListener("resize", function () {
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
});
