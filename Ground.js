//not a child class
class Ground 
{
    constructor(x,y,width,height) 
    {
      var options = 
      {
        //used so that the object doesnt move
          isStatic: true
      }

      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }

    display()
    {
      //creating a var for storing this.body.position 
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");

      //creating a rectangle by using some properties
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
