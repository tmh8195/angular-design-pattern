import { Component, OnInit } from '@angular/core';
import {PointService} from '../point.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  point:number=3;

  constructor(private pointService:PointService) {
    pointService.points$.subscribe(
      points => this.point = points
    )
  }

  ngOnInit() {
  }

  up(){
    this.pointService.up();
  }

  down(){
    this.pointService.down();
  }

}
