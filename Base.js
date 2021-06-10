class Base{
    constructor(x,y,width,height,angle){
        var options = {
            restitution:0.2,
            density:1.0,
            friction:2
          }
          this.width = width;
          this.height = height;
          this.body = Bodies.rectangle(x,y,width,height,options);
          this.image=loadImage("sprites/base.png");
          World.add(myworld, this.body);
    }
    display(){
        var pos = this.body.position;
        var angles = this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angles)
       imageMode(CENTER);
       image (this.image,0,0,this.width,this.height);
        pop ();
    }
}