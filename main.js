img="";
status="";
objects=[];




function preload() {
 //code for loading image
 img=loadImage("Image1.jpg");  
}

function setup(){
canvas=createCanvas(600,600);
canvas.center();

//code for importing the ssd model
objectDetector=ml5.objectDetector('cocossd',modelLoaded)
//code for identification....
objectDetector.detect(img,getResults);
}

function getResults(error,results){
    
if (error) {
    console.log(error);
}
else{
    console.log(results);

    objects=results;
}


}

function modelLoaded(){
    console.log('Hey Shriya!!!! Your model is working now! :D')
    document.getElementById('status').innerHTML='Status:Detecting Objects!! :D'
    status=true
}

function draw() {
//code for drawing the image over the canvas
image(img,0,0,600,600);

//code for drawing rectangle around dog

//text(text to be typed on the canvas,x,y)




//rect(x,y,width,height)



if (status !="") {
    for (let i = 0; i < objects.length; i++) {
       document.getElementById("status").innerHTML='Status:Objects Detected! :)'
      object_name=objects[i].label
      width=objects[i].width;
      height=objects[i].height;
      x=objects[i].x; 
      y=objects[i].y;
      accuracy=floor(objects[i].confidence*100)+"%"; 
      fill('red');
      text(object_name+" "+accuracy,x,y);
      textSize(15);
      noFill();
      stroke('red');
      rect(x,y,width,height)
    }  
}
}