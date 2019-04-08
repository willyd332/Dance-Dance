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
    this.easyArray2 = [];
    this.mediumArray2 = [];
    this.hardArray2 = [];
    this.easyArrowSpawn = 0;
    this.score = 0;
    this.score2 = 0;
    this.notesHit = 0;
    this.notesMissed = 0;
    this.notesHit2 = 0;
    this.notesMissed2 = 0;
    this.totalNotes = this.notesMissed + this.notesHit;
    this.totalNotes2 = this.notesMissed2 + this.notesHit2;
    this.perfectScore = this.totalNotes * 100;
    this.perfectScore2 = this.totalNotes2 * 100;
    this.streak = 0;
    this.streak2 = 0;
    this.longestStreak = 0;
    this.longestStreak2 = 0;
    this.restartState = '';
    this.waitTime = waitTime;
    this.gameBuild();
    this.gameStart();

  };
  msPerBeatFinder() {
    const msPB = 1000 / (this.bpm / 60);
    return msPB;

  };
  playSong() {
    window.audio = new Audio(this.song); // song should be filepath
    window.audio.play();

  };
  gameBuild() {
    $('.game').css('display', 'inline-block');
  };
  gameStart() {
    const that = this;
    this.playSong();
    window.endingSong = setTimeout(function() {
      that.endSong();
    }, that.length)
    setTimeout(function() {
      that.restartState = 'off';
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
      const that = this;
      setTimeout(function() {
        that.generateArrowsHard();
      }, (that.msPerBeat / 2))
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
      const chance = Math.random();
      if (chance < .33) {
        directionMed = 'right';
        imageMed = rightArrowImg
        XvalueMed = (canvas.width * .75);
      } else if (chance > .66) {
        directionMed = 'up';
        imageMed = upArrowImg
        XvalueMed = (canvas.width / 2);
      } else {
        directionMed = 'down';
        imageMed = downArrowImg
        XvalueMed = (canvas.width / 4)
      }
    } else if (Xvalue === (canvas.width * .75)) {
      const chance = Math.random();
      if (chance < .33) {
        directionMed = 'down';
        imageMed = downArrowImg
        XvalueMed = (canvas.width / 2);
      } else if (chance > .66) {
        directionMed = 'up';
        imageMed = upArrowImg
        XvalueMed = (canvas.width / 2);
      } else {
        directionMed = 'left';
        imageMed = leftArrowImg
        XvalueMed = 0
      }
    } else if (Xvalue === (canvas.width / 4)) {
      const chance = Math.random();
      if (chance < .33) {
        directionMed = 'right';
        imageMed = rightArrowImg
        XvalueMed = (canvas.width * .75);
      } else if (chance > .66) {
        directionMed = 'up';
        imageMed = upArrowImg
        XvalueMed = (canvas.width / 2);
      } else {
        directionMed = 'left';
        imageMed = leftArrowImg
        XvalueMed = 0
      }
    } else {
      const chance = Math.random();
      if (chance < .33) {
        directionMed = 'right';
        imageMed = rightArrowImg
        XvalueMed = (canvas.width * .75);
      } else if (chance > .66) {
        directionMed = 'down';
        imageMed = downArrowImg
        XvalueMed = (canvas.width / 4);
      } else {
        directionMed = 'left';
        imageMed = leftArrowImg
        XvalueMed = 0
      }
    }
    Xvalue += (canvas.width / 16);
    XvalueMed += (canvas.width / 16);
    return [Xvalue, direction, image, XvalueMed, directionMed, imageMed]

  };
  generateArrowsEasy() {
    const that = this;
    window.easyArrowsGenerator = setInterval(function() {
      window.easyChance = Math.random();
      window.easyValues = that.ArrowValues();
      if (window.easyChance < 0.85) {
        const arrow = new Arrow(window.easyValues[0], that.arrowInitY, window.easyValues[2], window.easyValues[1], 5, 1)
        that.easyArray.push(arrow);
      }
      if (that.difficulty === 'hard') {
        if (window.easyChance < 0.20) {
          const arrowM = new Arrow(window.easyValues[3], that.arrowInitY, window.easyValues[5], window.easyValues[4], 5, 1)
          that.mediumArray.push(arrowM);
        }
      }
      /// GENERATE PLAYER TWO ARROWS BELOW
      if (playerAmount === 2) {
        if (window.easyChance < 0.85) {
          const arrow2 = new Arrow(window.easyValues[0], that.arrowInitY, window.easyValues[2], window.easyValues[1], 5, 2)
          that.easyArray2.push(arrow2);
        }
        if (that.difficulty === 'hard') {
          if (window.easyChance < 0.20) {
            const arrowM2 = new Arrow(window.easyValues[3], that.arrowInitY, window.easyValues[5], window.easyValues[4], 5, 2)
            that.mediumArray2.push(arrowM2);
          }
        }
      }
    }, that.msPerBeat)
  };
  generateArrowsHard() {
    const that = this;
    window.hardArrowsGenerator = setInterval(function() {
      window.chance = Math.random();
      window.values = that.ArrowValues();
      if (window.chance < 0.25) {
        const arrow = new Arrow(window.values[0], that.arrowInitY, window.values[2], window.values[1], 5, 1)
        that.hardArray.push(arrow);
      }
      /// do the same for PLAYER 2
      if (playerAmount === 2) {
        if (window.chance < 0.25) {
          const arrow2 = new Arrow(window.values[0], that.arrowInitY, window.values[2], window.values[1], 5, 2)
          that.hardArray2.push(arrow2);
        }
      }
    }, (that.msPerBeat))
  };
  checkEasy() {
    if (this.easyArray.length > 0) {
      if (this.easyArray[0].y > 560 && this.easyArray[0].y < 650) {
        if (this.easyArray[0].direction === 'right' && rightKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        } else if (this.easyArray[0].direction === 'left' && leftKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        } else if (this.easyArray[0].direction === 'down' && downKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        } else if (this.easyArray[0].direction === 'up' && upKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.easyArray.shift();
        }
      } else if (this.easyArray[0].y > 700) {
        this.easyArray.shift();
        this.score -= 100;
        updateScore();
        this.notesMissed++
        if (this.streak > this.longestStreak) {
          this.longestStreak = this.streak;
        }
        this.streak = 0;
      }
    }
    //// do the same for PLAYER 2
    if (this.easyArray2.length > 0) {
      if (this.easyArray2[0].y > 560 && this.easyArray2[0].y < 650) {
        if (this.easyArray2[0].direction === 'right' && rightKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.easyArray2.shift();
        } else if (this.easyArray2[0].direction === 'left' && leftKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.easyArray2.shift();
        } else if (this.easyArray2[0].direction === 'down' && downKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.easyArray2.shift();
        } else if (this.easyArray2[0].direction === 'up' && upKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.easyArray2.shift();
        }
      } else if (this.easyArray2[0].y > 700) {
        this.easyArray2.shift();
        this.score2 -= 100;
        updateScore();
        this.notesMissed2++
        if (this.streak2 > this.longestStreak2) {
          this.longestStreak2 = this.streak2;
        }
        this.streak2 = 0;
      }
    }
  }
  checkHard() {
    if (this.hardArray.length > 0) {
      if (this.hardArray[0].y > 560 && this.hardArray[0].y < 650) {
        if (this.hardArray[0].direction === 'right' && rightKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        } else if (this.hardArray[0].direction === 'left' && leftKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        } else if (this.hardArray[0].direction === 'down' && downKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        } else if (this.hardArray[0].direction === 'up' && upKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.hardArray.shift();
        }
      } else if (this.hardArray[0].y > 700) {
        this.hardArray.shift();
        this.score -= 100;
        updateScore();
        this.notesMissed++
        if (this.streak > this.longestStreak) {
          this.longestStreakstreak = this.streak;
        }
        this.streak = 0;
      }
    }
    //// do the same for player 2
    if (this.hardArray2.length > 0) {
      if (this.hardArray2[0].y > 560 && this.hardArray2[0].y < 650) {
        if (this.hardArray2[0].direction === 'right' && rightKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.hardArray2.shift();
        } else if (this.hardArray2[0].direction === 'left' && leftKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.hardArray2.shift();
        } else if (this.hardArray2[0].direction === 'down' && downKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.hardArray2.shift();
        } else if (this.hardArray2[0].direction === 'up' && upKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.hardArray2.shift();
        }
      } else if (this.hardArray2[0].y > 700) {
        this.hardArray2.shift();
        this.score2 -= 100;
        updateScore();
        this.notesMissed2++
        if (this.streak2 > this.longestStreak2) {
          this.longestStreak2 = this.streak2;
        }
        this.streak2 = 0;
      }
    }
  }
  checkMedium() {
    if (this.mediumArray.length > 0) {
      if (this.mediumArray[0].y > 560 && this.mediumArray[0].y < 650) {
        if (this.mediumArray[0].direction === 'right' && rightKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.mediumArray.shift();
        } else if (this.mediumArray[0].direction === 'left' && leftKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.mediumArray.shift();
        } else if (this.mediumArray[0].direction === 'down' && downKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.mediumArray.shift();
        } else if (this.mediumArray[0].direction === 'up' && upKey === 'down') {
          this.score += 100;
          updateScore();
          this.notesHit++
          this.streak++
          this.mediumArray.shift();
        }
      } else if (this.mediumArray[0].y > 700) {
        this.mediumArray.shift();
        this.score -= 100;
        updateScore();
        this.notesMissed++
        if (this.streak > this.longestStreak) {
          this.longestStreak = this.streak;
        }
        this.streak = 0;
      }
    }
    // do the same for player 2
    if (this.mediumArray2.length > 0) {
      if (this.mediumArray2[0].y > 560 && this.mediumArray2[0].y < 650) {
        if (this.mediumArray2[0].direction === 'right' && rightKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.mediumArray2.shift();
        } else if (this.mediumArray2[0].direction === 'left' && leftKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.mediumArray2.shift();
        } else if (this.mediumArray2[0].direction === 'down' && downKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.mediumArray2.shift();
        } else if (this.mediumArray2[0].direction === 'up' && upKey2 === 'down') {
          this.score2 += 100;
          updateScore();
          this.notesHit2++
          this.streak2++
          this.mediumArray2.shift();
        }
      } else if (this.mediumArray2[0].y > 700) {
        this.mediumArray2.shift();
        this.score2 -= 100;
        updateScore();
        this.notesMissed2++
        if (this.streak2 > this.longestStreak2) {
          this.longestStreak2 = this.streak2;
        }
        this.streak2 = 0;
      }
    }
  }
  missclickPointReducer() {
    if (this.mediumArray.length > 0 && this.easyArray.length > 0 && this.hardArray.length > 0) {
      if (this.mediumArray[0].y < 560) {
        if (this.hardArray[0].y < 560) {
          if (this.easyArray[0].y < 560) {
            if (rightKey === 'down' || leftKey === 'down' || upKey === 'down' || downKey === 'down') {
              this.score -= 8;
              updateScore();
              if (this.streak > this.longestStreak) {
                this.longestStreak = this.streak;
              }
              this.streak = 0;
            }
          }
        }
      }
    }
    if (this.easyArray.length > 0 && this.hardArray.length > 0) {
        if (this.hardArray[0].y < 560) {
          if (this.easyArray[0].y < 560) {
            if (rightKey === 'down' || leftKey === 'down' || upKey === 'down' || downKey === 'down') {
              this.score -= 8;
              updateScore();
              if (this.streak > this.longestStreak) {
                this.longestStreak = this.streak;
              }
              this.streak = 0;
          }
        }
      }
    }
    if (this.easyArray.length > 0) {
          if (this.easyArray[0].y < 560) {
            if (rightKey === 'down' || leftKey === 'down' || upKey === 'down' || downKey === 'down') {
              this.score -= 8;
              updateScore();
              if (this.streak > this.longestStreak) {
                this.longestStreak = this.streak;
              }
              this.streak = 0;
        }
      }
    }
    // do the same for Player2
    if (this.mediumArray2.length > 0 && this.easyArray2.length > 0 && this.hardArray2.length > 0) {
      if (this.mediumArray2[0].y < 560) {
        if (this.hardArray2[0].y < 560) {
          if (this.easyArray2[0].y < 560) {
            if (rightKey2 === 'down' || leftKey2 === 'down' || upKey2 === 'down' || downKey2 === 'down') {
              this.score2 -= 8;
              updateScore();
              if (this.streak2 > this.longestStreak2) {
                this.longestStreak2 = this.streak2;
              }
              this.streak2 = 0;
            }
          }
        }
      }
    }
    if (this.easyArray2.length > 0 && this.hardArray2.length > 0) {
        if (this.hardArray2[0].y < 560) {
          if (this.easyArray2[0].y < 560) {
            if (rightKey2 === 'down' || leftKey2 === 'down' || upKey2 === 'down' || downKey2 === 'down') {
              this.score2 -= 8;
              updateScore();
              if (this.streak2 > this.longestStreak2) {
                this.longestStreak2 = this.streak2;
              }
              this.streak2 = 0;
            }
        }
      }
    }
    if (this.easyArray2.length > 0) {
          if (this.easyArray2[0].y < 560) {
            if (rightKey2 === 'down' || leftKey2 === 'down' || upKey2 === 'down' || downKey2 === 'down') {
              this.score2 -= 8;
              updateScore();
              if (this.streak2 > this.longestStreak2) {
                this.longestStreak2 = this.streak2;
              }
              this.streak2 = 0;
            }
        }
    }
  }
  checkStreak(){
    if (this.streak === 10) {
      $('#my-canvas').css('box-shadow','0px 0px 10px 10px blue')
    } else if (this.streak === 20) {
      $('#my-canvas').css('box-shadow','0px 0px 10px 10px orange')
    } else if (this.streak === 30) {
      $('#my-canvas').css('box-shadow','0px 0px 10px 10px green')
    } else if (this.streak === 40) {
      $('#my-canvas').css('box-shadow','0px 0px 10px 10px purple')
    } else if (this.streak === 50) {
      $('#my-canvas').css('box-shadow','0px 0px 10px 10px red')
    } else if (this.streak < 10) {
      $('#my-canvas').css('box-shadow','0px 0px 0px 0px black')
    }
    if (this.streak2 === 10) {
      $('#my-canvas2').css('box-shadow','0px 0px 10px 10px blue')
    } else if (this.streak2 === 20) {
      $('#my-canvas2').css('box-shadow','0px 0px 10px 10px orange')
    } else if (this.streak2 === 30) {
      $('#my-canvas2').css('box-shadow','0px 0px 10px 10px green')
    } else if (this.streak2 === 40) {
      $('#my-canvas2').css('box-shadow','0px 0px 10px 10px purple')
    } else if (this.streak2 === 50) {
      $('#my-canvas2').css('box-shadow','0px 0px 10px 10px red')
    } else if (this.streak2 < 10) {
      $('#my-canvas2').css('box-shadow','0px 0px 0px 0px black')
    }
  }
  check() {
    this.checkStreak();
    this.checkEasy();
    this.checkMedium();
    this.checkHard();
    this.missclickPointReducer()
  }
  restartSong() {
    if (this.restartState === 'off'){
    $('.game').css('display', 'inline-block')
    $('.results').css('display', 'none')
    this.restartState = 'on';
    this.endSong();
    this.score = 0;
    this.score2 = 0;
    updateScore();
    const that = this;
    clearTimeout(window.endingSong)
    setTimeout(function() {
      window.cancelAnimationFrame(animationLoop);
      that.gameStart();
    }, 2000)
  }
  }
  restartSongFaster() {
    $('.game').css('display', 'inline-block')
    $('.results').css('display', 'none')
    this.restartState = 'on';
    this.endSong();
    this.score = 0;
    this.score2 = 0;
    updateScore();
    that.gameStart();
  }
  endSong() {
    console.log('endingSong');
    clearInterval(window.easyArrowsGenerator);
    clearInterval(window.hardArrowsGenerator);
    // clearInterval(window.easyArrowsGenerator2);
    // clearInterval(window.hardArrowsGenerator2);
    window.audio.pause();
    window.audio.currentTime = 0;
    if (this.restartState === 'off'){
      this.endGame();
    }
  }
  endGame(){
    $('.game').css('display', 'none')
    $('.results').css('display', 'inline-block')
  }
}

// window.cancelAnimationFrame(animate)  if they dont want 2x speed
