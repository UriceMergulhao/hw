var mouseEvent = "empty";
var last_postion_of_x,last_postion_of_y;
Canvas= document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");
color = "black";
width = 80;
Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown";

}

Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
    
}

Canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
    
}


Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of x and y coordinates = ");
         console.log("x = " + last_position_of_x + "y = " + last_position_of_y); 
         ctx.moveTo(last_position_of_x, last_position_of_y);

         console.log("Current position of x and y coordinates = ");
          console.log("x = " + current_position_of_x + "y = " + current_position_of_y);
           ctx.lineTo(current_position_of_x, current_position_of_y);

           ctx.stroke();
    }
    last_postion_of_x = current_position_of_x;
    last_postion_of_y = current_position_of_y;
    
}