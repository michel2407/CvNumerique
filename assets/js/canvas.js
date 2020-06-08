var canvas = document.querySelector('#line');
var context = canvas.getContext('2d')

context.strokeStyle = 'white';
context.beginPath();
context.moveTo(50, 0);
context.lineTo(50, 60);
context.stroke();
context.closePath();
