let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let windowHeight = 300;
let windowWidth = 300;

canvas.height = windowHeight;
canvas.width = windowWidth;

canvas.style.background = "black";

const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; // Random color

class Circle {
    constructor(xpos, ypos, radius, color, speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.speed = speed;

        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }

    draw(context) {
        context.beginPath(); 
        context.fillStyle = color;
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.fill();
        context.stroke();
        context.closePath();
    }

    update(){
        this.xpos += this.dx;
        this.ypos += this.dy;

        if(this.xpos + this.radius >= windowWidth || this.xpos - this.radius <=0){
            this.dx = -this.dx;
        
            const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; // Random color
            context.fillStyle = color;
            context.fill();
        }

        if(this.ypos + this.radius >= windowHeight || this.ypos - this.radius <=0){
            this.dy = -this.dy
            const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`; // Random color
            context.fillStyle = color;
            context.fill();
        }
    }
}

let allCircles = [];


function updateCircle(){
    context.clearRect(0, 0, windowWidth, windowHeight); 
    for(let i = 0; i < allCircles.length; i++){
        allCircles[i].update();
        allCircles[i].draw(context);
    }
    requestAnimationFrame(updateCircle);
}

for (let i = 0; i < 32; i++) {
    let rxpos = Math.random() * windowWidth;
    let rypos = Math.random() * windowHeight;
    let rRadius = Math.random() * 5;
    let circleOne = new Circle(rxpos, rypos, rRadius,"white", 2);
    allCircles.push(circleOne);
}

updateCircle();