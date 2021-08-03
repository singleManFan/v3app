import Star from './star'

interface Ibg {
    count: number;
    ctx: CanvasRenderingContext2D,
    stars: Array<Star>
}

export default class Bg implements Ibg {
    ctx: CanvasRenderingContext2D;
    count: number;
    stars: Array<Star> = [];
    constructor(ctx: CanvasRenderingContext2D, count: number) {
        this.ctx = ctx;
        this.count = count;
        // 装载星星
        this.init()
    }

    init() {
        while (this.count > 0) {
            this.stars.push(new Star(this.ctx))
            this.count--
        }
    }

    animation() {
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.globalAlpha = 0.5; //尾巴
        this.ctx.fillStyle = 'hsla(217, 64%, 6%, 2)';
        this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        this.ctx.globalCompositeOperation = 'lighter';

        for (let i = 0, l = this.stars.length; i < l; i++) {
            this.stars[i].draw()
        }
        window.requestAnimationFrame(this.animation.bind(this));
    }
}