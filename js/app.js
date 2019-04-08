window.addEventListener("keydown", function(e) {
  if ([32, 37, 38, 39, 40, 68, 65, 87, 83].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
});

// mouse over

window.audioCrab = new Audio('crabrave.mp3'); // song should be filepath
window.audioCrab.volume = .1;
$('#crabrave').mouseenter(function() {
  window.audioCrab.play();
})
window.audioRuss = new Audio('Miracles.mp3'); // song should be filepath
window.audioRuss.volume = .4;
$('#miracle').mouseenter(function() {
  window.audioRuss.play();
})
window.audioEuro = new Audio('SUPEREUROBEAT.mp3'); // song should be filepath
window.audioEuro.volume = .2;
$('#eurobeat').mouseenter(function() {
  window.audioEuro.play();
})

// mouse exit

$('#crabrave').mouseout(function() {
  window.audioCrab.pause();
})
$('#miracle').mouseout(function() {
  window.audioRuss.pause();
})
$('#eurobeat').mouseout(function() {
  window.audioEuro.pause();
})




let rightKey = "up";
let leftKey = "up";
let upKey = "up";
let downKey = "up";

let rightKey2 = "up";
let leftKey2 = "up";
let upKey2 = "up";
let downKey2 = "up";

const rightKeyListener = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 39) {
      if (rightKey === "up") {
        rightKey = "down";
      }
      setTimeout(function() {
        if (rightKey === "down") {
          rightKey = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 39) {
      rightKey = "up";
    }
  })
}
const leftKeyListener = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 37) {
      if (leftKey === "up") {
        leftKey = "down";
      }
      setTimeout(function() {
        if (leftKey === "down") {
          leftKey = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 37) {
      leftKey = "up";
    }
  })
}
const upKeyListener = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 38) {
      if (upKey === "up") {
        upKey = "down";
      }
      setTimeout(function() {
        if (upKey === "down") {
          upKey = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 38) {
      upKey = "up";
    }
  })
}
const downKeyListener = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 40) {
      if (downKey === "up") {
        downKey = "down";
      }
      setTimeout(function() {
        if (downKey === "down") {
          downKey = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 40) {
      downKey = "up";
    }
  })
}

const rightKeyListener2 = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 68) {
      if (rightKey2 === "up") {
        rightKey2 = "down";
      }
      setTimeout(function() {
        if (rightKey2 === "down") {
          rightKey2 = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 68) {
      rightKey2 = "up";
    }
  })
}
const leftKeyListener2 = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 65) {
      if (leftKey2 === "up") {
        leftKey2 = "down";
      }
      setTimeout(function() {
        if (leftKey2 === "down") {
          leftKey2 = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 65) {
      leftKey2 = "up";
    }
  })
}
const upKeyListener2 = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 87) {
      if (upKey2 === "up") {
        upKey2 = "down";
      }
      setTimeout(function() {
        if (upKey2 === "down") {
          upKey2 = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 87) {
      upKey2 = "up";
    }
  })
}
const downKeyListener2 = () => {
  $('body').keydown(function(e) {
    if (e.keyCode === 83) {
      if (downKey2 === "up") {
        downKey2 = "down";
      }
      setTimeout(function() {
        if (downKey2 === "down") {
          downKey2 = "expired";
        }
      }, 50)
    }
  })
  $('body').keyup(function(e) {
    if (e.keyCode === 83) {
      downKey2 = "up";
    }
  })
}

const restartListener = () => {
  $('.restart').on('click', function() {
    window.game.restartSong()
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

window.scratchaudio = new Audio('buttonscratch.mp3');

$('button').on('click', function(){
  window.scratchaudio.volume = .5;
  window.scratchaudio.play();
})

$('.main-menu').on('click', function() {
  window.location.reload()
})

$('.faster').on('click', function() {
  window.game.restartSongFaster();
})

$('#start-game').on('click', function(){
  window.backaudio = new Audio('backgroundmusic.mp3'); // song should be filepath
  window.backaudio.volume = .5;
  window.backaudio.play();

  window.titleaudio = new Audio('dancedancerevolution.mp3'); // song should be filepath
  window.titleaudio.volume = .5;
  window.titleaudio.play();

  $('.title').css('display', 'none')
  $('.player-selection').css('display', 'inline-block')
})


$('#one-player').on('click', function() {
  playerAmount = 1;
  $('.player-selection').css('display', 'none')
  $('.difficulty-selection').css('display', 'inline-block')
})
$('#two-player').on('click', function() {
  playerAmount = 2;
  $('.player-selection').css('display', 'none')
  $('.difficulty-selection').css('display', 'inline-block')
})

$('.difficulty').on('click', function(){
  window.bestshot = new Audio('bestshot.mp3'); // song should be filepath
  window.bestshot.volume = .6;
  window.bestshot.play();
})

$('#easy').on('click', function() {
  difficulty = 'easy';
  $('.difficulty-selection').css('display', 'none')
  $('.song-selection').css('display', 'inline-block')
  window.backaudio.pause();
})
$('#medium').on('click', function() {
  difficulty = 'medium';
  $('.difficulty-selection').css('display', 'none')
  $('.song-selection').css('display', 'inline-block')
  window.backaudio.pause();
})
$('#hard').on('click', function() {
  difficulty = 'hard';
  $('.difficulty-selection').css('display', 'none')
  $('.song-selection').css('display', 'inline-block')
  window.backaudio.pause();
})
$('#back-to-player-selection').on('click', function() {
  $('.difficulty-selection').css('display', 'none')
  $('.player-selection').css('display', 'inline-block')
})

$('#miracle').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(126, 'Miracles.mp3', 200000, -75, difficulty, 17, 8);
})
$('#crabrave').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(125, 'crabrave.mp3', 124000, -20, difficulty, 27, 5);
})
$('#eurobeat').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(154, 'SUPEREUROBEAT.mp3', 96500, -60, difficulty, 0, 10);
})
$('#back-to-difficulty-selection').on('click', function() {
  $('.song-selection').css('display', 'none')
  $('.difficulty-selection').css('display', 'inline-block')
  window.backaudio.play();
})
$('.song').on('click', function(){
  window.goodsongaudio = new Audio('okay.mp3'); // song should be filepath
  window.goodsongaudio.volume = .7;
  window.goodsongaudio.play();
})

liveGameListeners();

/*
bpm, song, length, arrowInitY, difficulty, waitTime

Miracles:

CRAB RAVE:
var game = new Game(125,'crabrave.mp3',124000,-10,'medium', 27)

SUPER EUROBEAT:
var game = new Game(154,'SUPEREUROBEAT.mp3', 96500, -60, 'medium', 0)

*/
