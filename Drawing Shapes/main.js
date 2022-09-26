const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

width = canvas.width = 600
height = canvas.height = 600

padding = width * 0.1
padSpace = width * 0.8

let randomValue = function(area, pad){
    return (Math.floor(Math.random() * area + pad))
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
        x: 0,
        y: 0
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

function draw() {
    c.fillRect(0,0, width, height)
    rectangle.drawShape()
    circle.drawShape()
    triangle.drawShape()
    ellipse.drawShape()

}
draw()