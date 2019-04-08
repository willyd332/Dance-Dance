const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');
const canvas2 = document.getElementById('my-canvas2');
const ctx2 = canvas2.getContext('2d');

const rightEmpty = document.getElementById("right-arrow-E");
const leftEmpty = document.getElementById("left-arrow-E");
const upEmpty = document.getElementById("up-arrow-E");
const downEmpty = document.getElementById("down-arrow-E");

const rightEmptyx = document.getElementById("right-arrow-x");
const leftEmptyx = document.getElementById("left-arrow-x");
const upEmptyx = document.getElementById("up-arrow-x");
const downEmptyx = document.getElementById("down-arrow-x");

let rightA = rightEmpty;
let leftA = leftEmpty;
let upA = upEmpty;
let downA = downEmpty

let rightA2 = rightEmpty;
let leftA2 = leftEmpty;
let upA2 = upEmpty;
let downA2 = downEmpty

const arrowClicks = () => {

if (rightKey === "down"){
  rightA = rightEmptyx;
} else if (rightKey === 'up') {
  rightA = rightEmpty;
}

if (leftKey === "down"){
  leftA = leftEmptyx;
} else if (leftKey === 'up') {
  leftA = leftEmpty;
}

if (upKey === "down"){
  upA = upEmptyx;
} else if(upKey === "up"){
  upA = upEmpty;
}

if (downKey === "down"){
  downA = downEmptyx;
} else if (downKey === 'up') {
  downA = downEmpty;
}

if (rightKey2 === "down"){
  rightA2 = rightEmptyx;
} else if (rightKey2 === 'up') {
  rightA2 = rightEmpty;
}

if (leftKey2 === "down"){
  leftA2 = leftEmptyx;
} else if (leftKey2 === 'up') {
  leftA2 = leftEmpty;
}

if (upKey2 === "down"){
  upA2 = upEmptyx;
} else if(upKey2 === "up"){
  upA2 = upEmpty;
}

if (downKey2 === "down"){
  downA2 = downEmptyx;
} else if (downKey2 === 'up') {
  downA2 = downEmpty;
}

}

const makeBox = () => {
  ctx.drawImage(rightA, (canvas.width * .75 + canvas.width / 16), 620, 70, 70);
  ctx.drawImage(leftA, (0 + canvas.width / 16), 620, 70, 70);
  ctx.drawImage(upA, (canvas.width / 2 + canvas.width / 16), 620, 70, 70);
  ctx.drawImage(downA, (canvas.width / 4 + canvas.width / 16), 620, 70, 70);

  ctx2.drawImage(rightA2, (canvas.width * .75 + canvas.width / 16), 620, 70, 70);
  ctx2.drawImage(leftA2, (0 + canvas.width / 16), 620, 70, 70);
  ctx2.drawImage(upA2, (canvas.width / 2 + canvas.width / 16), 620, 70, 70);
  ctx2.drawImage(downA2, (canvas.width / 4 + canvas.width / 16), 620, 70, 70);
  // ctx.beginPath()
  // ctx.rect(0, 620, canvas.width, 50);
  // ctx.fillStyle = 'black';
  // ctx.fill();
  //
  // ctx2.beginPath()
  // ctx2.rect(0, 620, canvas.width, 50);
  // ctx2.fillStyle = 'black';
  // ctx2.fill();
  // at some point have it pulsate to the beat
}
makeBox();

const updateScore = () => {
  $('.score1').text(window.game.score)
  $('.score2').text(window.game.score2)
}

const animateEverything = () => {
  moveArrows();
  animateArrows();
  makeBox();
  arrowClicks();
}
const animateEverythingElse = () => {
  makeBox();
  arrowClicks();
}

const moveArrows = () => {
  if (window.game.easyArray[0]) {
    window.game.easyArray.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.easyArray2[0]) {
    window.game.easyArray2.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.mediumArray[0]) {
    window.game.mediumArray.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.mediumArray2[0]) {
    window.game.mediumArray2.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.hardArray[0]) {
    window.game.hardArray.forEach(function(i) {
      i.move()
    })
  }
  if (window.game.hardArray2[0]) {
    window.game.hardArray2.forEach(function(i) {
      i.move()
    })
  }
}

const animateArrows = () => {
  if (window.game.easyArray[0]) {
    window.game.easyArray.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.easyArray2[0]) {
    window.game.easyArray2.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.mediumArray[0]) {
    window.game.mediumArray.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.mediumArray2[0]) {
    window.game.mediumArray2.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.hardArray[0]) {
    window.game.hardArray.forEach(function(i) {
      i.draw()
    })
  }
  if (window.game.hardArray2[0]) {
    window.game.hardArray2.forEach(function(i) {
      i.draw()
    })
  }
  window.game.check();
}

let animationLoop = null;
let animationLoop2 = null;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  animateEverything()
  animationLoop = requestAnimationFrame(animate);
}

const animate2 = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  animateEverythingElse();
  animationLoop2 = requestAnimationFrame(animate2);
}
