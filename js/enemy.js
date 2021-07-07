function getRandom(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function createEnemy(w, h, img, eCanvas) {
  var enemy = new Enemy(w, h, img, eCanvas);
  return enemy;
}
function Enemy(w, h, img, eCanvas) {
  this.canvasWidth = eCanvas.width;
  // this.canvasHeight = eCanvas.Height;
  var x = getRandom(0, this.canvasWidth - w)
  this.x = x;
  this.y = -h;
  this.w = w;
  this.h = h;

  this.speed = getRandom(3, 10);

  this.image = new Image();
  this.image.src = img;
  this.draw = function (eCanvas) {
    var context = eCanvas.getContext('2d');
    context.drawImage(this.image, 0, 0, this.w, this.h, this.x, this.y, this.w / 2, this.h / 2)
  }
  this.move = function () {
    this.y += this.speed;
  }
  this.isOutOfScreen = function (eCanvas) {
    if (this.y > eCanvas.height) {
      return true;
    } else {
      return false;
    }
  }
}
function isHit(enemyArray, hero) {
  var minX1 = enemyArray.x;
  var minY1 = enemyArray.y;
  var maxX1 = enemyArray.x + enemyArray.w;
  var maxY1 = enemyArray.y + enemyArray.h;

  var minX2 = hero.x;
  var minY2 = hero.y;
  var maxX2 = hero.x + hero.w;
  var maxY2 = hero.y + hero.h;

  var minX = Math.max(minX1, minX2);
  var minY = Math.max(minY1, minY2);
  var maxX = Math.min(maxX1, maxX2);
  var maxY = Math.min(maxY1, maxY2);

  if (minX < maxX && minY < maxY) {
    return true;
  } else {
    return false;
  }
}