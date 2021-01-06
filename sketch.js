//create variables.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;
var stone;
var boy, boy_img;
var ground;
var mango1;
var bg_img;
var tree, tree_IMG;
var sling;
//var mangoBodyPosition, stoneBodyPosition;
function preload() {
	//load image.
	boy_img = loadImage("boy.png");
	tree_IMG = loadImage("tree.png");
	bg_img = loadImage("tree.gif");
}
function setup() {
	createCanvas(1500, 600);
	engine = Engine.create();
	world = engine.world;
	//create ground.
	ground = createSprite(750, 560, 1500, 20);
	ground.shapeColor = "black";
	//create mangoes.
	mango1 = new Mango(835, 240, 50);
	mango2 = new Mango(910, 200, 50);
	mango3 = new Mango(980, 270, 50);
	mango4 = new Mango(1085, 210, 50);
	mango5 = new Mango(1090, 100, 50);
	mango6 = new Mango(1170, 170, 50);
	mango7 = new Mango(1010, 130, 50);
	mango8 = new Mango(1150, 250, 50);
	mango9 = new Mango(895, 270, 50);
	mango10 = new Mango(1000, 200, 50);
	//create tree.
	tree = createSprite(1010, 320, 50, 50);
	tree.addImage("trees", tree_IMG);
	tree.scale = 0.40;
	//create stone.
	stone = new Stone(130, 290, 50);
	//create boy.
	boy = createSprite(205, 480, 50, 50);
	boy.addImage("boy", boy_img);
	boy.scale = 0.15;
	//create chain.
	sling = new Chain(stone.body, { x: 130, y: 390 });

	Engine.run(engine);
}


function draw() {
	background(bg_img);
	textSize(25);
	fill("white");
	text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY.");
	drawSprites();
	ground.display();
	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	boy.display();
	stone.display();
	sling.display();
	detectCollision(stone, mango1);
	detectCollision(stone, mango2);
	detectCollision(stone, mango3);
	detectCollision(stone, mango4);
	detectCollision(stone, mango5);
	detectCollision(stone, mango6);
	detectCollision(stone, mango7);


}
function detectCollision(lstone, lmango) {
	var stoneBodyPosition = lstone.body.position;
	var mangoBodyPosition = lmango.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance <= lmango.r + lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
		console.log("Shreya is Good")
	}

}
function mouseDragged() {
	Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
	sling.fly();

}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stone.body, { x: 130, y: 390 })
		sling.attach(stone.body);
	}
}
