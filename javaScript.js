window.addEventListener('load', function () {
    const canvas = this.document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;
    //canvas settings
    ctx.fillStyle = 'green'
    // ctx.strokeStyle = 'gold'
    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    ctx.shadowColor = 'rgba(0,0,0,0.7)'
    ctx.shadowOffsetX = 10
    ctx.shadowOffsetY = 5
    ctx.shadowBlur = 10


    //ctx.fillRect(50,50,100,100);
    //effect setting
    let size = canvas.width< canvas.height ? canvas.width*0.3: canvas.height * 0.3
    let sides = 5
    let maxLevel = 4
    let spread = 0.5
    let branches = 2
    let scale = 0.5
    let color = 'hsl('+Math.random()*360+',100%,50%)'



    function drawBranch(level) {
        if (level > maxLevel) return;
        ctx.beginPath();
        ctx.moveTo(0, 0)
        ctx.lineTo(size, 0)
        ctx.stroke()

        for (let index = 0; index < branches; index++) {
            ctx.save()
            ctx.translate(size - (size / branches) * index, 0)
            ctx.rotate(spread)
            ctx.scale(scale, scale)
            drawBranch(level + 1)
            ctx.restore()

            ctx.save()
            ctx.translate(size - (size / branches) * index, 0)
            ctx.rotate(-spread)
            ctx.scale(scale, scale)
            drawBranch(level + 1)
            ctx.restore()
        }


    }




    function drawFractal() {
        ctx.save()
        ctx.strokeStyle = color
        ctx.translate(canvas.width / 2, canvas.height / 2)
        // ctx.scale(1, 1)
        // ctx.rotate(0)
        for (let index = 0; index < sides; index++) {
            ctx.rotate((Math.PI * 2) / sides)
            drawBranch(0)
        }
        ctx.restore()

    }

    drawFractal()

    //ctx.fillRect(0, 0, canvas.width, canvas.height)

    // ctx.beginPath();
    // ctx.moveTo(canvas.width / 2, canvas.height / 2)
    // ctx.moveTo(0, 0)
    // ctx.lineTo(size, 0)
    //https://www.gojobs.gov.on.ca/Preview.aspx?Language=English&JobID=199701

    // for (let index = 0; index < sides; index++) {

    //     ctx.beginPath();
    //     ctx.moveTo(0, 0)
    //     ctx.lineTo(size, 0)
    //     ctx.stroke()
    //     ctx.rotate((Math.PI * 2) / sides)
    //     ctx.scale(0.97, 0.97)
    //     ctx.translate(3, 6)

    // }




})