

const makeArrow = (image,x,y,size) => {
  ctx.drawImage(image, x, y, size, size);
}
class Arrow {
  constructor(x,y,img,direction,speed){
    this.x = x;
    this.y = y;
    this.img = img;
    this.direction = direction;
    this.speed = speed;
    this.size = 50;
  }
  draw(){
    makeArrow(this.img,this.x,this.y,this.size)
  };
  move(){
    this.y += this.speed;
  }
}




// the makeArrow function will look like this:
/*
const makeArrow = (image,x,y,size) => {
  ctx.drawImage(snowflake, x, y, size, size);
}
*/
