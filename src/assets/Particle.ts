import Effect from "./Effect";

export default class Particle {
    x: number;
    y: number;
    effect: Effect;

    constructor(effect: Effect) {
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
    }
}