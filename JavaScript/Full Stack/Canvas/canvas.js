var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");
// Drawing a line
// ctx.moveTo(100,100) // This is to specify the pointer location
// ctx.lineTo(400,400) //Specifying the location to which the point must be drawn
// //Dwaring a cricle
// ctx.beginPath();
// ctx.arc(250,250,100,0,2*Math.PI);
// ctx.stroke()
// //Printing Text
// ctx.font = "100px Arial";
// ctx.fillText("Sathvik",100,100)
// //ctx.stroke()

// //Create Gradient

var grd = ctx.createLinearGradient(0,0,300,0);
grd.addColorStop(0,"Blue");
grd.addColorStop(1,"Red");
ctx.fillStyle = grd;
ctx.fillRect(10,10,250,250);