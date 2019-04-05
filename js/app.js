window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
});

let rightKey = "up";
let leftKey = "up";
let upKey = "up";
let downKey = "up";

const rightKeyListener = () => {
  $('body').keydown(function(e){
    if (e.keyCode === 39){
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

const liveGameListeners = () => {
  rightKeyListener();
  downKeyListener();
  upKeyListener();
  leftKeyListener();
}
