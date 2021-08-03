interface IStar {
    orbitX: number;
    orbitY: number;
    orbitRadius: number;
    radius: number;
    timePassed: number;
    speed: number;
    alpha: number;
    ctx: CanvasRenderingContext2D;
    random(min: number, max?: number): number;
    maxOrbit(x: number, y: number): number;
    draw(): void;
    offScreenRendering(): HTMLCanvasElement
}


export default class Star implements IStar {
    orbitX: number = window.innerWidth / 2;
    orbitY: number = window.innerHeight / 2;
    orbitRadius: number = this.random(this.maxOrbit(window.innerWidth, window.innerHeight));
    radius: number = this.random(60, this.orbitRadius) / 8;
    timePassed: number = this.random(0, 1300);
    speed: number = this.random(this.orbitRadius) / 1000000;
    alpha: number = this.random(2, 10) / 1000;
    ctx: CanvasRenderingContext2D;
    offsreenCanvas: HTMLCanvasElement;

    constructor(ctx: CanvasRenderingContext2D) {
        // 画布上下文
        this.ctx = ctx;
        // 离屏渲染
        this.offsreenCanvas = this.offScreenRendering()
    }

    offScreenRendering() {
        const canvas: HTMLCanvasElement = document.createElement('canvas'),
            ctx: CanvasRenderingContext2D = canvas.getContext('2d') as CanvasRenderingContext2D
        canvas.width = 100;
        canvas.height = 100;
        const half = canvas.width / 2,
            gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
        gradient.addColorStop(0.025, '#CCC');
        gradient.addColorStop(0.1, 'hsl(217, 61%, 33%)');
        gradient.addColorStop(0.25, 'hsl(217, 64%, 6%)');
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(half, half, half, 0, Math.PI * 2);
        ctx.fill();

        return canvas
    }

    random(min: number, max?: number): number {
        if (arguments.length < 2) {
            max = min;
            min = 0;
        }

        if (max && min > max) {
            let hold: number = max;
            max = min;
            min = hold;
        }

        return Math.floor(Math.random() * ((max as number - min + 1)) + min)
    }

    maxOrbit(x: number, y: number) {
        var max = Math.max(x, y),
            diameter = Math.round(Math.sqrt(max * max + max * max));
        return diameter / 2;
        //星星移动范围，值越大范围越小，
    }

    draw() {
        let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
            y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
            twinkle = this.random(10);

        if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
        } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
        }

        this.ctx.globalAlpha = this.alpha;
        this.ctx.drawImage(
            this.offsreenCanvas as HTMLCanvasElement,
            x - this.radius / 2,
            y - this.radius / 2,
            this.radius,
            this.radius
        );
        this.timePassed += this.speed;
    }
}