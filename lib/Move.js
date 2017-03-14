function Move (context) {
  this.x = context.x;
  this.y = context.y
}

document.addEventListener('keydown', function (key) {
  event.preventDefault();
  var code = key.keyCode;
  console.log(code)
  if (code === 37 ){
    this.x -= 4;
  };
  if (code === 38) {
    this.y -= 4;
  };
  if (code === 39) {
    this.x += 4;
  };
  if (code === 40) {
    this.y += 4;
  };
});

module.exports = Move;
