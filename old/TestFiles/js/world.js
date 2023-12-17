// 引入 Matter.js 库

// 创建引擎和世界
const engine = Matter.Engine.create();
const world = engine.world;

// 创建物体
const attractor = Matter.Bodies.circle(200, 200, 20); // 吸引物体
const attracted = Matter.Bodies.circle(300, 300, 10); // 受吸引物体

// 创建约束
const options = {
    bodyA: attractor,
    bodyB: attracted,
    length: 0, // 这里设置为0，表示物体之间没有初始距离
    stiffness: 0.01, // 引力的强度
};

const gravityConstraint = Matter.Constraint.create(options);

// 将物体和约束添加到世界中
Matter.World.add(world, [attractor, attracted, gravityConstraint]);

// 运行引擎
Matter.Engine.run(engine);
