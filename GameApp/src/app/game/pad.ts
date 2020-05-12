export class Pad {

    id: number;
    svg: any;
    x: number;
    y: number;
    width = 15;
    height = 100;
    widthEnd = 500;
    widthStart = 0;

    rect: any;

    constructor(id, posx, posy, svg) {

        this.id = id;
        this.svg = svg;
        this.x = posx;
        this.y = posy;
    }

    draw() {
        this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        this.rect.setAttribute('width', this.width);
        this.rect.setAttribute('height', this.height);
        this.rect.setAttribute('fill', '#7b1fa2');
        this.rect.setAttribute('stroke', '#000000');
        this.rect.setAttribute('stroke-width', 1);
        this.rect.setAttribute('x', this.x);
        this.rect.setAttribute('y', this.y);
        this.svg.appendChild(this.rect);
    }

    update(y) {
        this.y += y;
        this.rect.setAttribute('y', this.y);
        if (this.y + this.height >= 500) {
            this.y = 0;
        } else if (this.y <= 0) {
            this.y = 500 - this.height;
        }
    }

}
