img = "";

function preload(){
img = loadImage("dalmatian.jpg");
}
function setup(){
  canvas = createCanvas(500,700);
  canvas.center();
}
function draw(){
    image(img, 0, 0, 500, 700);
    fill("cadetblue");
    text("Dog", 160, 110);
    textSize(30);
    noFill();
    stroke("cadetblue");
    strokeWeight(3); 
    rect(150, 70, 300, 600);
    
}