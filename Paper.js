class Paper extends BaseClass{
    constructor(x,y)
    {
    super(x,y,60,60);
    this.image = loadImage("sprites/paper.png");
    this.body.density = 0.1;
    isStatic : false;
  }
  display(){
        super.display();
  }
}