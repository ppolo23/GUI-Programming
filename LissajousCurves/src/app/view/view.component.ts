import { Component, OnInit } from '@angular/core';

import { DataModel } from '../data.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  panelOpenState = false;

  public A = 150; // Amplitude in x direction
  public B = 150; // Amplitude in y direction

  // constants
  public a = 7;
  public b = 6;

  public phi = 0.00;

  public animate = false;

  public period = Math.PI * 2;
  public numberOfPoints = Math.ceil(this.period * 100);
  public angleStep = this.period / this.numberOfPoints;

  public timer;

  data: DataModel[] = [];

  constructor() { }

  ngOnInit() {
    this.generateData();
  }

  private drawChart(): void {
    if (this.animate) {
      this.animateChart();
      this.generateData();
    } else {
      this.generateData();
    }
  }

  private generateData(): void {
    this.data = [];
    for (let i = 0; i < this.numberOfPoints; i++) {
      this.data.push(this.generatePoint(i * this.angleStep));
    }
  }

  private generatePoint(theta): DataModel {
    return new DataModel(
      this.A * Math.sin(this.a * theta + this.phi * Math.PI),
      this.B * Math.sin(this.b * theta)
    );
  }

  private animateChart(): void {
    this.timer = setInterval(() => {
      this.phi += 0.01;
      this.phi %= 2;
      this.generateData();
    }, 100);
  }

  private AChanged(value): void {
    this.A = value;
    this.generateData();
  }

  private BChanged(value): void {
    this.B = value;
    this.generateData();
  }

  private aChanged(value): void {
    this.a = value;
    this.generateData();
  }

  private bChanged(value): void {
    this.b = value;
    this.generateData();
  }

  private phiChanged(value): void {
    this.phi = value;
    this.generateData();
  }

  private toggleChanged(checked): void {
    if (checked) {
      this.animateChart();
    } else {
      clearInterval(this.timer);
    }
  }

}
