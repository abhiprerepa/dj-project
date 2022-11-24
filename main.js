song = "";
song2 = "";

function preload() {
    song = loadSong("music.mp3")
    song2 = loadSong("music2.mp3")
}

function setup() {
    canvas = createCanvas(520, 520);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 520);
}

function play() {
}

function gotPoses() {
    
}