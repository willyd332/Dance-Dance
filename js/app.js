window.addEventListener("keydown", function(e) {
  if ([32, 37, 38, 39, 40, 68, 65, 87, 83].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
});

setTimeout(function() {
  $('#loading').remove();
  $('#start-game').css('display', 'block')
}, 3500)


// music previews

window.audioCrab = new Audio('audio/MOONLIGHTSHADOW.mp3'); // song should be filepath
window.audioCrab.volume = .3;
$('#MOONLIGHTSHADOW').mouseenter(function() {
  window.audioCrab.play();
})
window.audioRuss = new Audio('audio/Miracles.mp3'); // song should be filepath
window.audioRuss.volume = .3;
$('#miracle').mouseenter(function() {
  window.audioRuss.play();
})
window.audioEuro = new Audio('audio/SUPEREUROBEAT.mp3'); // song should be filepath
window.audioEuro.volume = .3;
$('#eurobeat').mouseenter(function() {
  window.audioEuro.play();
})
window.audioSky = new Audio('audio/ToTheSky.mp3'); // song should be filepath
window.audioSky.volume = .3;
$('#tothesky').mouseenter(function() {
  window.audioSky.play();
})
window.audioDragon = new Audio('audio/DragosteaDinTei.mp3'); // song should be filepath
window.audioDragon.volume = .3;
$('#dragostea').mouseenter(function() {
  window.audioDragon.play();
})
window.audioDance = new Audio('audio/dancing.mp3'); // song should be filepath
window.audioDance.volume = .3;
$('#dancing').mouseenter(function() {
  window.audioDance.play();
})
window.audioGang = new Audio('audio/GangstaGangsta.mp3'); // song should be filepath
window.audioGang.volume = .3;
$('#gangsta').mouseenter(function() {
  window.audioGang.play();
})
window.audioLove = new Audio('audio/LoveisinDanger.mp3'); // song should be filepath
window.audioLove.volume = .3;
$('#love').mouseenter(function() {
  window.audioLove.play();
})
window.audioCheer = new Audio('audio/cheerleader.mp3'); // song should be filepath
window.audioCheer.volume = .3;
$('#chearleader').mouseenter(function() {
  window.audioCheer.play();
})




// mouse exit

$('#MOONLIGHTSHADOW').mouseout(function() {
  window.audioCrab.pause();
})
$('#miracle').mouseout(function() {
  window.audioRuss.pause();
})
$('#eurobeat').mouseout(function() {
  window.audioEuro.pause();
})
$('#tothesky').mouseout(function() {
  window.audioSky.pause();
})
$('#dragostea').mouseout(function() {
  window.audioDragon.pause();
})
$('#dancing').mouseout(function() {
  window.audioDance.pause();
})
$('#gangsta').mouseout(function() {
  window.audioGang.pause();
})
$('#love').mouseout(function() {
  window.audioLove.pause();
})
$('#chearleader').mouseout(function() {
  window.audioCheer.pause();
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

window.scratchaudio = new Audio('audio/buttonscratch.mp3');

$('button').on('click', function() {
  window.scratchaudio.volume = .5;
  window.scratchaudio.play();
})

$('.main-menu').on('click', function() {
  window.location.reload()
})

$('.faster').on('click', function() {
  window.game.restartSongFaster();
})

$('#start-game').on('click', function() {
  window.backaudio = new Audio('audio/backgroundmusic.mp3'); // song should be filepath
  window.backaudio.volume = .5;
  window.backaudio.play();

  window.titleaudio = new Audio('audio/dancedancerevolution.mp3'); // song should be filepath
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

$('.difficulty').on('click', function() {
  window.bestshot = new Audio('audio/bestshot.mp3'); // song should be filepath
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

$('#back-to-difficulty-selection').on('click', function() {
  $('.song-selection').css('display', 'none')
  $('.difficulty-selection').css('display', 'inline-block')
  window.backaudio.play();
})


/////// songs are below
//17.5

$('#miracle').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(126, 'audio/Miracles.mp3', 92000, -75, difficulty, 14, 7.2);
})

$('#MOONLIGHTSHADOW').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(140, 'audio/MOONLIGHTSHADOW.mp3', 89000, 0, difficulty, 14, 8);
})

$('#eurobeat').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(154, 'audio/SUPEREUROBEAT.mp3', 96500, -100, difficulty, 14, 8.8);
})

$('#tothesky').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(130, 'audio/ToTheSky.mp3', 96000, -95, difficulty, 14, 7.42);
})

$('#dragostea').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(130, 'audio/DragosteaDinTei.mp3', 91000, -150, difficulty, 14, 7.42);
})

$('#dancing').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(160, 'audio/dancing.mp3', 90500, -0, difficulty, 14, 9.15);
})

$('#gangsta').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(105, 'audio/GangstaGangsta.mp3', 65000, -30, difficulty, 14, 6);
})

$('#love').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(154, 'audio/LoveisinDanger.mp3', 111000, -50, difficulty, 14, 8.8);
})

$('#chearleader').on('click', function() {
  $('.song-selection').css('display', 'none');
  window.game = new Game(118, 'audio/cheerleader.mp3', 28000, -50, difficulty, 14, 6.74);
})



$('.song').on('click', function() {
  window.goodsongaudio = new Audio('audio/okay.mp3'); // song should be filepath
  window.goodsongaudio.volume = .7;
  window.goodsongaudio.play();
})

liveGameListeners();
