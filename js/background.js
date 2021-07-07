function loadBackground(bgURL, bgCanvas, moveBackground) {
  var context = bgCanvas.getContext("2d");
  var width = 400;
  var height = 550;
  var image = new Image();
  image.src = bgURL;
  image.onload = function () {
    context.drawImage(this, 0, 0, width, height);
    context.drawImage(this, 0, -height, width, height);
    if (moveBackground) {
      moveBackground(image);
    }
  }
}
var backgroundOffset = 0;
function animateBackground(bgCanvas, bgImage, speed) {
  var context = bgCanvas.getContext("2d");
  var width = bgCanvas.width;
  var height = bgCanvas.height;
  context.clearRect(0, 0, width, height);
  // context.save();
  backgroundOffset += speed;
  if (backgroundOffset >= height) {
    backgroundOffset = 0;
  }
  // context.translate(0, backgroundOffset)
  context.drawImage(bgImage, 0, backgroundOffset, width, height);
  context.drawImage(bgImage, 0, -height + backgroundOffset, width, height)
  // context.restore();
}