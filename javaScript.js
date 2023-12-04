window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth * 0.8;
    canvas.height = this.window.innerHeight * 0.8;
    //canvas settings
    ctx.fillStyle = 'green'
    ctx.strokeStyle = 'yellow'
    ctx.lineWidth = 10
    ctx.lineCap = 'round'

    //ctx.fillRect(50,50,100,100);
    //effect setting
    let size = 200;
    ctx.save()
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.scale(1, 1)
    ctx.rotate(0)
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath();
    // ctx.moveTo(canvas.width / 2, canvas.height / 2)
    ctx.moveTo(0, 0)
    ctx.lineTo(size, 0)


    let sides = 100

    for (let index = 0; index < sides; index++) {

        ctx.beginPath();
        ctx.moveTo(0, 0)
        ctx.lineTo(size, 0)
        ctx.stroke()
        ctx.rotate((Math.PI*2)/sides)
        ctx.scale(0.97, 0.97)

    }


    // ctx.stroke()
    // ctx.rotate(0.6)
    // ctx.beginPath();
    // ctx.moveTo(0,0)
    // ctx.lineTo(size,0)


    // ctx.stroke()
    // ctx.rotate(0.6)
    // ctx.beginPath();
    // ctx.moveTo(0,0)
    // ctx.lineTo(size,0)


    // ctx.stroke()
    // ctx.rotate(0.6)
    // ctx.beginPath();
    // ctx.moveTo(0,0)
    // ctx.lineTo(size,0)

    ctx.restore()



})