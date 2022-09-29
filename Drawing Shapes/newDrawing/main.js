const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

width = canvas.width = 630
height = canvas.height = 630

gridCanvas = width / 3

padding = 3
padSpace = (width - 12) / 3

let randomValue = function(area, pad){
    return (Math.floor(Math.random() * area + pad))
}

const classList = [Rectangle, Circle, Triangle, Ellipse, Quadrilateral]
let newShapes = []
let squareGrid = []

const map = [
    ['.','.','.',],
    ['.','.','.',],
    ['.','.','.',]
]
map.forEach((row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        case '.':
            squareGrid.push(
                new GridRect ({
                    position: {
                        x: j * gridCanvas + 2,
                        y: i * gridCanvas + 2
                },
                w: padSpace,
                h: padSpace
            })
        )}
    })
})

const grid = [
    ['.','.','.',],
    ['.','.','.',],
    ['.','.','.',]
]

grid.forEach((row, i) => {
    row.forEach((symbol, j) => {
      switch (symbol) {
        case '.':
            newShapes.push({
            name: classList[randomValue(classList.length, 0)],
            grid: {
                x: j,
                y: i
            }
        })
        }
    })
})            

let gridCoorX = function(shape){
    return (padSpace * (shape.grid.x)) + randomValue(padSpace, padding)
} 

let gridCoorY = function(shape){
    return (padSpace * (shape.grid.y)) + randomValue(padSpace, padding)
}

function  drawGrid(padSpace, padding) {
    newShapes.forEach(shape => {
        if (shape.name === Rectangle){
            new Rectangle ({
                position: {
                    x: gridCoorX(shape),
                    y: gridCoorY(shape)
                },
                w: randomValue(100, 0),
                h: randomValue(100, 0)
            }).drawShape()
        } else
        if (shape.name === Circle){
            new Circle ({
                position: {
                    x: gridCoorX(shape),
                    y: gridCoorY(shape)
                },
                radius: randomValue(50, 0)
            }).drawShape()
        } else
        if (shape.name === Triangle){
            new Triangle ({
                position: {
                    x1: gridCoorX(shape),
                    x2: gridCoorX(shape),
                    x3: gridCoorX(shape),
                    y1: gridCoorY(shape),
                    y2: gridCoorY(shape),
                    y3: gridCoorY(shape)
                },
            }).drawShape()
        } else
        if (shape.name === Ellipse){
            new Ellipse ({
                position: {
                    x: gridCoorX(shape),
                    y: gridCoorY(shape)
                },
                radiusX: randomValue(100, 0),
                radiusY: randomValue(100, 0),
                rotation: randomValue(50, 0)
            }).drawShape()
        } else
        if (shape.name === Quadrilateral){
            new Quadrilateral ({
                position: {
                    x1: gridCoorX(shape),
                    x2: gridCoorX(shape),
                    x3: gridCoorX(shape),
                    x4: gridCoorX(shape),
                    y1: gridCoorY(shape),
                    y2: gridCoorY(shape),
                    y3: gridCoorY(shape),
                    y4: gridCoorY(shape)
                },
            }).drawShape()
        }
    })
}

function drawSquare(){
    for (let i = 0; i < squareGrid.length; i++){
        squareGrid[i].drawShape()
    }
}

function draw() {

    c.fillStyle = 'white'
    c.fillRect(0,0, width, height)
    drawSquare()
    drawGrid(padSpace, padding)
}
draw()
