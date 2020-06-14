var ball,img,paddle,ballImage,paddleImage;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");

}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(10,200,10,10);
  paddle = createSprite(390,200,10,70);
  /* assign the images to the sprites */
  ball.addImage(ballImage);
  paddle.addImage(paddleImage);
  
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9;

}

function draw() {
  background(205,153,0);
  
  /* create Edge Sprites here */
  edges = createEdgeSprites();
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */
  ball.bounceOff(paddle);
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  paddle.collide(edges[2]);
  paddle.collide(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = -10;
    paddle.velocityX = 0;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    paddle.velocityY = 10;
    paddle.velocityX = 0;
  }
  
  randomVelocity();
  
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  if(ball.bounceOff(paddle)){
    var rand = Math.round(random(1,5));
    switch(rand){
      case 1 : ball.velocityY = 150;
               ball.velocityX = 10;
               break;
      case 2 : ball.velocityY = 100;
               ball.velocityX = 10;
               break;
      case 3 : ball.velocityY = 250;
               ball.velocityX = 10;
               break;
      case 4 : ball.velocityY = 300;
               ball.velocityX = 10;
               break;
      case 5 : ball.velocityY = 350;
               ball.velocityX = 10;
               break;
      default : break;         
    }
      
  }
  
  
}


