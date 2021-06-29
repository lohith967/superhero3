var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 15;
control_block_width = 70;
control_block_height = 70;
var control_block1 = " ";
var player_object = " ";
function player_update()  
{
    fabric.Image.fromURL("player.png" , function(img){
        player_object = img;
        player_object.scaleToWidth(120); 
        player_object.scaleToHeight(150);
        player_object.set({
        top:player_y,
        left:player_x
    }); 

        canvas.add(player_object);
    });
}


    function new_image(get_image)  
{
    fabric.Image.fromURL(get_image , function(img){
        control_block1 = img;
        control_block1.scaleToWidth(control_block_width); 
        control_block1.scaleToHeight(control_block_height);
        control_block1.set({
        top:player_y,
        left:player_x
    }); 
        canvas.add(control_block1);
    });
    
}




window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '76')
    {
    new_image("hulk_legs.png");
    console.log("l");
    }

    if(keyPressed == '82')
    {
    new_image("thor_right_hand.png");
    console.log("r");
    }
    if(keyPressed == '66')
    {
    new_image("spiderman_body.png");
    console.log("b");
    }
    if(keyPressed == '70')
    {
    new_image("ironman_face.png");
    console.log("f");
    }
	if(keyPressed == '72')
    {
    new_image("captain_america_left_hand.png");
    console.log("h");
    }
 


    if (e.shiftKey == true && keyPressed == '80')
{
    console.log("Size increased p + shift");
    control_block_height = control_block_height+15;
    control_block_width = control_block_width+15;
    document.getElementById("current_width").innerHTML = control_block_width;
    document.getElementById("current_height").innerHTML = control_block_height;
    console.log(control_block_height);
    console.log(control_block_width);

}
if (e.shiftKey == true && keyPressed == '77')
{
    console.log("Size decreased m + shift");
    control_block_height = control_block_height-15;
    control_block_width = control_block_width-15;
    document.getElementById("current_width").innerHTML = control_block_width;
    document.getElementById("current_height").innerHTML = control_block_height;
    console.log(control_block_height);
    console.log(control_block_width);

}
if(keyPressed == '38')
{
    up();
    console.log("Up");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}
if(keyPressed == '40')
{
    down();
    console.log("Down");
}
if(keyPressed == '37')
{
    left();
    console.log("Left");
}


function up()
{
if(player_y >= 0)
{
    player_y = player_y-control_block_height;
    console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    console.log("When Up arrow key is pressed, X1 = " + control_block_width + " , Y1 = "+control_block_height);
    canvas.remove(player_object);
    player_update();

}
}
function down() {
    if(player_y <= 600)
{
    player_y = player_y+control_block_height;
    console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    console.log("When Up arrow key is pressed, X1 = " + control_block_width + " , Y1 = "+control_block_height);
    canvas.remove(player_object);
    player_update();
    
}
}

function right() {
    if(player_x <= 800)
{
    player_x = player_x+control_block_width;
    console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    console.log("When Up arrow key is pressed, X1 = " + control_block_width + " , Y1 = "+control_block_height);
    canvas.remove(player_object);
    player_update();
    
}
}

function left() {
    if(player_x >= 0)
{
    player_x = player_x-control_block_width;
    console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
    console.log("When Up arrow key is pressed, X1 = " + control_block_width + " , Y1 = "+control_block_height);
    canvas.remove(player_object);
    player_update();
    
}
}
}












