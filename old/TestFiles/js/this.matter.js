// 物理引擎模拟的时间步长（秒）
const timeStep = 1 / 60;

// 物体类
class PhysicsObject {
    constructor(mass, x, y, vx, vy) {
        this.mass = mass; // 质量
        this.position = { x, y }; // 位置
        this.velocity = { x: vx, y: vy }; // 速度
        this.acceleration = { x: 0, y: 0 }; // 加速度
        this.forces = []; // 受力数组
    }

    applyForce(force) {
        this.forces.push(force);
    }

    update() {
        // 计算合力
        let totalForce = { x: 0, y: 0 };
        for (let i = 0; i < this.forces.length; i++) {
            totalForce.x += this.forces[i].x;
            totalForce.y += this.forces[i].y;
        }

        // 计算加速度: F = m * a，所以 a = F / m
        this.acceleration.x = totalForce.x / this.mass;
        this.acceleration.y = totalForce.y / this.mass;

        // 更新速度和位置
        this.velocity.x += this.acceleration.x * timeStep;
        this.velocity.y += this.acceleration.y * timeStep;
        this.position.x += this.velocity.x * timeStep;
        this.position.y += this.velocity.y * timeStep;

        // 清空受力数组
        this.forces = [];
    }
}

// 碰撞检测函数
function checkCollision(obj1, obj2) {
    const dx = obj1.position.x - obj2.position.x;
    const dy = obj1.position.y - obj2.position.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < obj1.radius + obj2.radius) {
        // 碰撞发生
        // 进行碰撞后的逻辑处理...
    }
}

// 使用示例
const object1 = new PhysicsObject(1, 0, 0, 10, 0); // 创建物体1，质量为1kg，初始位置在原点，x轴速度为10m/s
const object2 = new PhysicsObject(2, 5, 0, -5, 0); // 创建物体2，质量为2kg，初始位置在x轴上的5m处，x轴速度为-5m/s

// 施加重力
const gravity = { x: 0, y: -9.8 }; // 重力加速度9.8m/s^2向下
object1.applyForce({ x: gravity.x * object1.mass, y: gravity.y * object1.mass });
object2.applyForce({ x: gravity.x * object2.mass, y: gravity.y * object2.mass });

// 模拟物理运动
setInterval(() => {
    object1.update();
    object2.update();

    checkCollision(object1, object2);
}, timeStep * 1000); // 将时间步长转换为毫秒作为间隔时间
