class Game {
  constructor(bpm,song,length,arrowInitY){
    this.bpm = bpm;
    this.msPerBeat = this.msPerBeatFinder();
    this.song = song;
    this.length = length;
    this.arrowInitY = arrowInitY;
    this.gameBuild();
    this.gameStart();
  }
  msPerBeatFinder(){
    const msPB = 1000 / (this.bpm / 60);
    return msPB;
  }
  playSong(){
    var audio = new Audio(this.song); // song should be filepath
    audio.play();
  };
  gameBuild(){
    //builds the visual aspects of the game on the screen/hides start
  }
  gameStart(){
    playSong();
    // start animation after certain interval
    // start the generator function(s)
  }
}



// calculations for timing
/*
milliseconds per beat:

bpm / 60 === beats per 1000 ms
1000 / beats per 1000 ms === milliseconds per beat (msPB)

Timeout before animation starts (8 bars):

msPB * 34;


*/
