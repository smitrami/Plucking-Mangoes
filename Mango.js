class Mango {
    constructor(x, y, radius) {
        var options =
        {
            isStatic: true,
            restitution: 10,
            friction: 1,
            frictionAir: 0.0

        };
        this.r = radius;
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        this.scale = scale;
        push();
        translate(pos.x, pos.y)
        fill("yellow");
        ellipseMode(CENTER);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 60);
        pop();
    }
}