function Bike (locationX, locationY, size, color, direction) {
  this.locationX = locationX;
  this.locationY = locationY;
  this.size = size;
  this.color = color;
  this.direction = direction;
}

Bike.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.locationX, this.locationY, this.size, this.size);
  return this;
}

Bike.prototype.move = function (direction) {
    switch (direction) {
      case 'left':
        this.direction = 'left';
        return this;
        break;
      case 'up':
        this.direction = 'up';
        return this;
        break;
      case 'right':
        this.direction = 'right';
        return this;
        break;
      case 'down':
        this.direction = 'down';
        return this;
        break;
    };
};

module.exports = Bike
