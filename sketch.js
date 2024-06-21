function setup() {
    createCanvas(850, 850);
     background("black");
   
 }
 
 function draw(){
   
    stroke("purple");
    fill("purple");
   
    if(mouseIsPressed){
       circle(mouseX, mouseY,20,20);
    }
 }