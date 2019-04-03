{/* PSUEDO

// Start Game:
  // display game board
  // create new Game object
  // call Game.gameStart()

class Game {
  constructor(bpm,name,length){
    // this will create the necessary info for selected song
          // this.interval = some-relative-bpm-conversion
          // this.name = name;
          // this.length = length;
}
  setEventListners(){

  on click of any arrow-key:
  // this.checkArrow(e)

  on click of restart button:
  // this.restart()

  on click of main-menu button:
  // this.mainMenu()
}
  gameStart(){

  setEventListners();

  start song...

  setInterval(generateArrow(), this.interval)

  setTimeout(endGame(), this.length)
}

  currentArrows:[];

  generateArrow(){
  // Create New Arrow(direction,img,fallSpeed)
      //fallSpeed will be the this.interval
  // Push arrow to collum
  // Create arrow in html column (arrowDisplay)
  // Call arrowFall method
}
  removeBottomArrow(){
  // this.currentArrows[0].arrowDelete()
  // remove currentArrows[0] from array
}
  changeScore(num){
  // changes score based on num value (+ or -)
}
  checkArrow(e){
  // If currentArrows[0] is is the correct location (Y) and..
  // If keypressed direction corresponds to currentArrows[0] direction
  // and if the key-pressed(e) corresponds...
      // removeBottomArrow()
      // this.changeScore(100)
      // "good" animation
  // else:
      // (this means they clicked with no arrow)
      // this.changeScore(-100)
      // "miss" animation
}
  reduceHealth(){
  // reduce health value by 10
  // if (health <= 0) {
      // stop endGame timeout (from gameStart)
      // game-over! && display score
      // ask for restart or main-menu
}
}
  mainMenu(){
  // refresh page
}
  endGame(){
  // clear interval
  // congratulations! && display score
  // ask for this.restart or this.mainMenu()
}
  restart(){
  // stop song
  // stop endGame timeout (from gameStart)
  // clear interval
  // for each arrow ... this.removeBottomArrow()
  // reset score to 0
  // reset health to 0
  // this.gameStart()
}

}


**********************************************************


class Arrow {
  constructor(direction,image,fallSpeed){
  this.fallingSpeed = (some faster value than fallSpeed)
  this.direction = (left/right/up/down);
  this.image = ("the url to the corresponding image")
}
  arrowDisplay(){
    // creates HTML arrow element for this arrow w/ iamge
}
  arrowFall(){
    // decreases Y value this.fallingSpeed
    // if (Y value < then the arrow-key buttons Y){
        // (this means the player missed the arrow)
        // game.changeScore(-200)
        // game.removeBottomArrow()
  }
}
  arrowDelete{
    // deletes this arrow from html
}
}



*/
}
