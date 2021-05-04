const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    backgroundImg ;
    getBackgroundImg( );
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
    Engine.update(engine);

    // write code to display time in correct format here
     

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    //change the data in JSON format
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
     if (hour >= 06 && hour<= 07){
         bg= "sunrise1.png";
     }
     else if (hour >= 07 && hour<= 9){
        bg= "sunrise2.png";
    }
    else if (hour >= 10 && hour<= 11){
        bg= "sunrise3.png";
    }
    else if (hour >= 11 && hour<= 12){
        bg= "sunrise4.png";
    }
    else if (hour >= 12 && hour<= 16){
        bg= "sunrise5.png";
    }
    else if (hour >= 16 && hour<= 18){
        bg= "sunrise6.png";
    }
    else if (hour >= 18 && hour<= 19){
        bg= "sunrise7.png";
    }
    else if (hour >= 19 && hour<= 20){
        bg= "sunrise8.png";
    }
    else if (hour >= 20 && hour<= 21){
        bg= "sunrise10.png";
    }
    else if (hour >= 21 && hour<= 23){
        bg= "sunrise11.png";
    }
    else if (hour >= 21 && hour<= 5){
        bg= "sunrise12.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
