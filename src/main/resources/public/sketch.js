let wishes = [
'palinkejimas1',
'palinkejimas2',
'palinkejimas3',
'palinkejimas4',
];
let current_wish = 0;
let photo_count = 8;
let current_photo = 0;
let photos = [];
let prev_photo;
function setup(){
    createCanvas(windowWidth,windowHeight);
    for(let i = 0;i<photo_count;i++){
        photos.push(loadImage((i+1)+".jpg"));
    }
    prev_photo = photos[0];
}
function draw(){
    background(0);
    if(frameCount%(60*4)<60&&current_photo!=0){
        noTint();
        custom_image(photos[0]);
        tint(map(frameCount%(60*4),0,60,0,255));
        custom_image(photos[current_photo]);
        noTint();
    }else{
        custom_image(photos[current_photo]);
    }

    textSize(min(width,height)/20);
    fill(0,150);
    noStroke();
    rectMode(CENTER);
    rect(width/2,height/2,textWidth(wishes[current_wish])+50,min(width,height)/20+50);
    fill(255);
    textAlign(CENTER,CENTER);
    text(wishes[current_wish],width/2,height/2);
    if(frameCount%(60*5)==0){
        current_wish++;
        if(current_wish>=wishes.length){
            current_wish = 0;
        }
    }
    if(frameCount%(60*4)==0){
        current_photo++;
        if(current_photo>photos.length){
            current_photo = 0;
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