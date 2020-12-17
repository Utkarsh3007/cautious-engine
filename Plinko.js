class Plinko {
    constructor(x, y,radius) {
        var option = {
        isStatic:true,
        
        }
        this.body =Bodies.circle(x, y,radius, option);
        this.radius=radius
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
    
        ellipseMode(CENTER)
        fill(255)
        ellipse(pos.x,pos.y,this.radius,this.radius)                           
    }
}