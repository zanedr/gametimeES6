function Bike (locationX, locationY, size, color) {
  this.locationX = locationX;
  this.locationY = locationY;
  this.size = size;
  this.color = color;
  this.direction = 'left'
}

Bike.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.locationX, this.locationY, this.size, this.size);
  return this;
}

Bike.prototype.move = function (code) {
    switch (code) {
      case 37:
        this.direction = 'left';
        return this;
        break;
      case 38:
        this.direction = 'up';
        return this;
        break;
      case 39:
        this.direction = 'right';
        return this;
        break;
      case 40:
        this.direction = 'down';
        return this;
        break;
    };
};

module.exports = Bike
