class Paper {
    constructor(x, y, radius) {
        var options = {
            restitution: 0.3,
           density: 1.2,
           // friction: 0.5
        }
        this.body = Bodies.circle(x, y, radius / 2, options);
        this.radius = radius / 2;
        this.image=loadImage("paper1.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x, pos.y);
       // rotate (angle);
        fill("black");
      //  ellipseMode(CENTER);
       // ellipse(0, 0, this.radius, this.radius);
       imageMode(CENTER);
       image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }

   
}