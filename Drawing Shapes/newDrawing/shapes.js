class GridRect {
    constructor ({
        position = {
        x, y
    }, 
     w, 
     h
    }){
        this.p = position

        this.w = w
        this.h = h
    }

    drawShape(){
        c.strokeStyle = 'black'
        c.strokeRect(this.p.x, this.p.y, this.w, this.h)
    }
}

class Rectangle {
    constructor ({
        position = {
        x, y
    }, 
     w, 
     h
    }){
        this.p = position
        this.w = w
        this.h = h
    }

    drawShape(){
        c.strokeStyle = 'red'
        c.strokeRect(this.p.x, this.p.y, this.w, this.h)
    }
}

class Circle {
    constructor ({
        position,
        radius}){
        this.p = position

        this.r = radius
    }

    drawShape(){
        c.beginPath()
        c.arc(
            this.p.x,
            this.p.y,
            this.r,
            0,
            Math.PI * 2
        )
        c.strokeStyle = 'blue'
        c.stroke()
        c.closePath()
    }
}

class Ellipse {
    constructor ({
        position,
        radiusX,
        radiusY,
        rotation
    }){
        this.p = position
        this.rx = radiusX
        this.ry = radiusY
        this.rr = rotation
    }

    drawShape(){
        c.beginPath()
        c.strokeStyle = 'yellow'
        c.ellipse(
            this.p.x, 
            this.p.y, 
            this.rx, 
            this.ry, 
            this.rr, 
            0, 
            Math.PI * 2)
        c.stroke()
        c.closePath()
    }
}

class Triangle {
    constructor ({
        position,        
        base, 
        hieght
    }){
        this.p = position
        this.b = base
        this.h = hieght
    }

    drawShape(){
        c.strokeStyle = 'green'
        c.beginPath()
        c.moveTo(this.p.x1, this.p.y1)
        c.lineTo(this.p.x2, this.p.y2)
        c.lineTo(this.p.x3, this.p.y3)
        c.lineTo(this.p.x1, this.p.y1)
        c.closePath()
        c.stroke()
    }
}

class Quadrilateral {
    constructor ({
        position = {
        x1, x2, x3, x4, 
        y1, y2, y3, y4
        }, 
        base, 
        hieght
    }){
        this.p = position
        this.b = base
        this.h = hieght
    }

    drawShape(){
        c.strokeStyle = 'orange'
        c.beginPath()
        c.moveTo(this.p.x1, this.p.y1)
        c.lineTo(this.p.x2, this.p.y2)
        c.lineTo(this.p.x3, this.p.y3)
        c.lineTo(this.p.x4, this.p.y4)
        c.lineTo(this.p.x1, this.p.y1)
        c.closePath()
        c.stroke()
    }
}