import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Pad } from './pad';
import { Ball } from './ball';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  init = new Date();
  now = new Date();
  time = 0;

  key: string;

  player1 = 'Player 1';
  player2 = 'Player 2';

  player1Points = 0;
  player2Points = 0;

  player1Counter: any;
  player2Counter: any;

  svg: any;
  pad1: Pad;
  pad2: Pad;
  ball: Ball;

  gameInterval: any;

  constructor(public router: Router) {
    setInterval(() => {
      this.now = new Date();
      this.time = this.now.getTime() - this.init.getTime();
    }, 1000);
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    this.key = event.key;
    if (this.key === 'q') {
      this.pad1.update(-10);
    } else if (this.key === 'w') {
      this.pad1.update(10);
    } else if (this.key === 'o') {
      this.pad2.update(-10);
    } else if (this.key === 'p') {
      this.pad2.update(10);
    }
  }

  ngOnInit() {
    this.svg = document.getElementById('svg');
    this.player1Counter = document.getElementById('points1');
    this.player2Counter = document.getElementById('points2');

    this.pad1 = new Pad('pad1', 0, 200, this.svg);
    this.pad2 = new Pad('pad2', 435, 200, this.svg);
    this.ball = new Ball(225, 250, this.svg, this);

    this.pad1.draw();
    this.pad2.draw();
    this.ball.draw();

    this.player1Counter.textContent = this.player1Points;
    this.player2Counter.textContent = this.player2Points;

    setInterval(() => {
      this.player1Counter.textContent = this.player1Points;
      this.player2Counter.textContent = this.player2Points;

      this.ball.move();

      if (this.ball.cx < 15) {
        if (this.ball.cy > this.pad1.y && this.ball.cy < this.pad1.y + this.pad1.height) {
          this.ball.movx *= -1;
        }
      }
      if (this.ball.cx > 435) {
        if (this.ball.cy > this.pad2.y && this.ball.cy < this.pad2.y + this.pad2.height) {
          this.ball.movx *= -1;
        }
      }
    }, 20);

  }

  finish(): void {
    this.player1Points = 0;
    this.player2Points = 0;
    this.router.navigate(['ChessGame/StartGame']);
  }

  addPoints1(): void {
    this.player1Points += 1;
  }

  addPoints2(): void {
    this.player2Points += 1;
  }
}
