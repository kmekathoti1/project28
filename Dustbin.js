class Dustbin{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=150;
        this.h=20;
        var options={
            isStatic:true
        }
        this.image=loadImage("dustbingreen.png")
        this.center=Bodies.rectangle(x,y,this.w,this.h,options);
        this.left=Bodies.rectangle(x-this.w/2,this.y-this.w/2,this.h,this.w,options);
        this.right=Bodies.rectangle(x+this.w/2,this.y-this.w/2,this.h,this.w,options);
        World.add(world,this.center);
        World.add(world,this.left);
        World.add(world,this.right);
    }
    display(){
        var posL=this.left.position;
        var posR=this.right.position;
        var posC=this.center.position;
        imageMode(CENTER);
        image(this.image,this.x,this.y-this.w/2,150,130);
/*rect(posC.x,posC.y,this.w,this.h);
rect(posL.x,posL.y,this.h,this.w);
rect(posR.x,posR.y,this.h,this.w); */

    }
}