class Rectangle {
    constructor ({
        position = {
        x, y
    }, 
    velocity = {
        x, y
    }, w, h}){
        this.p = position
        this.v = velocity
        this.w = w
        this.h = h
    }

    drawShape(){
        c.fillStyle = 'red'
        c.fillRect(this.p.x, this.p.y, this.w, this.h)
    }
}

class Circle {
    constructor ({position, velocity, radius}){
        this.p = position
        this.v = velocity
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
        c.fillStyle = 'blue'
        c.fill()
        c.closePath()
    }
}

class Ellipse {
    constructor ({position, velocity, radius, rotation}){
        this.p = position
        this.v = velocity
        this.r = radius
        this.rr = rotation
    }

    drawShape(){
        c.beginPath()
        c.fillStyle = 'yellow'
        c.ellipse(
            this.p.x, 
            this.p.y, 
            this.r.x, 
            this.r.y, 
            this.rr, 
            0, 
            Math.PI * 2)
        c.fill()
        c.closePath()
    }
}

class Triangle {
    constructor ({position, velocity, base, hieght}){
        this.p = position
        this.v = velocity
        this.b = base
        this.h = hieght
    }

    drawShape(){
        c.fillStyle = 'green'
        c.beginPath()
        c.moveTo(this.p.x1, this.p.y1)
        c.lineTo(this.p.x2, this.p.y2)
        c.lineTo(this.p.x3, this.p.y3)
        c.lineTo(this.p.x1, this.p.y1)
        c.closePath()
        c.fill()
    }
}

class Quadrilateral {
    constructor ({
        position = {
        x1, x2, x3, x4, 
        y1, y2, y3, y4
    }, 
        velocity, 
        base, 
        hieght
    }){
        this.p = position
        this.v = velocity
        this.b = base
        this.h = hieght
    }

    drawShape(){
        c.fillStyle = 'orange'
        c.beginPath()
        c.moveTo(this.p.x1, this.p.y1)
        c.lineTo(this.p.x2, this.p.y2)
        c.lineTo(this.p.x3, this.p.y3)
        c.lineTo(this.p.x4, this.p.y4)
        c.lineTo(this.p.x1, this.p.y1)
        c.closePath()
        c.fill()
    }
}