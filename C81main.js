canvas = document.getElementById("myCanvas");
pen = canvas.getContext("2d");
width=2
pen_colour="blue";
pen.beginPath();
pen.strokeStyle = pen_colour;
pen.lineWidth = 1;
pen.rect(150,143,430,200);
pen.stroke();



pen.beginPath();
pen.strokeStyle="blue";
pen.lineWidth=5;
pen.arc(250,210,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="black";
pen.lineWidth=5;
pen.arc(350,210,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="red";
pen.lineWidth=5;
pen.arc(450,210,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="yellow";
pen.lineWidth=5;
pen.arc(300,250,40,0,2*Math.PI);
pen.stroke();

pen.beginPath();
pen.strokeStyle="green";
pen.lineWidth=5;
pen.arc(400,250,40,0,2*Math.PI);
pen.stroke();















