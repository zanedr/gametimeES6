var Bike = require('./Bikes.js');

var canvas = document.getElementById('gameGrid');
var context = canvas.getContext('2d');

var startAnimation;
var counter = 3;

document.querySelector('#start-game').addEventListener('click', function() {
  countdown();
});

function countdown() {
  switch (counter) {
    case 3:
      hideTitleScreen('start-button');
      hideTitleScreen('title-screen');
      displayCountdown(3);
      counter--;
      setTimeout(countdown, 1000)
      break;
    case 2:
      displayCountdown(2);
      counter--;
      setTimeout(countdown, 1000)
      break;
    case 1:
      displayCountdown(1);
      counter--;
      setTimeout(countdown, 1000)
      break;
    case 0:
      hideTitleScreen('countdown');
      var startAnimation = setTimeout(animate, 100);
      gameGrid();
      break;
  }
}

function displayCountdown(counter) {
  document.getElementById('countdown').innerText = counter;
}

function hideTitleScreen(piece) {
  switch (piece) {
    case 'start-button':
      document.getElementById('start-game').style.display = 'none';
      break;
    case 'title-screen':
      document.getElementById('title-screen').style.display = 'none';
      break;
    case 'countdown':
      document.getElementById('countdown').style.display = 'none';
      break;
  }
}

function gameGrid () {
  context.fillStyle = "rgb(29,53,65)";
  context.fillRect(0, 0, 1000, 550);
  for (let i = 0; i < 1000; i += 50) {
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, 550);
    context.moveTo(0, i);
    context.lineTo(1000, i);
    context.strokeStyle = "rgb(230,222,235)";
    context.stroke();
  };
};

var bikeOne = new Bike(500, 275, 10, 'rgb(223,116,12)');
var selectedBike = bikeOne;

document.addEventListener('keydown', function(key) {
  let code = key.keyCode;
  bikeOne.move(code);
  console.log(bikeOne.direction)
});

function movement() {
  console.log('test');
  switch (bikeOne.direction) {
    case 'left':
      bikeOne.locationX -= bikeOne.size;
      break;
    case 'up':
      bikeOne.locationY -= bikeOne.size;
      break;
    case 'right':
      bikeOne.locationX += bikeOne.size;
      break;
    case 'down':
      bikeOne.locationY += bikeOne.size;
      break;
  }
}

function animate() {
  bikeOne.draw(context);
  movement();
  console.log('animate');
  setTimeout(animate, 100)
}

gameGrid();
