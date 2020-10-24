class box{
    constructor(x,y,width,height){
        var options={
            restitution:0.8,
            density:5,
            friction:0.4
            
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;
        World.add(world,this.body);

    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();


        
    }
    
}