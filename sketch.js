let plantImg = [];
let img = 0;
let rS = 0;
let leaf = 0;
let flow = 0;
let fort = 0;
let fort2 = 0;
let fort3 = 0;
let wrds1 = '';
let wrds2 = '';
let wrds3 = '';

let rootStem = ['roots you can see',
  'roots you cannot see',
  'a green stem',
  'a brown or red stem'
]

let leaves = ['leaves',
  'leaves',
  'leaves',
  'needles instead of leaves',
  'fewer than 10 leaves',
  'more than 10 leaves',
  'light green leaves',
  'dark green leaves'
]

let flowers = ['no flowers',
  'no flowers',
  'no flowers',
  'at least one flower',
  'at least one flower',
  'at least one flower',
  'at least one flower',
  'yellow flowers',
  'pink or red flowers',
  'white flowers'
]

let fortunes = ['you will have good luck this week.',
  'you will see things with new clarity.',
  'you will find new paths forward.',
  'your mind will find new rhythms.',
  'you may need to seek new perspectives.',
  'you may require aide from a friend.'
]
let fortunes2 = ['you shall remain uncertain about the tasks ahead.',
  'forces outside your control will disrupt your plans.',
  'reconsider old wisdom.',
  'connect with friends and family.',
  'focus on your inner voice.'
]
let fortunes3 = ['find new ways to share your gifts.',
  'deliver on old promises.',
  'recall the kindness of a friend.',
  'share your time and energy with others.',
  'rest and recharge.'
]

//This function preloads all my images into an array.
//Preload runs before setup.
function preload() {
  for (i = 0; i <= 20; i++) {
    plantImg[i] = loadImage('plants/' + [i] + '.jpg');
  }
}

function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.parent('myCanvas');
  let button = createButton('Click here to see your fate.');
  button.parent('button-holder');
  button.mousePressed(divination);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
  coverDisplay();
}

function draw() {}

function divination() {
  img = int(random(plantImg.length));
  rS = int(random(rootStem.length));
  leaf = int(random(leaves.length));
  flow = int(random(flowers.length));
  fort = int(random(fortunes.length));
  fort2 = int(random(fortunes2.length));
  fort3 = int(random(fortunes3.length));
  wrds1 = 'If it has ' + rootStem[rS] + ' ' + fortunes[fort];
  wrds2 = 'If it has ' + leaves[leaf] + ' ' + fortunes2[fort2];
  wrds3 = 'If it has ' + flowers[flow] + ' ' + fortunes3[fort3];
  console.log(wrds1);
  console.log(wrds2);
  console.log(wrds3);
  divImage();
  divText();
}

function coverDisplay() {
  //background(220);
  textSize(60);
  text('Press the button below', width * 0.5, height * 0.4);
  text('to begin your reading.', width * 0.5, height * 0.5);
}

function divImage() {
  background(255);
  image(plantImg[img], width * 0.5, height * 0.4, 400, 711);
}

function divText() {
  textSize(25);
  text('Study the plant:', width / 2, height * 0.81);
  textSize(20);
  text(wrds1, width / 2, height * 0.85);
  text(wrds2, width / 2, height * 0.875);
  text(wrds3, width / 2, height * 0.9);
  textSize(16);
  text('If the plant matches none of these, try again.', width / 2, height * 0.94);
}
