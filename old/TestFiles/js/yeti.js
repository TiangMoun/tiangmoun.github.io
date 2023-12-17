// 创建引擎和渲染器
var engine = Matter.Engine.create();
var render = Matter.Render.create({
    element: document.getElementById('canvas'),
    engine: engine
});

// 创建一个地面
var ground = Matter.Bodies.rectangle(400, 600, 800, 50, { isStatic: true });

// 创建液体容器
var container = Matter.Bodies.rectangle(400, 300, 600, 20, { isStatic: true });

// 创建液体粒子
var particleOptions = {
    restitution: 0.5,
    friction: 0.1
};
var particles = Matter.Composites.stack(400, 20, 10, 5, 0, 0, function (x, y) {
    return Matter.Bodies.circle(x, y, 10, particleOptions);
});

// 添加所有对象到世界中
Matter.World.add(engine.world, [ground, container, particles]);

// 运行引擎和渲染器
Matter.Engine.run(engine);
Matter.Render.run(render);
