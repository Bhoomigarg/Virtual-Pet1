var dog,happydog,food,foodStock,foodS;
var database;
function preload()
{	
  dog = loadImage("images/dogImg1.png");
  dog2 = loadImage("images/dogImg.png");
}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  
  dog1= createSprite(350,350);
  dog1.addImage(dog);
  dog1.scale = 0.5;
  foodStock =  database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background("46,139,87")
textSize (15);
text ("Food Remaining"+foodS,500,500);
text("press UpArrow to feed the dog a milk bottle",200,100);
  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(dog2)
  }}
  function readStock(data){
    foodS= data.val()
  }

  function writeStock(X){
    if(x<=0){
      x=0
    }
    else{
      x = x-1;
    }
    database.ref('/').update({
      Food:x
    })
  }



