song=""
song2=""

function preload()
{
song = loadSound("Never Gonna Give You Up Original.mp3");
song2 = loadSound("Egzod & EMM - Game Over (Mp3Noi.com).mp3");
}

function setup()
{
  canvas = createCanvas(500, 478);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video, 0, 0, 600, 500);
}