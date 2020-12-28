class Ball{
    constructor(x,y,width,height){
        var ball_options ={
            restitution: 1.0

        }
    
        this.ball = Bodies.rectangle(x,y,width,height, ball_options);
        this.ba=width;
        this.ba1=height;
        World.add(world,this.ball);
      }
      view(){
          push();
          rectMode(CENTER);
          rotate(this.ball.angle);
          translate(this.ball.position.x,this.ball.position.y);
          rect(0,0,this.ba,this.ba1);
          pop();
      }
}