//if the bike hits a wall the bike will reappear on the opposite wall traveling in the same direction and at the same speed.

var Bike = require('./Bikes')

function TravelTracker(Bike) {
  let coordinateArray = []
  console.log(coordinateArray, 'coordinateArray')

  coordinateArray = coordinateArray.map(function(coordinate) {
  if(coordinate.x !== Bike.locationX || coordinate.y !== Bike.locationY) {
    return {x:Bike.locationX, y:Bike.locationY}
  } else {
    gameEnd()
    lifeStock()
    }
  })

//
// TravelTracker.prototype.hitWall = function() {
//   document.addEventListener()
//   if(this.curLocation === canvas.width-10) {
//     Bike.draw(context)
//   }
}

module.exports = TravelTracker
