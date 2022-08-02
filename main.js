canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var last_x;
var last_y;

color = "black";
width = 2;
var screenwidth = screen.width;
newwidth = screen.width - 70
newheight = screen.height - 200

if(width < 992){
    document.getElementById("myCanvas").width = newwidth;
    document.getElementById("myCanvas").height = newheight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", click);
function click(e){
    color = document.getElementById("colorinput").value;
    width = document.getElementById("sizeinput").value;
    console.log("touchstart");
    last_x = e.touches[0].clientX - canvas.offsetLeft
    last_y = e.touches[0].clientY - canvas.offsetTop

}

canvas.addEventListener("touchmove", movee);
function movee(e){
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last Positions of mouseX and mouseY are " + last_x + "," + last_y);
        ctx.moveTo(last_x, last_y);
        console.log("Current Positions of mouseX and mouseY are " + current_x + "," + current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();

    last_x = current_x
    last_y = current_y
}

function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}