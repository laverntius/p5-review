var x = 0;
var y = 0;

function setup() {
  createCanvas(640, 480);
}

function draw() {
    background(0);
    redCircle();
    greenStripe();
    whiteLines();
    changeBackground();
    rowCircles(250);
    rowCircles(350);
}

function redCircle(){
     noStroke();
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 100, 100);
}

function greenStripe(){
    fill(0, 250, 0);
    x = 200;
    y++;
    rect(x, y, 200, height);
}

function changeBackground(){  
    if(mouseIsPressed && mouseY < 200){
        background(255, 255, 0)
   }
   else if(mouseIsPressed && mouseY >=200){
        background(0, 0, 255);
    }
}

function rowCircles(yRow){
        var xCircle = 40;
    for(var i = 0; i < 10; i++){
        noStroke();
        fill(255, 255, 0);
        ellipse(xCircle, yRow, 40, 40);
        xCircle += 50;
    }
}
function whiteLines(){
      var i = 0;
    while(i<10){
    
    stroke(255);
    line(100, i*50, 500, i*50);
    i++;
    }
    if(y > height){
        y= 0-height;
    }
    
}