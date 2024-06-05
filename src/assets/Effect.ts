import Particle from "./Particle";

export default class Effect {
    width: number;
    height: number;
    particles: Particle[];
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.canvas.setAttribute('willReadFrequently', 'true');
        this.context = ctx;
        this.width = this.canvas.width;
        this.height =this.canvas. height;
        this.particles = [];
    }

    render(){
        
    }
}