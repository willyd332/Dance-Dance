window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40, 68, 65, 87, 83].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
});

let rightKey = "up";
let leftKey = "up";
let upKey = "up";
let downKey = "up";

let rightKey2 = "up";
let leftKey2 = "up";
let upKey2 = "up";
let downKey2 = "up";

const rightKeyListener = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 39){
      console.log('w');
      if (rightKey === "up"){
    rightKey = "down";
  }
    setTimeout(function(){
      if (rightKey === "down"){
        rightKey = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 39){
    rightKey = "up";
  }
  })
}
const leftKeyListener = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 37){
      if (leftKey === "up"){
    leftKey = "down";
  }
    setTimeout(function(){
      if (leftKey === "down"){
        leftKey = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 37){
    leftKey = "up";
  }
  })
}
const upKeyListener = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 38){
      if (upKey === "up"){
    upKey = "down";
  }
    setTimeout(function(){
      if (upKey === "down"){
        upKey = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 38){
    upKey = "up";
  }
  })
}
const downKeyListener = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 40){
      if (downKey === "up"){
    downKey = "down";
  }
    setTimeout(function(){
      if (downKey === "down"){
        downKey = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 40){
    downKey = "up";
  }
  })
}

const rightKeyListener2 = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 68){
      if (rightKey2 === "up"){
    rightKey2 = "down";
  }
    setTimeout(function(){
      if (rightKey2 === "down"){
        rightKey2 = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 68){
    rightKey2 = "up";
  }
  })
}
const leftKeyListener2 = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 65){
      if (leftKey2 === "up"){
    leftKey2 = "down";
  }
    setTimeout(function(){
      if (leftKey2 === "down"){
        leftKey2 = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 65){
    leftKey2 = "up";
  }
  })
}
const upKeyListener2 = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 87){
      if (upKey2 === "up"){
    upKey2 = "down";
  }
    setTimeout(function(){
      if (upKey2 === "down"){
        upKey2 = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 87){
    upKey2 = "up";
  }
  })
}
const downKeyListener2 = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 83){
      if (downKey2 === "up"){
    downKey2 = "down";
  }
    setTimeout(function(){
      if (downKey2 === "down"){
        downKey2 = "expired";
      }
    }, 50)
  }
  })
  $('body').keyup(function(e){
      if (e.keyCode === 83){
    downKey2 = "up";
  }
  })
}

const restartListener = () => {
  $('.restart').on('click', function(){
    game.restartSong()
  })
}

const liveGameListeners = () => {
  rightKeyListener();
  downKeyListener();
  upKeyListener();
  leftKeyListener();
  rightKeyListener2();
  downKeyListener2();
  upKeyListener2();
  leftKeyListener2();
  restartListener();
}

let difficulty = null;
let playerAmount = 0;


$('main-menu').on('click', function(){
  window.location.reload()
})


/*
bpm, song, length, arrowInitY, difficulty, waitTime

RASPUTIN:
var game = new Game(127,'rasputin.mp3',234000,-50,'medium', 27)

CRAB RAVE:
var game = new Game(125,'crabrave.mp3',124000,-10,'medium', 27)

SUPER EUROBEAT:
var game = new Game(154,'SUPEREUROBEAT.mp3', 96500, -60, difficulty, 0)

*/
