const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 250;

function preload() {

}

function setup() {
    var canvas = createCanvas(480, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(240, 594, 490, 20)

    for (var k = 0; k <= width; k = k + 80) {
        divisions.push(new Division(k, 468, 20, divisionHeight))
    }

    for (var j = 0; j <= width; j = j + 80) {
        plinkos.push(new Plinko(j, 75, 20))
    }
    

}

function draw() {
    background("black");
    Engine.update(engine);
    ground.display();
   
    for (var k = 0; k <= width; k++) {
        divisions[k].display();
    }
     for (var j = 0; j <= width; j= j+1) {
         plinkos[j].display();
     }
    
   
  
}
