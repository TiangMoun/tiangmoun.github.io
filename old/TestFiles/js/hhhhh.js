

// 创建一个画布

let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");

canvas.width = 1000;

canvas.height = 1000;

// 定义粒子的类型和颜色

let types = ["A", "B"/*,"C","D"*/];

let colors = ["red", "green", "blue", "black"];

// 定义粒子的行为

// 每个类型的粒子都有一个数组，表示它对其他类型的粒子的吸引或排斥力

// 例如，A类型的粒子对A类型的粒子有-1的力，表示排斥，对B类型的粒子有0.5的力，表示吸引，对C类型的粒子有0的力，表示无影响

let behaviors = {

    A: [1, -0.02, 0, 0],

    B: [1, 0, 0, 0],

    C: [0, 0, 0, 0],

    D: [0, 0, 0, 0]

};

// 定义粒子的类

class Particle {

    constructor(x, y, type) {

        this.x = x; // 粒子的x坐标

        this.y = y; // 粒子的y坐标

        this.type = type; // 粒子的类型

        this.vx = 0//Math.random() * 2 - 1; // 粒子的x速度

        this.vy = 0//Math.random() * 2 - 1; // 粒子的y速度

        this.color = colors[types.indexOf(type)]; // 粒子的颜色

        this.radius = 5; // 粒子的半径

        this.attenuationRadius = 5000;
    }

    // 更新粒子的位置和速度

    update() {

        /*behaviors = {
        
          A: [document.getElementById('aa').value,document.getElementById('ab').value,document.getElementById('ac').value,document.getElementById('ad').value],
        
          B: [document.getElementById('ba').value,document.getElementById('bb').value,document.getElementById('bc').value,document.getElementById('bd').value],
        
          C: [0,0,0,0],
        
          D: [0,0,0,0]
        
        };*/

        // 遍历所有其他粒子，计算它们对当前粒子的力

        for (let other of particles) {

            if (other !== this) {

                // 计算两个粒子之间的距离和角度

                let dx = other.x - this.x;

                let dy = other.y - this.y;

                let dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 10 * this.radius) {

                    let angle = Math.atan2(dy, dx);

                    // 根据当前粒子和其他粒子的类型，获取它们之间的力

                    let force = behaviors[this.type][types.indexOf(other.type)];

                    // 根据力和距离，计算当前粒子受到的加速度

                    let ax = force * Math.cos(angle) / dist;

                    let ay = force * Math.sin(angle) / dist;

                    // 更新当前粒子的速度

                    if (dist < this.attenuationRadius) {

                        this.vx -= ax / this.attenuationRadius;

                        this.vy -= ay / this.attenuationRadius;
                    }

                    else {
                        this.vx += ax;

                        this.vy += ay;
                    }
                }

                else {
                    this.vx += 0;

                    this.vy += 0;
                }

            }

        }

        // 限制当前粒子的速度在一定范围内，避免过快或过慢

        this.vx = Math.max(-5, Math.min(5, this.vx));

        this.vy = Math.max(-5, Math.min(5, this.vy));

        // 更新当前粒子的位置，根据速度和时间间隔（假设为1）

        this.x += this.vx;

        this.y += this.vy;

        // 如果当前粒子超出画布边界，让它从另一边出现，实现循环效果

        if (this.x < 0) {

            this.x += canvas.width;

        }

        if (this.x > canvas.width) {

            this.x -= canvas.width;

        }

        if (this.y < 0) {

            this.y += canvas.height;

        }

        if (this.y > canvas.height) {

            this.y -= canvas.height;

        }

    }

    // 绘制粒子到画布上

    draw() {

        // 设置绘制颜色和形状

        ctx.fillStyle = this.color;

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fill();

    }

}

// 创建一个空数组，用来存储所有粒子对象

let particles = [];

// 随机生成一定数量（例如100）个不同类型和位置的粒子，并添加到数组中

for (let i = 0; i < 10; i++) {

    let x = Math.random() * canvas.width;

    let y = Math.random() * canvas.height;

    let type = types[Math.floor(Math.random() * types.length)];

    let particle = new Particle(x, y, type);

    particles.push(particle);

}

// 定义一个函数，用来更新和绘制所有粒子

function animate() {

    // 清空画布

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 遍历所有粒子，调用它们的更新和绘制方法

    for (let particle of particles) {

        particle.update();

        particle.draw();

    }

    // 使用requestAnimationFrame函数，实现动画效果

    requestAnimationFrame(animate);

}

// 调用animate函数，开始模拟

animate();

