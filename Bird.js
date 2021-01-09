//child class
class Bird extends BaseClass 
{

  constructor(x,y)
  {
    //used to access the roperties from the parents class
    super(x,y,50,50);

    //to loadImage and assign to the object
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");

    //empty array to store x/y (position[]) coordinates of bird 
    this.trajectory =[];

    //this is to add visibility to the object
    //255 means completely visible
    //0 means invisible
    this.Visiblity = 255;
  }

  display() 
  {
    
    super.display();
    
    //storing the values of bird only when its velocity X/Y is greater than 10 & 200
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    //loop applied on the birds trajectory and is used to create the smoke on the screen when bird flies
    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visiblity = this.Visiblity - 0.5;
      tint(255,this.Visiblity);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
