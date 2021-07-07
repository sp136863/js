function createhero(w, h, heroCanvas, img, heroloaded) {
  // var hero2121 = heroCanvas.getContext('2d');
  var canvasWidth = heroCanvas.width;
  var canvasHeight = heroCanvas.height;
  var x = canvasWidth / 2 - w / 2 + 17;//400/2-66/2+17=183
  var y = canvasHeight - h;//550-87+47=510
  var hero = new Hero(x, y, w, h, img, heroloaded);
  console.log(heroCanvas.width);
  document.onkeydown = function (e) {
    // console.log(e.key);
    // if (e.key == 'ArrowUp') {
    //   console.log(111);
    // }
    switch (e.key) {
      case 'ArrowUp': { hero.up = true; break; }
      case 'ArrowDown': { hero.down = true; break; }
      case 'ArrowLeft': { hero.left = true; break; }
      case 'ArrowRight': { hero.right = true; break; }
    }
  }
  document.onkeyup = function (e) {
    switch (e.key) {
      case 'ArrowUp': { hero.up = false; break; }
      case 'ArrowDown': { hero.down = false; break; }
      case 'ArrowLeft': { hero.left = false; break; }
      case 'ArrowRight': { hero.right = false; break; }
    }
  }
  let timer = setInterval(() => {
    if (hero.up == true) { hero.y -= 2; }
    else if (hero.down == true) { hero.y += 2; }
    else if (hero.left == true) { hero.x -= 2; }
    else if (hero.right == true) { hero.x += 2; }
  }, 10);
  return hero;
}
function Hero(x, y, w, h, img, heroloaded) {
  this.up = false;
  this.down = false;
  this.left = false;
  this.right = false;
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.image = new Image();
  this.image.src = img;
  this.image.onload = function () {
    heroloaded(this);
  }
  this.bool = true;
}

Hero.prototype.draw = function (heroCanvas) {
  var context = heroCanvas.getContext('2d');
  var x = this.x//183
  var y = this.y;//510
  var w = this.w;//66
  var h = this.h;//87
  context.drawImage(this.image, 125, 0, w, h, x, y, 33, 44);
  this.bool = !this.bool;
}