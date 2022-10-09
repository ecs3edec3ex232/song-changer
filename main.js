let_it_go=""; 
INYLTFNTR =""; 

function preload(){
   let_it_go =loadSound('song_1.mp3');
   INYLTFNTR =loadSound('song_2.mp3');
    }

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}