var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var ch = canvas.height;
var cw = canvas.width;

for (var i = 0; i <= cw; i += 3){
  context.beginPath()
  context.moveTo(i, ch/2);
  if (i%2 === 0) {
    context.lineTo(cw/2, 0);
  } else if (i%2 === 1) {
    context.lineTo(cw/2, ch);
  }
  context.strokeStyle = 'rgba(246, 130, 130, 1)';
  context.stroke();
}
