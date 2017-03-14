var bikes = require ('./bikes.js');

var canvas = document.getElementById('gameGrid');
var context = canvas.getContext('2d');

function gameGrid () {
  context.fillStyle = "rgb(29,53,65)";
  context.fillRect(0, 0, 1000, 550);
  for (let i = 0, i < 1000, i += 50) {
    // context.lineWidth = 2;
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, 550);
    context.moveTo(0, i);
    context.lineTo(1000, i);
    context.strokeStyle = "rgb(230,222,235)";
    context.stroke();
  }
};

gameGrid()
