class Stone {
    constructor(x, y, radius) {
        var options =
        {
            isStatic: false,
            restitution: 0,
            friction: 1.5,
            density: 1.2
        }
        this.radius = radius;
        this.image = loadImage("stone.png");
        this.body = Bodies.circle(x, y, this.radius);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 70, 50)
        pop();
    }

}