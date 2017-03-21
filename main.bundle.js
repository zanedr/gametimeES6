/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const canvas = document.getElementById('gameGrid');
	const context = canvas.getContext('2d');
	import Bike from './bikes.js';

	let stopAnimation = __webpack_require__(1);
	let coordinateArray;

	let animationTimer;
	let framerate;
	let countdownTimer;

	let numberOfPlayers;
	let playerTwoTimer;

	let bikeOne = new Bike(950, 270, 10, 'rgb(223,116,12)', 'left', 3);
	let bikeTwo = new Bike(50, 270, 10, 'rgb(34,218,222)', 'right', 3);
	let counter;

	function beginning() {
	  coordinateArray = [];
	  document.querySelector('#start-game').addEventListener('click', function () {
	    counter = 3;
	    stopAnimation = false;
	    countdown();
	  });
	}

	function nextRound() {
	  document.getElementById('next-round').style.display = 'block';
	  document.getElementById('bike-one-lives').innerText = bikeOne.lives;
	  document.getElementById('bike-two-lives').innerText = bikeTwo.lives;
	  document.getElementById('next-round-button').addEventListener('click', function () {
	    coordinateArray = [];
	    goAgain();
	  });
	}

	function goAgain() {
	  document.getElementById('next-round').style.display = '';
	  document.getElementById('countdown').style.display = '';
	  stopAnimation = false;
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  gameGrid();
	  counter = 3;
	  countdown();
	}

	function resetBikes() {
	  bikeOne.locationX = 950;
	  bikeOne.locationY = 270;
	  bikeOne.direction = "left";
	  bikeTwo.locationX = 50;
	  bikeTwo.locationY = 270;
	  bikeTwo.direction = "right";
	  if (bikeOne.lives === 0 || bikeTwo.lives === 0) {
	    bikeOne.lives = 3;
	    bikeTwo.lives = 3;
	  }
	}

	function countdown() {
	  switch (counter) {
	    case 3:
	      resetBikes();
	      animationTimer = document.querySelector('input[name="speed"]:checked').value;
	      numberOfPlayers = document.querySelector('input[name="players"]:checked').value;
	      hideTitleScreen('start-button');
	      hideTitleScreen('title-screen');
	      document.getElementById('countdown').style.display = '';
	      displayCountdown(3);
	      counter--;
	      countdownTimer = setTimeout(countdown, 1000);
	      break;
	    case 2:
	      displayCountdown(2);
	      counter--;
	      setTimeout(countdown, 1000);
	      break;
	    case 1:
	      displayCountdown(1);
	      counter--;
	      setTimeout(countdown, 1000);
	      break;
	    case 0:
	      hideTitleScreen('countdown');
	      if (numberOfPlayers == 1) {
	        playerTwoAI();
	      }
	      animate();
	      break;
	  }
	}

	function displayCountdown(counter) {
	  clearTimeout(countdownTimer);
	  document.getElementById('countdown').innerText = counter;
	}

	function hideTitleScreen(piece) {
	  switch (piece) {
	    case 'start-button':
	      document.getElementById('start-game').style.display = 'none';break;
	    case 'title-screen':
	      document.getElementById('title-screen').style.display = 'none';break;
	    case 'countdown':
	      document.getElementById('countdown').style.display = 'none';break;
	  }
	}

	function gameGrid() {
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
	  }
	}

	document.addEventListener('keydown', function (key) {
	  let directionCode = key.keyCode;

	  switch (directionCode) {
	    case 37:
	      bikeOne.move('left');break;
	    case 38:
	      bikeOne.move('up');break;
	    case 39:
	      bikeOne.move('right');break;
	    case 40:
	      bikeOne.move('down');break;
	    case 65:
	      bikeTwo.move('left');break;
	    case 87:
	      bikeTwo.move('up');break;
	    case 68:
	      bikeTwo.move('right');break;
	    case 83:
	      bikeTwo.move('down');break;
	  }
	});

	function movementBikeOne() {
	  switch (bikeOne.direction) {
	    case 'left':
	      bikeOne.locationX -= bikeOne.size;break;
	    case 'up':
	      bikeOne.locationY -= bikeOne.size;break;
	    case 'right':
	      bikeOne.locationX += bikeOne.size;break;
	    case 'down':
	      bikeOne.locationY += bikeOne.size;break;
	  }
	}

	function movementBikeTwo() {
	  switch (bikeTwo.direction) {
	    case 'left':
	      bikeTwo.locationX -= bikeTwo.size;break;
	    case 'up':
	      bikeTwo.locationY -= bikeTwo.size;break;
	    case 'right':
	      bikeTwo.locationX += bikeTwo.size;break;
	    case 'down':
	      bikeTwo.locationY += bikeTwo.size;break;
	  }
	}

	function victoryCheck() {
	  if (bikeOne.lives === 0 && bikeTwo.lives === 0) {
	    document.getElementById('victory-screen').style.display = 'block';
	    document.getElementById('final-score').innerText = "Tie! How'd you manage that?";
	    resetAll();
	    return;
	  } else if (bikeOne.lives === 0) {
	    document.getElementById('victory-screen').style.display = 'block';
	    document.getElementById('final-score').innerText = "Blue player wins!";
	    resetAll();
	    return;
	  } else if (bikeTwo.lives === 0) {
	    document.getElementById('victory-screen').style.display = 'block';
	    document.getElementById('final-score').innerText = "Orange player wins!";
	    resetAll();
	    return;
	  } else {
	    nextRound();
	    return;
	  }
	}

	function resetAll() {
	  context.clearRect(0, 0, canvas.width, canvas.height);
	  coordinateArray = [];
	  // gameGridBorder();
	  gameGrid();
	  resetBikes();
	  document.querySelector('#new-game').addEventListener('click', function () {
	    document.getElementById('victory-screen').style.display = '';
	    document.getElementById('next-round').style.display = '';
	    document.getElementById('title-screen').style.display = '';
	    document.getElementById('start-game').style.display = '';
	    beginning();
	    return;
	  });
	  return;
	}

	function animate() {
	  clearTimeout(framerate);
	  bikeOne.draw(context);
	  bikeTwo.draw(context);
	  bikeOne.travelTracker(coordinateArray);
	  bikeTwo.travelTracker(coordinateArray);
	  movementBikeOne();
	  movementBikeTwo();
	  stopAnimation = bikeOne.youDie(coordinateArray, stopAnimation);
	  stopAnimation = bikeTwo.youDie(coordinateArray, stopAnimation);
	  if (stopAnimation) {
	    victoryCheck();
	    return;
	  } else {
	    framerate = setTimeout(animate, animationTimer);
	    return;
	  }
	}

	function playerTwoAI() {
	  clearTimeout(playerTwoTimer);
	  coordinateArray.find(function (locale) {
	    if (bikeTwo.direction == 'up' && bikeTwo.locationY < 40 || bikeTwo.direction == 'down' && bikeTwo.locationY > 510) {
	      evaluateVertical();
	    }

	    if (bikeTwo.direction == 'left' && bikeTwo.locationX < 40 || bikeTwo.direction == 'right' && bikeTwo.locationX > 960) {
	      evaluateHorizontal();
	    }

	    if (bikeTwo.direction == 'left' && (locale === bikeTwo.locationX - 30 + "," + bikeTwo.locationY || locale === bikeTwo.locationX - 20 + "," + bikeTwo.locationY || locale === bikeTwo.locationX - 10 + "," + bikeTwo.locationY)) {
	      evaluateHorizontal();
	      console.log('left trigger');
	    }

	    if (bikeTwo.direction == 'right' && (locale === bikeTwo.locationX + 30 + "," + bikeTwo.locationY || locale === bikeTwo.locationX + 20 + "," + bikeTwo.locationY || locale === bikeTwo.locationX + 10 + "," + bikeTwo.locationY)) {
	      evaluateHorizontal();
	      console.log('right trigger');
	    }

	    if (bikeTwo.direction == 'up' && (locale === bikeTwo.locationX + "," + (bikeTwo.locationY - 30) || locale === bikeTwo.locationX + "," + (bikeTwo.locationY - 20) || locale === bikeTwo.locationX + "," + (bikeTwo.locationY - 10))) {
	      evaluateVertical();
	      console.log('up trigger');
	    }

	    if (bikeTwo.direction == 'down' && (locale === bikeTwo.locationX + "," + (bikeTwo.locationY + 30) || locale === bikeTwo.locationX + "," + (bikeTwo.locationY + 20) || locale === bikeTwo.locationX + "," + (bikeTwo.locationY + 10))) {
	      evaluateVertical();
	      console.log('down trigger');
	    }
	  });

	  if (stopAnimation) {
	    return;
	  }
	  playerTwoTimer = setTimeout(playerTwoAI, animationTimer);
	  return;
	}

	function evaluateHorizontal() {
	  coordinateArray.find(function (locale) {
	    if (locale === bikeTwo.locationX + "," + (bikeTwo.locationY + 20) || locale === bikeTwo.locationX + "," + (bikeTwo.locationY + 10)) {
	      console.log('response up');
	      bikeTwo.direction = 'up';
	      return bikeTwo.direction;
	    } else if (locale === bikeTwo.locationX + "," + (bikeTwo.locationY - 20) || locale === bikeTwo.locationX + "," + (bikeTwo.locationY - 10)) {
	      console.log('response down');
	      bikeTwo.direction = "down";
	      return bikeTwo.direction;
	    } else if (bikeTwo.locationX < 50 || bikeTwo.locationX > 950) {
	      let newDirection = Math.round(Math.random());

	      switch (newDirection) {
	        case 0:
	          bikeTwo.direction = "up";
	          return bikeTwo.direction;
	        case 1:
	          bikeTwo.direction = "down";
	          return bikeTwo.direction;
	      }
	    } else {
	      let newDirection = Math.round(Math.random());

	      console.log('random horizontal');
	      switch (newDirection) {
	        case 0:
	          bikeTwo.direction = "up";
	          return bikeTwo.direction;
	        case 1:
	          bikeTwo.direction = "down";
	          return bikeTwo.direction;
	      }
	    }
	  });
	}

	function evaluateVertical() {
	  coordinateArray.find(function (locale) {
	    if (locale === bikeTwo.locationX + 20 + "," + bikeTwo.locationY || locale === bikeTwo.locationX + 10 + "," + bikeTwo.locationY) {
	      console.log('response left');
	      bikeTwo.direction = 'left';
	      return bikeTwo.direction;
	    } else if (locale === bikeTwo.locationX - 20 + "," + bikeTwo.locationY || locale === bikeTwo.locationX - 10 + "," + bikeTwo.locationY) {
	      console.log('response right');
	      bikeTwo.direction = "right";
	      return bikeTwo.direction;
	    } else if (bikeTwo.locationY <= 50 || bikeTwo.locationY >= 500) {
	      let newDirection = Math.round(Math.random());

	      console.log('random vertical');
	      switch (newDirection) {
	        case 0:
	          bikeTwo.direction = "right";
	          return bikeTwo.direction;
	        case 1:
	          bikeTwo.direction = "left";
	          return bikeTwo.direction;
	      }
	    } else {
	      let newDirection = Math.round(Math.random());

	      console.log('random vertical');
	      switch (newDirection) {
	        case 0:
	          bikeTwo.direction = "right";
	          return bikeTwo.direction;
	        case 1:
	          bikeTwo.direction = "left";
	          return bikeTwo.direction;
	      }
	    }
	  });
	}

	gameGrid();
	beginning();

