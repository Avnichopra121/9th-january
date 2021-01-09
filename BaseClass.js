//parents class
class BaseClass
{

  //initialize the property
    constructor(x, y, width, height, angle) 
    {
        //JSON format
        //Javascript Object notation(JSON)
      var options = 
      {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //to create a rectangular body
        this.body = Bodies.rectangle(x, y, width, height, options);

        //to assign the same width and height so that it can change according to the user
        this.width = width;
        this.height = height;

        //to assign an image to the class
        this.image = loadImage("sprites/base.png");

        //to add to World in the physics Engine
        World.add(world, this.body);
      }

      display()
      {
        //to assign an angle property to the class
        var angle = this.body.angle;

        //assign/imply the below instructions to the object
        push();

        //translate the object by x/y coordinates with the help of angle
        translate(this.body.position.x, this.body.position.y);

        //to rotate the object according to the angle
        rotate(angle);

        //so that image can be seen in the center
        imageMode(CENTER);

        //assigning the image's properties
        image(this.image, 0, 0, this.width, this.height);

        //stop assign/imply the above instructions to the object
        pop();
      }
}