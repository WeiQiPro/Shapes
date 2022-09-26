const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

width = canvas.width = 800
height = canvas.height = 800

let padding = width * 0.1
let padSpace = width * 0.8

let gravityEffect = 0.1

let randomValue = function(area, pad){
    return (Math.floor(Math.random() * area + pad))
}

//Gravity function that changes the Y access
function gravity(){
    //Rectangle Gravity
    if (rectangle.p.y + rectangle.h +rectangle.v.y < height) {
        rectangle.v.y += gravityEffect
    } else if (rectangle.p.y + rectangle.h + rectangle.v.y >= height) {
        rectangle.v.y = 0
    }


    //Circle Gravity
    if (circle.p.y + circle.r +circle.v.y < height) {
        circle.v.y += gravityEffect
    } else if (circle.p.y + circle.r + circle.v.y >= height) {
        circle.v.y = 0
    }

    //Triangle Gravity
    if (
       triangle.p.y3 + triangle.v.y3 < height &&
       triangle.p.y2 + triangle.v.y2 < height &&
       triangle.p.y1 + triangle.v.y1 < height 
        ) {
       triangle.v.y1 += gravityEffect
       triangle.v.y2 += gravityEffect
       triangle.v.y3 += gravityEffect
    } else if (
        triangle.p.y3 + triangle.v.y3 >= height ||
        triangle.p.y2 + triangle.v.y2 >= height ||
        triangle.p.y1 + triangle.v.y1 >= height 
        ) {
       triangle.v.y1 = 0
       triangle.v.y2 = 0
       triangle.v.y3 = 0
    }

     //Ellipse Gravity
    if (ellipse.p.y + ellipse.r.y +ellipse.v.y < height) {
        ellipse.v.y += gravityEffect
    } else if (ellipse.p.y + ellipse.r.y + ellipse.v.y >= height) {
        ellipse.v.y = 0
    }

     //Triangle Gravity
     if (
        quadrilateral.p.y4 + quadrilateral.v.y4 < height &&
        quadrilateral.p.y3 + quadrilateral.v.y3 < height &&
        quadrilateral.p.y2 + quadrilateral.v.y2 < height &&
        quadrilateral.p.y1 + quadrilateral.v.y1 < height 
        ) {
        quadrilateral.v.y1 += gravityEffect
        quadrilateral.v.y2 += gravityEffect
        quadrilateral.v.y3 += gravityEffect
        quadrilateral.v.y4 += gravityEffect
     } else if (
            quadrilateral.p.y4 + quadrilateral.v.y4 >= height ||
            quadrilateral.p.y3 + quadrilateral.v.y3 >= height ||
            quadrilateral.p.y2 + quadrilateral.v.y2 >= height ||
            quadrilateral.p.y1 + quadrilateral.v.y1 >= height 
        ) {
            quadrilateral.v.y1 = 0
            quadrilateral.v.y2 = 0
            quadrilateral.v.y3 = 0
            quadrilateral.v.y4 = 0
    }
}
const rectangle = new Rectangle ({
    position: {
        x: randomValue(padSpace, padding),
        y: randomValue(padSpace, padding)
    },
    velocity: {
        x: 0,
        y: 0
    },
    w: randomValue(100, 0),
    h: randomValue(100, 0)
})

const circle = new Circle ({
    position: {
        x: randomValue(padSpace, padding),
        y: randomValue(padSpace, padding)
    },
    velocity: {
        x: 0,
        y: 0
    },
    radius: randomValue(50, 0)
})

const triangle = new Triangle ({
    position: {
        x1: randomValue(padSpace, padding),
        x2: randomValue(padSpace, padding),
        x3: randomValue(padSpace, padding),
        y1: randomValue(padSpace, padding),
        y2: randomValue(padSpace, padding),
        y3: randomValue(padSpace, padding)
    },
    velocity: {
        x1: 0,
        x2: 0,
        x3: 0,
        y1: 0,
        y2: 0,
        y3: 0
    }
})

const ellipse = new Ellipse ({
    position: {
        x: randomValue(padSpace, padding),
        y: randomValue(padSpace, padding)
    },
    velocity: {
        x: 0,
        y: 0
    },
    radius: { 
        x: randomValue(50, 0),
        y: randomValue(50, 0)
    },
    rotation: randomValue(50, 0)
})

const quadrilateral = new Quadrilateral ({
    position: {
        x1: randomValue(padSpace, padding),
        x2: randomValue(padSpace, padding),
        x3: randomValue(padSpace, padding),
        x4: randomValue(padSpace, padding),
        y1: randomValue(padSpace, padding),
        y2: randomValue(padSpace, padding),
        y3: randomValue(padSpace, padding),
        y4: randomValue(padSpace, padding)
    },
    velocity: {
        x1: 0,
        x2: 0,
        x3: 0,
        x4: 0,
        y1: 0,
        y2: 0,
        y3: 0,
        y4: 0
    }
})



function update(){
    requestAnimationFrame(update)
    c.clearRect(0,0, width, height)

    gravity()

    rectangle.updateShape()
    circle.updateShape()
    triangle.updateShape()
    ellipse.updateShape()
    quadrilateral.updateShape()

}
update()