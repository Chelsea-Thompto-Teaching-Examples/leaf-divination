let plantImg = [];
let frame;
let phase = 'cover';
let myFont;
let coverSize;
let studySize;
let listSize;
let retrySize;
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
let fortunes2 = ['focus on the tasks ahead.',
  'relinquish some control.',
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
    plantImg[i] = loadImage('assets/' + [i] + '.png');
  }
  frame = loadImage('assets/frame2.png');
  myFont = loadFont('assets/fonts/DancingScript-Regular.ttf');
}

function setup() {
  let canvas = createCanvas(windowWidth*0.5, (windowWidth*0.5)*1.25);
  canvas.parent('myCanvas');
  let button = createButton('Click here to see your fate.');
  button.parent('button-holder');
  button.mousePressed(divination);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(myFont);
  textSize(20);
  textResize();
  coverDisplay();
}

function draw() {}

function divination() {
  phase = 'playing';
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
  image(frame, width*0.5,height*0.5, width, height);
  textSize(coverSize);
  text('Press the button below', width * 0.5, height * 0.4);
  text('to begin your reading.', width * 0.5, height * 0.5);
}

function divImage() {
  //background(255);
  image(frame, width*0.5, height*0.5, width, height);
  image(plantImg[img], width * 0.5, height * 0.4, width*0.2812, width*0.5);
}

function divText() {
  textSize(studySize);
  text('Study the plant:', width / 2, height * 0.625);
  textSize(listSize);
  text(wrds1, width / 2, height * 0.675);
  text(wrds2, width / 2, height * 0.7);
  text(wrds3, width / 2, height * 0.725);
  textSize(retrySize);
  text('If the plant matches none of these, try again.', width / 2, height * 0.8);
}

function textResize() {
  if (windowWidth > 1500) {
    coverSize = 40;
    studySize = 30;
    listSize = 18;
    retrySize = 16;
  } else if (windowWidth > 1200) {
    coverSize = 34;
    studySize = 26;
    listSize = 14;
    retrySize = 12;
  } else if (windowWidth > 900) {
    coverSize = 30;
    studySize = 20;
    listSize = 12;
    retrySize = 10;
  } else if (windowWidth > 600) {
    coverSize = 24;
    studySize = 18;
    listSize = 10;
    retrySize = 9;
  }
}

function windowResized() {
  resizeCanvas(windowWidth*0.5, (windowWidth*0.5)*1.25);
  if (phase == 'cover') {
    coverDisplay();
  } else if (phase == 'playing') {
    divImage();
    divText();
  }
  textResize();
}
