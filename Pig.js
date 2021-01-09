//child class
class Pig extends BaseClass 
{
  constructor(x, y)
  {
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.image.scale = 2.0;
    this.Visiblity = 255;
  }

 display()
 {
  
  //threshold for checking when the pig is hit
   if(this.body.speed < 3)
   {
    super.display();
   }
   //removing the pig when it is hit by using tint affect
   else
   {
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;

     //assigning the tint property to the pigs
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score()
  {
    //if the visibitlity is less than zero and greater than -1005
    //used to give a command to increase the score by a particular number when the pig is hit
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
      pigSnortSound.play();

      console.log(this.visibility);
    }
  }



};
