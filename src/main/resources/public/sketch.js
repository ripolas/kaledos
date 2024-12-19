let wishes = [
    'Linksmų artėjančių Kalėdų ir Naujųjų metų!',
    'Tegu klasės žvaigždutė žiba mūsų širdyse!',
    'Lai sniegas papuošia Kalėdų ryto langus!',
    'Tegu meduoliai atneša mums bendrystę ir vienybę!',
];
let current_wish = 0;
let photo_count = 8;
let current_photo = 0;
let photos = [];
let prev_photo;
let snowflakes = [];
let border;
function setup(){
    createCanvas(windowWidth,windowHeight);
    border = loadImage("border.jpg");
    for(let i = 0;i<photo_count;i++){
        photos.push(loadImage((i+1)+".jpg"));
    }
    prev_photo = photos[0];
}
function draw(){
    background(0);
    if(frameCount%(60*4)<60&&current_photo!=0){
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
        if(current_photo>=photos.length){
            current_photo = 0;
        }
    }


    if (frameCount % 2 === 0) {
        snowflakes.push({
          x: random(width),
          y: -10,
          size: random(3, 8),
          speed: random(1, 3),
          speedX: random(-0.5,0.5)
        });
      }
      for (let i = snowflakes.length - 1; i >= 0; i--) {
        let flake = snowflakes[i];
        fill(255);
        noStroke();
        ellipse(flake.x, flake.y, flake.size);
        flake.y += flake.speed;
        flake.x += flake.speedX;
        if (flake.y > height) {
          snowflakes.splice(i, 1);
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