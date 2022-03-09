let plantImg = [];
let img = 0;

//This function preloads all my images into an array.
//Preload runs before setup.
function preload() {
  for (i = 0; i <= 20; i++) {
    plantImg[i] = loadImage('plants/'+[i]+'.jpg');
  }
}

function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent('myCanvas');
  frameRate(30);
  imageMode(CENTER);
}

function draw() {
  background(220);
  if (frameCount % 150 == 0) {
    img = int(random(plantImg.length));
  }
  image(plantImg[img], width/2, height/2.5, 400, 711);
}
