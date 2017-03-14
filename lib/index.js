var Block = require ('./Block.js');


var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var x = 50;
var y = 50;
var firstBlock = new Block (50, 50, 50, 50, 'rgba(50, 50, 100, .5)');
var secondBlock = new Block (100, 200, 50, 50, 'rgba(50, 50, 100, .5)');

var blockArray = [firstBlock,
  secondBlock];

var selectedBlock;

// context.fillStyle = 'rgba(50, 50, 100, .5)';


canvas.addEventListener('click', function (click) {
  var x = click.pageX,
      y = click.pageY;
  // blockArray.forEach(function (block) {
    // block.clicked(x, y);
    console.log( selectedBlock);
    });
  console.log(x, y);
  console.log(firstBlock.x, firstBlock.y)
  if (x > firstBlock.x &&
      x < firstBlock.x + 50 &&
      y > firstBlock.y &&
      y < firstBlock.y + 50) {
        selectedBlock = firstBlock;
        console.log(selectedBlock);
      }
    if (x > secondBlock.x &&
        x < secondBlock.x + 50 &&
        y > secondBlock.y &&
        y < secondBlock.y + 50) {
            selectedBlock = secondBlock;
            console.log(selectedBlock);
          }
  return selectedBlock;
})

document.addEventListener('keydown', function (key) {
  event.preventDefault();
  var code = key.keyCode;
  selectedBlock.move(code);
});

requestAnimationFrame(function gameLoop() {
  context.clearRect(0 ,0, canvas.height, canvas.width);
  blockArray.forEach( function(block) {
    block.draw(context);
  });
  // firstBlock.draw(context);
  // context.fillRect(x, y, 50, 50);
  // if (y < 250){
  //   y++
  //   x++
  // }
  requestAnimationFrame(gameLoop);
});
