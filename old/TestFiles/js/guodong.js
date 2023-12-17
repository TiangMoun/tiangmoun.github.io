var canvas = document.getElementById("jellyCanvas");
var ctx = canvas.getContext("2d");

// 果冻的属性
var positionX = canvas.width / 2;
var positionY = 100;
var velocityX = 0;
var velocityY = 0;
var gravity = 0.2;
var radius = 50;
var amplitude = 30;  // 形变的振幅
var frequency = 0.05;  // 形变的频率

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    velocityY += gravity;
    positionX += velocityX;
    positionY += velocityY;

    if (positionY > canvas.height - radius) {
        velocityY = -velocityY * 0.8;
        positionY = canvas.height - radius;
    }

    // 计算形变效果的偏移量
    var deformation = amplitude * Math.sin(frequency * positionY);

    // 绘制果冻，同时根据形变偏移量调整y坐标和半径
    ctx.beginPath();
    ctx.arc(positionX, positionY + deformation, radius - deformation, 0, Math.PI * 2);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    requestAnimationFrame(animate);
}

animate();