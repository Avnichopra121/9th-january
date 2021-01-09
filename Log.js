//child class
class Log extends BaseClass
{
  constructor(x,y,height,angle)
  {
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");

    //to set angle to the object
    //pi = 180 degrees
    Matter.Body.setAngle(this.body, angle);
  }
}