//Create variables here
var dog , happyDog , database , foodS ,foodStock , dogImage;

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(50,50)
  dog.addImage(dogImage)
  dog.scale=0.15;
  // var dogposition = database.ref('dog/position')
  // dogposition.on("value",readPosition,showError)
  foodStock = database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}
  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
  //add styles here



}
function readStock(data){
  foodS = data.val();
  }
  //Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}
