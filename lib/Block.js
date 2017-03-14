function Block (x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
}

Block.prototype.draw = function (context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

// Block.prototype.clicked = function (pageX, pageY) {
//   var x = pageX,
//       y = pageY;
//       console.log(x,y);
//       if (x > this.x &&
//           x < this.x + 50 &&
//           y > this.y &&
//           y < this.y + 50) {
//             selectedBlock = this;
//             return selectedBlock;
//             console.log(selectedBlock);
//           }
//       return selectedBlock
// };

Block.prototype.move = function (code) {
    console.log(code)
    switch (code) {
      case 37:
        this.x-=4;
        return this;
        break;
      case 38:
        this.y-=4;
        return this;
        break;
      case 39:
        this.x+=4;
        return this;
        break;
      case 40:
        this.y+=4;
        return this;
        break;
    };
};

module.exports = Block;
