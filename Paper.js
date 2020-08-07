class Paper{
    constructor(x,y,r){
this.x=x;
this.y=y;
this.r=r;
var options={
    restitution:0.3,
    density:1.5
}
this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,r,options);
World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
    }
}