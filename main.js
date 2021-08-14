var song_1="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preload(){
   song_1= loadSound("music.mp3");
song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }

    function modelLoaded(){
        console.log('Posenet is intialized');
    }

    function play(){
        song.play();
        song.setVolume();
        song.rate(1);
    }
    function pause(){
        song.pause();
    }

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
}
function pause(){
    song.pause();
}

function gotPoses(results){
    if(results<0){
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.leftWrist.x;
        rightWristY=results[0].pose.leftWrist.y;
    
    }
}