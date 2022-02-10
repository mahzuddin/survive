// bigbal
var posx = 450;
var posy = 200;
var diamet = 50;
// red bal 
var posObstacleX = 50;
var posObstacleY = 50;
var direction = 1 ;
// list obstacle 

// yellow ball
var posObstacleX2 = 100;
var posObstacleY2 = 100;
var direction2 = 1 ;
// pink bal 
var posObstacleX3 = 200;
var posObstacleY3 = 200;
var direction3 = 1 ;
// green bal
var posxbal = 50;
var posybal = 50;
var direction1 = 1;

var gameover = false;
var score;

var listofcolor = ['red','green','blue','yellow','pink','purple','white','skyblue']
var posoflistX = [80,80,400,400,250,80,30,130]
var posoflistY = [400,80,80,400,250,250,80,120]
var direction = [1,1,1,1,1,1,1,1]








// posy-=5;
// noStroke()
// fill ("yellow")
// rect (200,200,50,100)
// noStroke()
// fill ("pink")
// triangle(30, 75, 58, 20, 86,75);
// noStroke()
// fill("green")
// square(300,300,80)
// line_block ();



function setup(){
  createCanvas(500,400);

}


function draw(){
  if(gameover == false){
    background(150);
    fill (255)
    update_postion_cercle();
    block_out_of_screen ();
    big_circle()
    ostacle();
    test_collision()
    compteur_temp()
    baal()
  }
  else {
    background(0)
    text("gameover",170,200);

    text(score ,250,350);
    textSize(40);
  }
 
 
}


 function update_postion_cercle(){
  if (keyIsDown(RIGHT_ARROW)) {
    print("presed right arrow ")
    posx=posx + 10 ;
  }

  if (keyIsDown(LEFT_ARROW)) {
    print("presed left arrow")
    posx=posx - 10 ;
    
  }

  if (keyIsDown(UP_ARROW)) {
    print("presed up arrow")
    posy=posy - 10 ;
  }

  if (keyIsDown(DOWN_ARROW)) {
    print("presed down arrow")
    posy=posy + 10 ;
  
  }
}

function block_out_of_screen (){
  if (posx < diamet/2){
    posx = 0 + diamet/2;
    stroke('red');
    line(0, 0, 0, 400 );
    strokeWeight(4);
  }
  else if (posx + diamet/2 > 500){
    posx = 500 - diamet/2;
    stroke('red');
    line (500, 0, 500, 400);
    strokeWeight(4);
  } else {
    stroke(255);
  }
  if (posy - diamet/2 <0){
    posy = 0 + diamet/2;
    stroke('red');
    line(0, 0,500, 0);
    strokeWeight(4);

   
  }
  else if(posy + diamet/2 > 400){
    posy = 400 - diamet/2;
    stroke('red');
    line(0, 400, 500, 400);
    strokeWeight(4);
  }
}

function ostacle(){
  
  

  
  
  
}
// function circle_movement (){
//   var d = (posx,posy,posObstacleX ,posObstacleY)
//   if (d<35){
//     fill("yellow")
//   circle(posx,posy,diamet)
// }

//  }
 
function big_circle(){

  fill(255)
  circle(posx,posy,diamet);
}

function  test_collision(){
  for(var index = 0; index<posoflistX.length; index++ ){
    var d = dist(posx,posy,posoflistX[index],posoflistY[index]);
    print(d);
    if (d< 40) {
      fill('red')
      circle(posx,posy,diamet);
      gameover = true ;

    }
  }
}
 
function compteur_temp(){
  let milli = millis();
  milli = milli /1000;
  milli = round(milli)
  score = milli ;
  text('score ' + milli, 180 ,380);
  textSize(40);
  
}
function baal(){
for(var index = 0; index<posoflistX.length; index++ ){
  fill(listofcolor[index]);
   circle(posoflistX[index], posoflistY[index], 30);
   posoflistY[index] = posoflistY[index] + direction[index] * 2; 
   if (posoflistY[index] > 400 ||posoflistY[index] < 0){
       direction[index] = direction[index] * - 1 ;
   }
   

}
}


  




