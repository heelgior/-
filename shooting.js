var xInput = document.getElementById('x');
var yInput = document.getElementById('y');
var c = document.getElementById('g');
xInput.addEventListener('change', xHandler);
yInput.addEventListener('change', yHandler);
var targetSize = 150;
var x = 0;
var y = 0;
var shootButton = document.getElementById('shoot');
shootButton.addEventListener('click', shootButtonHandler);
var points = 0;
var shots = 0;
var pointsElement = document.getElementById('points');
var shotsElement = document.getElementById('shots');

var shootRandom = document.getElementById('random');
shootRandom.addEventListener('click', randomShootHandler);


function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

function randomShootHandler() {
    x = randomInteger(-c.width/2, c.width/2);
    y = randomInteger(-c.height/2, c.height/2);
    shoot();
}

function xHandler() {
  x = xInput.value;
}
function yHandler() {
  y = yInput.value;
}

function shootButtonHandler() {
    shoot();
}

function shoot() {
    points +=hitTarget(x, y);
    shots += 1;
    shotsElement.innerHTML = 'Выстрелы: ' + shots;
    pointsElement.innerHTML = 'Очки: ' + points;
    console.log(points);
}

function hitTarget(x, y) {
    if(x < targetSize/2 || y < targetSize/2) {
        return hitCenter(x, y) || 
        hitStarTraget(x, y) || 
        hitRhombusTarget(x, y) || 
        hitCircleTarget(x, y) || 
        hitSquareTarget(x, y);
    }
    return 0;
}
function hitCenter(x, y) {
    return (x==0 && y==0) ? 10 : 0;
}
function hitSquareTarget(x, y) {
    return ((Math.abs(x) <= targetSize/2) && (Math.abs(y) <= targetSize/2)) ? 1 : 0;
}
function hitRhombusTarget(x, y) {
    return ((Math.abs(x) + Math.abs(y)) <= targetSize/2) ? 3 : 0;
}
function hitCircleTarget(x, y) {
    return (((x**2 + y**2) <= (targetSize/2)**2)) ? 2 : 0;
}
function hitStarTraget(x, y) {
    return((((x - targetSize/2) ** 2 + (y - targetSize/2) ** 2) >= (targetSize/2) ** 2) &&
    (((x - targetSize/2) ** 2 + (y + targetSize/2) ** 2) >= (targetSize/2) ** 2) &&
    (((x + targetSize/2) ** 2 + (y - targetSize/2) ** 2) >= (targetSize/2) ** 2) &&
    (((x + targetSize/2) ** 2 + (y + targetSize/2) ** 2) >= (targetSize/2) ** 2)) ? 4 : 0;
}


const targetSquare = new TragetSquare();
const targetCircle = new TargetCircle();
const targetRhombus = new TargetRhombus;
const targetStar = new TargetStar();
const targets = [targetSquare, targetCircle, targetStar, targetRhombus];
