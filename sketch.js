var helicopterIMG, helicopterSprite, packageSprite,packageIMG,log1Sprite,log2Sprite,log3Sprite;
var packageBody,ground,log1,log2,log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	log1Sprite = createSprite(400, 380, 200,20);
	log1Sprite.shapeColor=color("red")

	log2Sprite = createSprite(350, 340, 200,20);
	log2Sprite.shapeColor=color("red")

	log3Sprite = createSprite(450, 340, 200,20);
	log3Sprite.shapeColor=color("red")

   // World.add(world, log1)
    //World.add(world, log2)
   // World.add(world, log3)



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Matter.Body.setStatic(log1, true);
	 Matter.Body.setStatic(log2, true);
	 Matter.Body.setStatic(log3, true);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	
    packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});

	Matter.Body.setStatic(packageBody,false);




    
  }
}
