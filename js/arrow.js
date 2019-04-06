

const makeArrow1 = (image,x,y,size) => {
  ctx.drawImage(image, x, y, size, size);
}
const makeArrow2 = (image,x,y,size) => {
  ctx2.drawImage(image, x, y, size, size);
}

class Arrow {
  constructor(x,y,img,direction,speed,player){
    this.x = x;
    this.y = y;
    this.img = img;
    this.direction = direction;
    this.speed = speed;
    this.size = 50;
    this.player = player;
  }
  draw(){
    if (this.player === 1){
    makeArrow1(this.img,this.x,this.y,this.size)
  } else {
    makeArrow2(this.img,this.x,this.y,this.size)
  }
  };
  move(){
    this.y += this.speed;
  }
}
