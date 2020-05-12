import { GameComponent } from './game.component';

export class Ball {

    game: GameComponent;
    svg: any;
    cx: number;
    cy: number;
    radius = 30;
    movy = 3;
    movx = 3;

    heightStart = 0;
    heightEnd = 500;

    widthStart = 0;
    widthEnd = 450;

    circle: any;

    constructor(posx, posy, svg, game) {
        this.game = game;
        this.svg = svg;
        this.cx = posx;
        this.cy = posy;
        this.radius = 12;
        this.movy = 3;
        this.movx = 3;
    }

    draw() {
        this.circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        this.circle.setAttribute('cx', this.cx);
        this.circle.setAttribute('cy', this.cy);
        this.circle.setAttribute('r', this.radius);
        this.circle.setAttribute('fill', '#bf00bf');
        this.svg.appendChild(this.circle);
    }

    move() {
        if (this.cy + this.radius >= this.heightEnd) {
            this.movy = -3;
        } else if (this.cy - this.radius <= this.heightStart) {
            this.movy = 3;
        } else if (this.cx + this.radius >= this.widthEnd) {
            this.movx = -3;
            this.game.addPoints1();
        } else if (this.cx - this.radius <= this.widthStart) {
            this.movx = 3;
            this.game.addPoints2();
        }

        this.cy += this.movy;
        this.cx += this.movx;

        this.circle.setAttribute('cx', this.cx);
        this.circle.setAttribute('cy', this.cy);
    }

    changeDirection() {
        if (this.movx > 0 && this.movy > 0) {
            this.movy = - 3;
        } else if (this.movx < 0 && this.movy > 0) {
            this.movy = -3;
        } else if (this.movy < 0 && this.movx < 0) {
            this.movy = 3;
        } else {
            this.movy = 3;
        }
    }
}
