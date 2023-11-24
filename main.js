function preload() 
{
    
}
function setup() 
{
    canvas = createCanvas(500, 460)
    canvas.position(485, 200)

    video = createCapture(VIDEO)
    video.hide()
}
function draw() 
{
    image(video, 0, 0, 500, 460)
}