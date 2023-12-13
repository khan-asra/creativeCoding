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
    let size = canvas.width < canvas.height ? canvas.width * 0.3 : canvas.height * 0.3
    const maxLevel = 4
    const branches = 2

    let sides = 5
    let spread = 0.5
    let scale = 0.5
    let color = 'hsl(' + Math.random() * 360 + ',100%,50%)'

    const randomizeButton = this.document.getElementById('randomizeButton')

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
        for (let index = 0; index < sides; index++) {
            ctx.rotate((Math.PI * 2) / sides)
            drawBranch(0)
            
        }
        
        ctx.restore()
       
     
    }
    drawFractal()
let count =0
    function randomizeFractal() {
       
        sides = Math.random() * 7 + 2
        scale = Math.random() * 0.2 + 0.4
        spread = Math.random() * 2.9 + 0.1
        color = 'hsl(' + Math.random() * 360 + ',100%,50%)'
        
       // drawFractal()
        if (count < 5){
            drawFractal()
            count++;
        }
        else{
            ctx.clearRect(0,0,canvas.width,canvas.height)
            drawFractal()
            count=0
        }
      
    }


    randomizeButton.addEventListener('click', randomizeFractal)


})