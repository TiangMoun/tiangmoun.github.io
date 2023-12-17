let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

canvas.width = 500;

canvas.height = 500;

let particles = []

class Particle {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    update() {

    }

}



ctx.fillStyle = '#0fafff';

ctx.beginPath();

ctx.arc(100, 100, 10, 0, Math.PI * 2);

ctx.fill();