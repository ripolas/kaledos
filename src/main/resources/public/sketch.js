let wishes = [
'palinkejimas1',
'palinkejimas2',
'palinkejimas3',
'palinkejimas4',
];
let current_wish = 0;
let photo_count = 8;
let photos = [];
function setup(){
    createCanvas(windowWidth,windowHeight);
    for(let i = 0;i<photo_count;i++){
        photos.push(loadImage((i+1)+".jpg"));
    }
}
function draw(){
    background(0);
    textSize(min(width,height)/20);
    fill(0,100);
    rectMode(CENTER);
    rect(0,0,min(width,height)/20,textWidth(wishes[current_wish]));

    custom_image(photos[0]);
    fill(255);
    textAlign(CENTER,CENTER);
    text(wishes[current_wish],width/2,height/2);
    if(frameCount%(60*3)==0){
        current_wish++;
        if(current_wish>=wishes.length){
            current_wish = 0;
        }
    }
}

function custom_image(img) {
  let imgAspect = img.width / img.height;
  let canvasAspect = width / height;
  let drawWidth, drawHeight;
  if (imgAspect > canvasAspect) {
    drawHeight = height;
    drawWidth = height * imgAspect;
  } else {
    drawWidth = width;
    drawHeight = width / imgAspect;
  }
  image(img, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
}