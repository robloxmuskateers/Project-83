var last_position_of_x, last_position_of_y;
var mouseEvent="empty";
color="black";
width_of_line=2;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var width=screen.width;
var new_width=screen.width-70;
var new_height=screen.height-300;

if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", myTouchStart);

function myTouchStart(e) {
    console.log("myTouchStart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;

    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.tocuhes[0].clientY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);

function myTouchMove(e) {
    console.log("myTouchMove");
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("Last Position Of X And Y Coordinates Are - ");
    console.log("X - "+last_position_of_x+" Y - "+last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);
    
    console.log("Current Position Of X And Y Coordinates Are - ");
    console.log("X - "+current_position_of_touch_x+" Y - "+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}
canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);

function myMouseMove(e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    
    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        
        console.log("Last Position Of X And Y Coordinates =")
        console.log("X = "+last_position_of_x+" Y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current Position Of X And Y Coordinates =");
        console.log("X = "+current_position_of_mouse_x+" Y = "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", myMouseUp);

function myMouseUp(e) {
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);

function myMouseLeave(e) {
    mouseEvent="mouseLeave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}