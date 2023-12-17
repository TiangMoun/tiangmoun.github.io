// module aliases
const dx = 1000;


let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
Mouse = Matter.Mouse;
Body = Matter.Body;
// create an engine
let engine = Engine.create();
// create a renderer
let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 3000,
        height: 3000,
        wireframes: false,

    }
});
let mouse = Mouse.create(render.canvas)

// create two boxes and a ground
let mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
})

let ground = Bodies.rectangle(dx + 400, 610, 810, 80, { isStatic: true });

let groundx = Bodies.rectangle(dx + 200, 130, 200, 10, { isStatic: true });



let boxc = Bodies.rectangle(dx + 400, 500, 500, 20, {
    collisionFilter: {
        group: -1
    }

});
let boxa = Bodies.rectangle(dx + 450, 300, 80, 80);

let triangle = Matter.Bodies.trapezoid(dx + 400, 500, 80, 80, 1, {
    isStatic: true,
    collisionFilter: {
        group: -1
    }
})
let stack = Matter.Composites.stack(dx + 120, 30, 4, 3, 10, 20, function (x, y) {
    return Matter.Bodies.rectangle(x, y, 40, 20)
})
let box = Bodies.rectangle(dx + 300, 200, 80, 80, {
    collisionFilter: {
        mass: 10,
    }

});

let rotateConstraint = Matter.Constraint.create({
    bodyA: boxc,
    bodyB: triangle,
    length: 0
})

// add all of the bodies to the world
Composite.add(engine.world, [stack, box, boxa, triangle, ground, groundx, rotateConstraint, boxc, mouseConstraint]);
// run the renderer
Render.run(render);

// create runner
let runner = Runner.create();

// run the engine
Runner.run(runner, engine);