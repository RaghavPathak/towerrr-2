const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,base1,base2,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,ball,rope


function setup(){

var canvas = createCanvas(1200,800)
engine = Engine.create();
    world = engine.world;


ground = new Ground (600,750,1200,20)
base1 = new Ground( 670,650,500,20 )
ball= new Ball (800,200)
rope = new SlingShot(ball.body,{x:200,y:500})
    box1 = new Box(580,610)
    box2 = new Box(610,610)
    box3 = new Box(640,610)
    box4 = new Box(670,610)
    box5 = new Box(700,610)
    box6 = new Box(730,610)
    box7 = new Box(760,610)
    box8 = new Box(610,565)
    box9 = new Box(640,565)
    box10 = new Box(670,565)
    box11 = new Box(700,565)
    box12 = new Box(730,565)
    box13 = new Box(640,520)
    box14 = new Box(670,520)
    box15 = new Box(700,520)
    box16 = new Box(670,475)

}

function draw(){

background("brown")
Engine.update(engine)


ground.display()
base1.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
ball.display()
rope.display()
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}
function mouseReleased(){
    rope.fly();
}
