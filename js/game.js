const rightArrowImg = document.getElementById("right-arrow");
const leftArrowImg = document.getElementById("left-arrow");
const upArrowImg = document.getElementById("up-arrow");
const downArrowImg = document.getElementById("down-arrow");



class Game {
  constructor(bpm, song, length, arrowInitY, difficulty, waitTime) {
    this.bpm = bpm;
    this.msPerBeat = this.msPerBeatFinder();
    this.song = song;
    this.length = length - this.msPerBeat;
    this.arrowInitY = arrowInitY;
    this.difficulty = difficulty;
    this.easyArray = [];
    this.mediumArray = [];
    this.hardArray = [];
    this.easyArrowSpawn = 0;
    this.score = 0;
    this.notesHit = 0;
    this.notesMissed = 0;
    this.totalNotes = this.notesMissed + this.notesHit;
    this.perfectScore = this.totalNotes * 100;
    this.streak = 0;
    this.longestStreak = 0;
    this.tripBlock = 0;
    this.waitTime = waitTime;
    this.gameBuild();
    this.gameStart();

  };
  msPerBeatFinder() {
    const msPB = 1000 / (this.bpm / 60);
    return msPB;

  };
  playSong() {
    var audio = new Audio(this.song); // song should be filepath
    audio.play();

  };
  gameBuild() {
    //builds the visual aspects of the game on the screen/hides start

  };
  gameStart() {
    const that = this;
    this.playSong();
    setTimeout(function(){
      that.endSong();
    }, that.length)
    setTimeout(function() {
      that.generateArrows();
      liveGameListeners();
    }, (that.msPerBeat * this.waitTime))


  };
  arrowSpawnLocation() {
    const value = Math.floor(Math.random() * 4)
    if (value === 0) {
      return 0;
    } else if (value === 1) {
      return (canvas.width / 4)
    } else if (value === 2) {
      return (canvas.width / 2)
    } else if (value === 3) {
      return (canvas.width * .75)
    }

  };
  generateArrows() {
    this.generateArrowsEasy();
    if (this.difficulty === 'hard' || this.difficulty === 'medium') {
      this.generateArrowsHard();
    }
    animate();


  };
  ArrowValues() {
    let Xvalue = this.arrowSpawnLocation()
    let direction = "";
    let image = ''
    if (Xvalue === 0) {
      direction = 'left';
      image = leftArrowImg
    } else if (Xvalue === (canvas.width * .75)) {
      direction = 'right';
      image = rightArrowImg
    } else if (Xvalue === (canvas.width / 4)) {
      direction = 'down';
      image = downArrowImg
    } else {
      direction = 'up';
      image = upArrowImg
    }
    let XvalueMed = 0;
    let directionMed = "";
    let imageMed = ''
    if (Xvalue === 0) {
      directionMed = 'right';
      imageMed = rightArrowImg
      XvalueMed = (canvas.width * .75);
    } else if (Xvalue === (canvas.width * .75)) {
      directionMed = 'left';
      imageMed = leftArrowImg
      XvalueMed = 0;
    } else if (Xvalue === (canvas.width / 4)) {
      directionMed = 'up';
      imageMed = upArrowImg
      XvalueMed = (canvas.width / 2)
    } else {
      directionMed = 'down';
      imageMed = downArrowImg
      XvalueMed = (canvas.width / 4);
    }
    return [Xvalue, direction, image, XvalueMed, directionMed, imageMed]

  };
  generateArrowsEasy() {
    const that = this;
    window.easyArrowsGenerator = setInterval(function() {
      const chance = Math.random();
      const values = that.ArrowValues();
      if (chance < 0.85) {
        const arrow = new Arrow(values[0], that.arrowInitY, values[2], values[1], 5)
        that.easyArray.push(arrow);
      }
      if (that.difficulty === 'hard') {
        if (chance < 0.20) {
          const arrowM = new Arrow(values[3], that.arrowInitY, values[5], values[4], 5)
          that.mediumArray.push(arrowM);
          that.tripBlock = new Date();
        }
      }
    }, that.msPerBeat)

  };
  generateArrowsHard() {
    const that = this;
    window.hardArrowsGenerator = setInterval(function() {
      const chance = Math.random();
      const values = that.ArrowValues();
      if (chance < 0.25) {
        const arrow = new Arrow(values[0], that.arrowInitY, values[2], values[1], 5)
        that.hardArray.push(arrow);
        var testDate = new Date()
        if (testDate === that.tripBlock){
          that.hardArray.pop();
        }
      }
    }, (that.msPerBeat / 2))

  };
  checkEasy() {
    if (this.easyArray.length > 0) {
      if (this.easyArray[0].y > 580 && this.easyArray[0].y < 650) {
        if (this.easyArray[0].direction === 'right' && rightKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        } else if (this.easyArray[0].direction === 'left' && leftKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        } else if (this.easyArray[0].direction === 'down' && downKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        } else if (this.easyArray[0].direction === 'up' && upKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        }
      } else if (this.easyArray[0].y > 700) {
        this.easyArray.shift();
        this.score -= 100;
      }
    }
  }
  checkHard() {
    if (this.hardArray.length > 0) {
      if (this.hardArray[0].y > 580 && this.hardArray[0].y < 650) {
        if (this.hardArray[0].direction === 'right' && rightKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        } else if (this.hardArray[0].direction === 'left' && leftKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        } else if (this.hardArray[0].direction === 'down' && downKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        } else if (this.hardArray[0].direction === 'up' && upKey === 'down') {
          this.score += 100;
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        }
      } else if (this.hardArray[0].y > 700) {
        this.hardArray.shift();
        this.score -= 100;
        this.notesMissed++
        if (this.streak > this.longestStreak){
          this.longestStreakstreak = this.streak;
        }
        this.streak = 0;
      }
    }
  }
  checkMedium() {
    if (this.mediumArray.length > 0) {
      if (this.mediumArray[0].y > 580 && this.mediumArray[0].y < 650) {
        if (this.mediumArray[0].direction === 'right' && rightKey === 'down') {
          this.score += 100;
          this.mediumArray.shift();
        } else if (this.mediumArray[0].direction === 'left' && leftKey === 'down') {
          this.score += 100;
          this.mediumArray.shift();
        } else if (this.mediumArray[0].direction === 'down' && downKey === 'down') {
          this.score += 100;
          this.mediumArray.shift();
        } else if (this.mediumArray[0].direction === 'up' && upKey === 'down') {
          this.score += 100;
          this.mediumArray.shift();
        }
      } else if (this.mediumArray[0].y > 700) {
        this.mediumArray.shift();
        this.score -= 100;
        this.notesMissed++
        if (this.streak > this.longestStreak){
          this.longestStreakstreak = this.streak;
        }
        this.streak = 0;
      }
    }
  }
  missclickPointReducer() {
    if (this.mediumArray.length > 0 && this.easyArray.length > 0 && this.hardArray.length > 0) {
      if (this.mediumArray[0].y < 580) {
        if (this.hardArray[0].y < 580) {
          if (this.easyArray[0].y < 580) {
            if (rightKey === 'down' || leftKey === 'down' || upKey === 'down' || downKey === 'down'){
            this.score -= 20;
            if (this.streak > this.longestStreak){
              this.longestStreakstreak = this.streak;
              }
            this.streak = 0;
            }
          }
        }
      }
    }
  }
  check() {
    this.checkEasy();
    this.checkMedium();
    this.checkHard();
    this.missclickPointReducer()
  }
  endSong(){
    clearInterval(window.easyArrowsGenerator);
    clearInterval(window.hardArrowsGenerator);
  }
}

// window.cancelAnimationFrame(animate)  if they dont want 2x speed


// calculations for timing
/*
milliseconds per beat:

bpm / 60 === beats per 1000 ms
1000 / beats per 1000 ms === milliseconds per beat (msPB)

Timeout before animation starts (8 bars):

msPB * 34;


*/
