import { Component, OnInit } from '@angular/core';
import {PointService} from '../point.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {
  point:number=5;

  constructor(private pointService:PointService) {
    pointService.points$.subscribe(
      points => this.point = points
    )
  }

  ngOnInit() {
  }

}