/***/ },
/* 1 */
/***/ function(module, exports) {

	export default class Bike {
	  constructor(locationX, locationY, size, color, direction, lives) {
	    this.locationX = locationX;
	    this.locationY = locationY;
	    this.size = size;
	    this.color = color;
	    this.direction = direction;
	    this.lives = lives || 3;
	  }

	  draw(context) {
	    context.fillStyle = this.color;
	    context.fillRect(this.locationX, this.locationY, this.size, this.size);
	    return this;
	  }

	  move(direction) {
	    switch (direction) {
	      case 'left':
	        this.direction = 'left';
	        break;
	      case 'up':
	        this.direction = 'up';
	        break;
	      case 'right':
	        this.direction = 'right';
	        break;
	      case 'down':
	        this.direction = 'down';
	        break;
	    }
	  }

	  travelTracker(coordinateArray) {
	    coordinateArray.push(this.locationX + "," + this.locationY);
	  }

	  youDie(coordinateArray, stopAnimation) {
	    let hereIAm = this.locationX + "," + this.locationY;
	    let player = this;

	    if (this.locationX === -10 || this.locationX === 1000 || this.locationY === -10 || this.locationY === 550) {
	      this.lives--;
	      stopAnimation = true;
	    }
	    coordinateArray.find(function (locale) {
	      if (locale === hereIAm) {
	        player.lives--;
	        stopAnimation = true;
	      }
	    });
	    return stopAnimation;
	  }
	}

/***/ }
/******/ ]);