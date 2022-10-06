let x=45;

function setup() {
  createCanvas(650, 700);
}

function draw() {
  background(25,25,112);
  fill(128, 0, 0);
  ellipse(325, 160, 160, 180);
  rect(245, 250, 160, 180);
  line(400, 190, 315, 70);
  ellipse(290, 140, 40, 40);
  ellipse(270, 70, 60, 55);
  ellipse(387, 74, 60, 55);
  square(190, 370, 55, 20);
  rect(145, 250, 100, 50);
  rect(405, 250, 100, 50);
  circle(100, 270, 90);
  circle(550, 270, 90);
  rect(245, 430, 60, 150);
  rect(345, 430, 60, 150);
  circle(273, 625, 90);
  circle(273, 625, 90);
  circle(375, 625, 90);
  
  fill(116, 161, 46)
  circle(10,685,22);
  circle(35,685,22);
  circle(60,685,22);
  circle(87,685,22);
  circle(114,685,22);
   circle(141,685,22);
   circle(166,685,22);
   circle(191,685,22);
   circle(215,685,22);
   circle(240,685,22);
   circle(265,685,22);
   circle(289,685,22);
   circle(314,685,22);
   circle(338,685,22);
   circle(361,685,22);
  circle(386,685,22);
  circle(410,685,22);
  circle(433,685,22);
  circle(458,685,22);
  circle(481,685,22);
  circle(504,685,22);
  circle(528,685,22);
  circle(551,685,22);
  circle(574,685,22);
  circle(596,685,22);
  circle(619,685,22);
  circle(641,685,22);
  
  fill(204,255,229);
  circle(200,200,80);
  circle(460,200,80);
  
  fill(255,105,180);
  ellipse(290, 140, 20, 20);
  
  fill(245,245,245);
  arc(330, 190, 90, 40, 0, PI + QUARTER_PI, CHORD);
  
  fill(0,0,0);
  ellipse(360, 140, 40, 40);
  
  fill(218,165,32);
  rect(68, 210, 60, 10);
  rect(87.5, 220, 20, 90);
  rect(520, 210, 60, 10);
  rect(539, 220, 20, 90);
  
  fill(135,206,235)
  rect(539, 100, 20, 110);
  rect(87.5, 99.5, 20, 110);
  triangle(87.5, 99.5, 107.5, 99.5, 97.5, 80);
  triangle(538.5, 99.5, 559.5, 99.5, 549.5, 80);
  
  stroke(0,0,0);
  line(9000,700,0,670);
  
  fill(192,192,192);
  square(30,480,185,20);
  noFill();
  
  fill(192,192,192);
  square(440,480,185,20);
  noFill();

   translate(200,200)
  rotate(radians(x));
  rect(-25,-25,50,50)
  
  rotate(radians(360-x))
  rect(-25,-25,50,50)
 
  x = x + 1;
  
  rect(-25,-25,50,50)
  
  rect(-25,-25,50,50)
  
  translate(260,0)
  rect(-25,-25,50,50)
  
  rotate(radians(x));
  rect(-25,-25,50,50)
  
  rect(-25,-25,50,50)
  
  strokeWeight(5);
  
}