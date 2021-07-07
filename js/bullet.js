function createBullet(bWidth, bHeight, bURL, hero) {
  var x = hero.x + hero.w / 4 + bWidth / 2 - 6;//183+16.5+3-6=196.5
  var y = hero.y - bHeight * 2;//510-10*2=490
  var bullet = new Bullet(x, y, bWidth, bHeight, bURL);
  //声音调用,这里不写
  return bullet;
}

function Bullet(x, y, bWidth, bHeight, bURL) {
  this.x = x;
  this.y = y;
  this.w = bWidth;
  this.h = bHeight;
  this.image = new Image();
  this.image.src = bURL;
  this.draw = function (canvas) {
    let context = canvas.getContext('2d');
    context.drawImage(this.image, this.x, this.y, this.w, this.h)
  }
  this.move = function () {
    this.y -= 10;
  }
  this.isOutOfScreen = function () {
    if (this.y < this.h) {
      return true;
    } else {
      return false;
    }
  }
}
