let wishes [] = [
'palinkejimas1',
'palinkejimas2',
'palinkejimas3'
]
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    background(0);
    fill(255);
    textAlign(CENTER,CENTER);
    text(wishes[current_wish],width/2,height/2);
    if(frameCount%(60*5)==0){
        current_wish++;
        if(current_wish>=wishes.length){
            current_wish = 0;
        }
    }
}