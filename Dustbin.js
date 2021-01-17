class Dustbin extends BaseClass{
    constructor(x,y)
    {
    super(x,y,180,200);
    this.image = loadImage("sprites/dustbin.png");
    this.body.density = 0.1;
  }
  display(){
        super.display();
  }
}