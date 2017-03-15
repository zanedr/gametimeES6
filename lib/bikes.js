function Bike (locationX, locationY, size, color) {
  this.locationX = locationX;
  this.locationY = locationY;
  this.size = size;
  this.color = color;
}

Bike.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.locationX, this.locationY, this.size, this.size);
  return this;
}

Bike.prototype.move = function (code) {
    console.log(code)
    switch (code) {
      case 37:
        this.locationX-=10;
        return this;
        break;
      case 38:
        this.locationY-=10;
        return this;
        break;
      case 39:
        this.locationX+=10;
        return this;
        break;
      case 40:
        this.locationY+=10;
        return this;
        break;
    };
};
module.exports = Bike
