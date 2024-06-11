function setup() {
    createCanvas(400, 400);
    background("green");
    
  }
  
  function draw() {
    fill("#E91E63");
    
   if(mouseIsPressed){
      rect(mouseX,mouseY,20,35);
   }
  }