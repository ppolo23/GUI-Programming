import { Component, OnInit, ElementRef, SimpleChanges, OnChanges, ViewChild, Input } from '@angular/core';

import * as d3 from 'd3';
import { DataModel } from '../data.model';

@Component({
    selector: 'app-lissajous-chart',
    templateUrl: './lissajous-chart.component.html',
    styleUrls: ['./lissajous-chart.component.css']
})
export class LissajousChartComponent implements OnInit, OnChanges {

    @ViewChild('chart')
    private chartContainer: ElementRef;
    private chart: any;
    private width: number;
    private height: number;
    private xScale: any;
    private yScale: any;
    private lineGenerator: any;

    @Input() data: DataModel[];
    @Input() A: number;
    @Input() B: number;


    margin = { top: 20, right: 20, bottom: 30, left: 40 };

    constructor() { }

    ngOnInit() {
        if (this.data) {
            this.createChart();
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['data']) {
            this.createChart();
        }
    }

    private createChart(): void {
        d3.selectAll('svg').remove();

        const element = this.chartContainer.nativeElement;

        const svg = d3.select(element).append('svg')
            .attr('width', element.offsetWidth)
            .attr('height', element.offsetHeight);

        this.width = this.A;
        this.height = this.B;

        this.chart = svg.append('g')
            .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        this.xScale = d3.scaleLinear().rangeRound([0, this.width]);
        this.yScale = d3.scaleLinear().rangeRound([this.height, 0]);

        this.lineGenerator = d3.line<DataModel>()
            .x(d => this.xScale(d.x))
            .y(d => this.yScale(d.y));

        this.xScale.domain(d3.extent(this.data, (d) => d.x));
        this.yScale.domain(d3.extent(this.data, (d) => +d.y));

        this.chart.append('path')
            .datum(this.data)
            .attr('fill', 'none')
            .attr('stroke', '#673ab7')
            .attr('stroke-linejoin', 'round')
            .attr('stroke-linecap', 'round')
            .attr('stroke-width', 1.5)
            .attr('d', this.lineGenerator);
    }
}
