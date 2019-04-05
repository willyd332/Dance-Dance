{/* PSUEDO

// Start Game:
  // display game board
  // create new Game object
  // call Game.gameStart()

class Game {                                                        // Overarching game class
  constructor(bpm,name,length){                                     // Game object constructed based on song choice
    // this will create the necessary info for selected song
          // this.interval = some-relative-bpm-conversion           // Interval used to time things to the song
          // this.name = name;
          // this.length = length;                                  // Length meaning length of the song
}
  setEventListners(){                                               // sets all the eventListener (on gameStart())

  on click of any arrow-key:
  // this.checkArrow(e)

  on click of restart button:
  // this.restart()

  on click of main-menu button:
  // this.mainMenu()
}
  gameStart(){                                                     // Called immediatley after object created

  setEventListners();

  start song...

  setInterval(generateArrow(), this.interval)                     // Generated one arrow every beat (relative to song)

  setTimeout(endGame(), this.length)                              // When the song lenght is reached, endGame()
}

  currentArrows:[];                                               // Array contianing live arrows
                                                                      // currentArrows[0] always bottom most a
  generateArrow(){
  // Create New Arrow(direction,img,fallSpeed)
      //fallSpeed will be the this.interval                       // Creates new Arrow in array and html
  // Push arrow to collum
  // Create arrow in html column (Arrow.arrowDisplay())
  // Call arrowFall method (Arrow.arrowFall())
}
  removeBottomArrow(){
  // this.currentArrows[0].arrowDelete()                          // Removes the bottom-most arrow
  // remove currentArrows[0] from array
}
  changeScore(num){
  // changes score based on num value (+ or -)                    // changes the score
}
  checkArrow(e){                                                  // When arrow-keys clicked function
  // If currentArrows[0] is is the correct location (Y) and..             // Location defined: num1 < Y < num2
  // If keypressed direction corresponds to currentArrows[0] direction    // Never 2 arrows at once
  // and if the key-pressed(e) corresponds...
      // removeBottomArrow()
      // this.changeScore(100)
      // "good" animation
  // else:                                                        // If they click with no arrow in location
      // (this means they clicked with no arrow)
      // this.changeScore(-100)
      // "miss" animation
}
  reduceHealth(){                                                 // Limited misses allowed (Only missed arrows)
  // reduce health value by 10
  // if (health <= 0) {
      // stop endGame timeout (from gameStart)                    // Endgame timeout set to song length stopped
      // game-over! && display score
      // ask for restart or main-menu
}
}
  mainMenu(){                                                     // This is just nuclear refresh
  // refresh page
}
  endGame(){                                                      // This happens when song ends only
  // clear interval
  // congratulations! && display score
  // ask for this.restart or this.mainMenu()
}
  restart(){                                                      // Restart just resets the current song (no refresh)
  // stop song
  // stop endGame timeout (from gameStart)
  // clear interval
  // for each arrow ... this.removeBottomArrow()
  // reset score to 0
  // reset health to 0
  // this.gameStart()
}

}


**********************************************************       // Put arrow in a second js document


class Arrow {
  constructor(direction,image,fallSpeed){                        // Arrow will be constructed in game.generateArrow()
  this.fallingSpeed = (some faster value than fallSpeed)         // Still timed to song (fall speed is game.interval)
  this.direction = (left/right/up/down);
  this.image = ("the url to the corresponding image")
}
  arrowDisplay(direction){                                       // Direction used to determine init coordinates
    // creates HTML arrow element for this arrow w/ iamge
}
  arrowFall(){                                                   // Decreases Y on an interval (idk canvas yet)
    // decreases Y value-increment interval: this.fallingSpeed
    // if (Y value < then the arrow-key buttons Y){              // If arrow goes below button listeners...
        // (this means the player missed the arrow)
        // game.changeScore(-200)
        // game.removeBottomArrow()                              // Arrows must be sufficiently seperated
        // game.reduceHealth()                                       // thus fallingSpeed > game.interval
  }
}
  arrowDelete{
    // deletes this arrow from html
}
}

                                          // Mainly, idk canvas enough to understand how to refer to the
                                          // Y value, or understand how Arrow object will relate to the
                                          // HTML arrow in canvas...
                                          // i.e. When I remove currentArrows[0], how do I also remove the
                                          // corresponds arrow in canvas...becasue my undestanding of canvas
                                          // is that when you draw something onto it, that drawing doesn't
                                          // actually have an id of its own...
*/
}
