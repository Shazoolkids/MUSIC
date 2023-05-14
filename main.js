Mp1= "";
Mp2="";

function preload()
{
  song = loadSound("music.mp3");
  song = loadSound("music2.mp3");

}

function setup()
{
  canvas = createCanvas(650,550);
  canvas.center()
  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
  image(video, 0, 0, 650, 550);
}