var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2,100, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;
	packageSprite.velocityY=2;
	packageSprite.visible=false;
	
	

	helicopterSprite=createSprite(100,200,10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;
	helicopterSprite.velocityX=4;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("green")

	

	var options={
		isStatic:true
	  }

	  console.log(groundSprite);
	 
	  var packageSprite_options={
	  restitution:1.0
	  
}

    
	engine = Engine.create();
	world = engine.world;

	
	 //Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	 packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	 World.add(world, packageBody);


	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ellipseMode(RADIUS);
  ellipse(packageSprite.position.x,packageSprite.position.y,40,40);
  rect(ground.position.x,ground.position.y,400,20);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.visible=true;

  }
}



