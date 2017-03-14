let Bikes = (color,size,location,direction) => {
  this.color = color
  this.size = size
  this.location = location
  this.direction = direction
  // this.controls = controls()
  // this.collision = collision()
}

Bikes.prototype.controls = (p1,p2) => {
  var dx = 4
  var dy = 4
  document.addEventListener('keypress', (key) => {
    event.preventDefault()

    var code = key.keyCode

    if (p1) {
      switch(code) {
        case 37: this.x -= dx; return this; break;
        case 38: this.y -= dy; return this; break;
        case 39: this.x += dx; return this; break;
        case 40: this.y += dy; return this; break;
      }
    }
    if (p2) {
      switch(code) {
        case 65: this.x -= dx; return this; break;
        case 87: this.y -= dy; return this; break;
        case 68: this.x += dx; return this; break;
        case 83: this.y += dy; return this; break;
      }
    }
  })
}


// Bikes.prototype.collision = () => {
//
// }

module.exports = Bikes
