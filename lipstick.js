lipsX = 0;
lipsY = 0;

function preload() {
    lipstick = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
  }
  

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Loaded !')
}

function gotPoses(results)
{
    if(results.length > 0)
{
    console.log(results);
    lipsX = results[0].pose.lips.x-25;
    lipsY = results[0].pose.lips.y+15;
}
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(lipstick, lipsX, lipsY, 50, 20);
}

function take_snapshot()
{
    save('MyLipFilter.png')
}

function function2()
{
    window.location = "mustache.html";
}